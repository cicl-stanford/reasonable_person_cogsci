const intro = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
        <div style="margin-top: -10%;">
        <h1><b>Welcome!</b></h1>
        <p style="text-align:center; text-wrap: balance; max-width: 700px; margin: auto;">
        In this experiment, you will read several fictional legal cases involving different people.
        After each case, the lawyer will make a statement to the jury about what happened.
        You will see what different jury members think about the lawyer's statement and
        answer some questions about what happened.
        </p>
        <p>Thank you for your participation!</p>
        </div>
       `,
    choices: ['Start'],
    margin_vertical: '10px'
};
