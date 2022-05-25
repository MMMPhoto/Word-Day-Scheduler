let currentDay = $('#currentDay');
let container = $('.container');
let currentHour = moment().hour(); 
let row;
let timeBlock;
let hour;
let textBox;
let button;

// Display current day and date in heading
currentDay.text(`Today is ${moment().format('dddd, MMMM Do YYYY')}`);

// Populate time blocks in container
createTimeBlock = (timeBlock) => {
    for (let i = 6; i < 22; i++) {
        row = $('<div></div>');
        row.addClass('row');
        timeBlock = $('<div></div>');
        timeBlock.addClass('time-block row w-100');
        container.append(row);
        row.append(timeBlock);
        hour = $('<div></div>');
        hour.addClass('hour col-2 pt-2');
        timeBlock.append(hour);
        textBox = $('<div></div>');
        textBox.addClass('col-8');
        timeBlock.append(textBox);
        button = $('<button></button>');
        button.addClass('saveBtn col-2');
        timeBlock.append(button);
        if (i < 13) {
            console.log(i);
            hour.text(`${i}:00am`);
            timeBlock.attr('id', `${i}am`);
        } else if (i >= 13) {
            console.log(i-12);
            hour.text(`${i-12}:00pm`);
            timeBlock.attr('id', `${i-12}pm`);            
        };
        if (i < currentHour) {
            textBox.addClass('past');
        } else if (i == currentHour) {
            textBox.addClass('present');
        } else if (i > currentHour) {
            textBox.addClass('future');
        };
    };
};

createTimeBlock(timeBlock);
