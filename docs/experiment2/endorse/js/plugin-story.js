var jsPsychStory = (function (jspsych) {
  "use strict";

  const info = {
    name: "story",
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
    },
  };

  class StoryPlugin {
    constructor(jsPsych) {
      this.jsPsych = jsPsych;
    }

    trial(display_element, trial) {

      var html = '';

      // show character and story
      html += '<div id="wrapper" style="width: 80%; min-width: 800px; max-width: 1200px; margin: auto;">';
      html += '<div id="story">';
      html += '<div id="story-character"> <img src="' + trial.image + '"> </img>' +
          '<p> <b>' + trial.name + '</b> </p> </div>';
      html += '<div id="story-text">' + trial.story + '</div>';
      html += '</div>'; // for story

      // add submit button
      html += '<input type="submit" id="story-next" class="jspsych-btn" style="margin: 20px;"' +
        'value="Continue"> </input>';

      html += '</div>';

      display_element.innerHTML = html;

      // add event listeners
      $('#story-next').click(function () {
        end_trial();
      });

      const end_trial = () => {
        var trial_data = {
          name: trial.name,
        };

        display_element.innerHTML = "";

        this.jsPsych.finishTrial(trial_data);
      }
    }
  }

  StoryPlugin.info = info;

  return StoryPlugin;

})(jsPsychModule);
