var jsPsychNormality = (function (jspsych) {
  "use strict";

  const info = {
    name: "normality",
    parameters: {
      name: {
        type: jspsych.ParameterType.STRING,
        default: "",
      },
      story: {
        type: jspsych.ParameterType.HTML_STRING,
        default: "",
      },
      image: {
        type: jspsych.ParameterType.STRING,
        default: "",
      },
      outcome: {
        type: jspsych.ParameterType.STRING,
        default: "",
      },
      features: {
        type: jspsych.ParameterType.COMPLEX,
        default: { non_actions: [], actions: [] }
      },
    },
  };

  class NormalityPlugin {
    constructor(jsPsych) {
      this.jsPsych = jsPsych;
    }

    trial(display_element, trial) {

      const labels = ['very abnormal', '', '', '', '', '', 'very normal'];

      var html = '';

      // show character and story
      html += '<div id="wrapper" style="width: 80%; min-width: 800px; max-width: 1500px; margin: 20px auto;">';
      html += '<div id="story">';
      html += '<div id="story-character">' +
        '<img src="' + trial.image + '"> </img>' +
        '<p> <b>' + trial.name + '</b> </p> </div>';
      html += '<div id="story-text">' + trial.story + '</div>';
      html += '</div>';

      // show main question
      html += '<div id="question">' +
        '<span><b> How normal was it that ' + trial.name + '... </b></span>';
      // html += '<br> <div id="reminder" style="padding: 15px; color: red; margin-top: -8px; margin-bottom: -10px;">' + ' <b> Please remember to answer all questions before continuing. </b></div>';
      html += '</div>';


      // create question order
      var nonActions = trial.features["non_actions"];
      var actions = trial.features["actions"];
      var questions = [];
      var question_order = jsPsych.randomization.shuffle([...Array(nonActions.length).keys()]);
      for (var i = 0; i < nonActions.length; i++) {
        questions.push(nonActions[i][1]);
      }
      for (var i = 0; i < actions.length; i++) {
        question_order.push(i + nonActions.length);
        questions.push(actions[i][1]);
      }

      // show features
      html += '<div id="features" style="height: 300px; overflow-x: hidden; overflow-y: scroll; padding-bottom: 30px;">';
      for (var i = 0; i < questions.length; i++) {
        html += '<label class="feature-statement"> ...' + questions[question_order[i]] + '? </label>';
        var options_string = '<ul class="feature-opts" data-name="Q' + question_order[i] +
          '" data-radio-group="Q' + question_order[i] + '">';
        for (var j = 0; j < labels.length; j++) {
          options_string += '<li style="width:' + 100 / labels.length + '%">' +
            '<label class="feature-opt-label"> <input type="radio" name="Q' +
            question_order[i] + '" value="' + j + '" required>' + labels[j] +
            '</label> </li>';
        }
        options_string += '</ul>';
        html += options_string;
      }
      html += '</div>';

      // add submit button
      html += '<div style="margin-bottom: 60px;">';
      html += '<input type="submit" id="submit-button" class="jspsych-btn"' +
        'style="display: block; margin: 0 auto; margin-top: 20px;" value="Continue"> </input>';
      // add reminder
      html += '<p id="reminder"> Please answer all' +
        ' questions in order to continue. </p>';
      html += '</div> </div>';

      display_element.innerHTML = html;

      // check if all questions have been answered before showing submit button
      const checkQuestionsAnswered = () => {
        const allQuestions = document.querySelectorAll('.feature-opts');
        const allAnswered = Array.from(allQuestions).every((question) => {
          const answer = question.querySelector('input[type="radio"]:checked');
          return answer !== null;
        });
        return allAnswered;
      };

      const toggleSubmit = () => {
        const allQuestionsAnswered = checkQuestionsAnswered();
        if (allQuestionsAnswered) {
          $('#submit-button').show();
          $('#reminder').hide();
        } else {
          $('#submit-button').hide();
          $('#reminder').show();
        }
      };

      // add event listeners for radio buttons to check if all questions have been answered
      const radioButtons = document.querySelectorAll('input[type="radio"]');
      radioButtons.forEach((radio) => {
        radio.addEventListener('change', () => {
          toggleSubmit();
        })
      });

      // initially hide submit button
      $('#submit-button').hide();

      // add event listener for submit button
      $('#submit-button').on('click', () => {
        end_trial();
      });

      const end_trial = () => {
        var question_data = {};
        var matches = display_element.querySelectorAll("#features .feature-opts");
        for (var index = 0; index < matches.length; index++) {
          var id = matches[index].dataset["radioGroup"];
          var el = display_element.querySelector('input[name="' + id + '"]:checked');
          if (el === null) {
            var response = "";
          }
          else {
            var response = parseInt(el.value);
          }
          var obje = {};
          if (matches[index].attributes["data-name"].value !== "") {
            var name = matches[index].attributes["data-name"].value;
          }
          else {
            var name = id;
          }
          obje[name] = response;
          Object.assign(question_data, obje);
        }

        var trial_data = {
          name: trial.name,
          question_order: question_order,
          questions: questions,
          response: question_data
        };

        display_element.innerHTML = "";

        this.jsPsych.finishTrial(trial_data);
      }
    }
  }

  NormalityPlugin.info = info;

  return NormalityPlugin;

})(jsPsychModule);
