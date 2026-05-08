var jsPsychEndorse = (function (jspsych) {
  "use strict";

  const info = {
      name: "endorse",
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
            type: jspsych.ParameterType.ARRAY,
            default: [],
          },
      },
  };

  class EndorsePlugin {
      constructor(jsPsych) {
          this.jsPsych = jsPsych;
      }

      trial(display_element, trial) {
          var html = '';

          // show character and story
          html += '<div id="wrapper" style="width: 80%; min-width: 900px; max-width: 1500px; margin: 20px auto;">';
          html += '<div id="story">';
          html += '<div id="story-character"> <img src="' + trial.image + '"> </img>' +
              '<p> <b>' + trial.name + '</b> </p> </div>';
          html += '<div id="story-text">' + trial.story + '</div>';
          html += '</div>'; // for story

          // show main question
          html += '<div id="statement"><span>A lawyer makes a statement to the jury about how ' +
              '<b>a reasonable person</b> would have acted in ' + trial.name + '\'s situation.</span></div>';

          // create question order
          var features = ['generic person'].concat(trial.features);
          var indices = Array.from({ length: trial.features.length }, (_, i) => i + 1);
          var shuffled = jsPsych.randomization.shuffle(indices);
          var question_order = [0].concat(shuffled);

          // Generate jury member letters (A, B, C, etc.)
          const juryLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];

          // show features
          html += '<div id="features" style="height: 300px; overflow-x: hidden;' +
              'overflow-y: scroll; padding-bottom: 30px;">';
          for (var i = 0; i < features.length; i++) {
              var qIndex = question_order[i];
              var featureText = features[qIndex];
              var juryLetter = juryLetters[i];

              html += '<div class="feature-item" data-question-index="' + qIndex + '">';

              // Left: feature with graphics
              html += '<div class="feature-left">';
              html += '<div class="feature-left-header">Juror <b>' + juryLetter + '</b> imagines:</div>';
              html += '<div class="feature-images-container">';
              html += '<div class="jury-box"> <img src="images/jury.png">' +
                  '<div class="jury-letter"><b>' + juryLetter + '</b></div> </div>';
              html += '<div class="thought-box"> <img src="images/thought.png">' +
                  '<div class="thought-text">a reasonable ' + featureText + '</div> </div>';
              html += '</div>'; // for feature images container
              html += '</div>'; // for feature left

              // Right: question and slider response
              html += '<div class="feature-right">';
              html += '<div class="agreement-question">How much do you agree that this is the right ' +
                  'kind of person to consider in ' + trial.name + '\'s situation?</div>';
              html += '<div class="slider-container">';
              html += '<div class="jspsych-html-slider-response-response"' +
                  ' data-question-index="' + qIndex + '"></div>';
              html += '<div class="slider-labels">' +
                  '<span>don\'t agree at all</span>' +
                  '<span>agree very much</span>' + '</div>';
              html += '</div>'; // for slider container
              html += '</div>'; // for feature right

              html += '</div>'; // for feature
          }
          html += '</div>'; // for all features

          // add submit button
          html += '<div style="text-align: center; margin: 0 1em 3em 1em;">';
          html += '<input type="submit" id="submit-button" class="jspsych-btn" value="Continue"> </input>';
          // add reminder
          html += '<p id="reminder"> Please answer all questions in order to continue. </p>';
          html += '</div>';

          html += '</div>'; // for wrapper

          display_element.innerHTML = html;

          var sliders = {};

          $('.jspsych-html-slider-response-response').each(function() {
              var el = this;
              var qIndex = $(this).data('question-index');
              var slider = new RangeSliderPips({
                  target: el,
                  props: {
                      min: 0,
                      max: 100,
                      pips: true,
                      pipstep: 100,
                      hoverable: false,
                      spring: false
                  }
              });
              slider.$on('change', function() {
                  if (!$(el).hasClass('initialized')) {
                      $(el).addClass('initialized');

                      /* Check if all sliders have been interacted with */
                      if ($('.jspsych-html-slider-response-response.initialized').length === features.length) {
                          $('#submit-button').show();
                          $('#reminder').hide();
                      } else {
                          $('#submit-button').hide();
                          $('#reminder').show();
                      }
                  }
              });
              sliders[qIndex] = slider;
          });

          // initially hide submit button
          $('#submit-button').hide();

          // add event listener for submit button
          $('#submit-button').on('click', () => {
              end_trial();
          });

          // Define end_trial function first so it's accessible
          const end_trial = () => {
              var response = [];
              for (var i = 0; i < features.length; i++) {
                  var slider = sliders[i];
                  response.push(parseInt(slider.values[0]));
              }
              var trial_data = {
                  name: trial.name,
                  question_order: question_order,
                  features: features,
                  response: response,
              };
              console.log(trial_data);
              display_element.innerHTML = "";
              this.jsPsych.finishTrial(trial_data);
          };
      }
  }

  EndorsePlugin.info = info;

  return EndorsePlugin;

})(jsPsychModule);
