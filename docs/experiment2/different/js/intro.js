const intro = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
        <div style="margin-top: -10%;">
        <h1><b>Welcome!</b></h1>
        <p style="text-align:center; text-wrap: balance; max-width: 700px; margin: auto;">
        In this experiment, you will read several stories about different characters.
        In each story, we want you to think about a "reasonable person" in
        that character\'s situation. A reasonable person is someone who
        exercises the degree of care, skill, and judgment that would be
        expected of an ordinarily prudent and careful person under similar
        circumstances. We will ask you to imagine how a reasonable person
        would compare to the character in each story. In some stories,
        you might find a reasonable person to be very similar to that
        character, and in other stories, a reasonable person might be
        very different.
        </p>
        <p>Thank you for your participation!</p>
        </div>
       `,
    choices: ['Start'],
    margin_vertical: '10px'
};
