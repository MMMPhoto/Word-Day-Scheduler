let currentDay = $('#currentDay');
let container = $('.container');
let timeBlock = $('<div></div>');

timeBlock.addClass('time-block');


// Display current day and date in heading
currentDay.text(`Today is ${moment().format('dddd, MMMM Do YYYY')}`);

// Populate time blocks in container
createTimeBlock = (timeBlock) => {
    for (let i = 6; i < 22; i++) {
        timeBlock = $('<div></div>');
        timeBlock.addClass('time-block p-5');
        if (i < 13) {
            console.log(i);
            timeBlock.text(`${i}:00am`);
            container.append(timeBlock);
            timeBlock.attr('id', `${i}am`);
        } else if (i >= 13) {
            console.log(i-12);
            timeBlock.text(`${i-12}:00pm`);
            container.append(timeBlock);
            timeBlock.attr('id', `${i-12}pm`);

        };
    };
};
createTimeBlock(timeBlock);
