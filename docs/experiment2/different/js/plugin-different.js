var jsPsychDifferent = (function (jspsych) {
  "use strict";

  const info = {
    name: "different",
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

  class DifferentPlugin {
    constructor(jsPsych) {
      this.jsPsych = jsPsych;
    }

    trial(display_element, trial) {

      var html = '';

      // show character and story
      html += '<div id="wrapper" style="width: 80%; min-width: 800px; max-width: 1500px; margin: 20px auto;">';
      html += '<div id="story">';
      html += '<div id="story-character">' +
        '<img src="' + trial.image + '"> </img>' +
        '<p> <b>' + trial.name + '</b> </p> </div>';
      html += '<div id="story-text">' + trial.story + '</div>';
      html += '</div>';
      // html += '<br>';

      // show main question
      html += '<div id="question"> <span> Imagine a reasonable' +
        ' person in the same situation as ' + trial.name + '.';
      // html += '<br>Which of these would have been different from ' + trial.name +
      //   ' in a reasonable person?';
      html += '<br>A reasonable person would <b>not</b> have...';
      html += '</div>';

      // create question order
      var nonActions = trial.features["non_actions"];
      var actions = trial.features["actions"];
      var questions = [];
      var question_order = jsPsych.randomization.shuffle([...Array(nonActions.length).keys()]);
      for (var i = 0; i < nonActions.length; i++) {
        questions.push(nonActions[i][2]);
      }
      for (var i = 0; i < actions.length; i++) {
        question_order.push(i + nonActions.length);
        questions.push(actions[i][2]);
      }

      // show features
      html += '<div id="features" style="height: 300px; overflow-x: hidden; overflow-y: scroll; padding-bottom: 30px;">';
      for (var i = 0; i < questions.length; i++) {
        html += '<div class="feature-statement">' +
          '<button class="feature-opt-btn" data-order="' + question_order[i] +
          '" data-label="' + questions[question_order[i]] + '"> ...' +
          questions[question_order[i]] + '.</button> </div>';
      }
      html += '<div class="feature-statement"> <button class="feature-opt-btn"' +
        'data-order="15" data-label="None of the above">' +
        '<i>None of the above.</i> </button> </div>';
      html += '</div>';

      // add reminder
      html += '<div style="margin-bottom: 60px;">';
      html += '<p id="reminder"> Please click on' +
        ' all that apply. </p>';

      // add submit button
      html += '<button id="reasonable-next" class="jspsych-btn" style="display: block;' +
        ' margin: 0 auto; margin-top: 20px;"> Continue </button>';
      html += '</div> </div>';

      display_element.innerHTML = html;

      // add event listener to each button
      var featureOpts = document.querySelectorAll('.feature-opt-btn');
      featureOpts.forEach(function (featureOpt) {
        featureOpt.addEventListener('click', function () {
          if (this.classList.contains('selected')) {
            this.classList.remove('selected');
          } else {
            this.classList.add('selected');
          }
        });
      });

      // add event listener to submit button
      document.querySelector("#reasonable-next").addEventListener("click", () => {
        end_trial();
      });

      const end_trial = () => {
        // check if at least one feature is selected
        var feature_selected = false;
        featureOpts.forEach(function (featureOpt) {
          if (featureOpt.classList.contains('selected')) {
            feature_selected = true;
          }
        });
        if (!feature_selected) {
          alert("Please select at least one option.");
          return;
        }

        // save data
        var trial_data = {
          name: trial.name,
          question_order: question_order,
          exp_questions: [],
          feature_order: [],
          feature_selected: [],
        };

        for (const idx of question_order) {
          trial_data.exp_questions.push(questions[idx])
        };

        if (!($(':input[data-label="None of the above"]').hasClass('selected'))) {
          featureOpts.forEach(function (featureOpt) {
            if (featureOpt.classList.contains('selected')) {
              trial_data.feature_order.push(parseInt(featureOpt.dataset.order));
              trial_data.feature_selected.push(featureOpt.dataset.label);
            }
          });
        }

        display_element.innerHTML = "";

        this.jsPsych.finishTrial(trial_data);
      }
    }
  }

  DifferentPlugin.info = info;

  return DifferentPlugin;

})(jsPsychModule);
