let currentDay = $('#currentDay');
let container = $('.container');
let currentHour = moment().hour();
let row;
let timeBlock;
let hour;
let appointment;
let button;

// Display current day and date in heading
currentDay.text(`Today is ${moment().format('dddd, MMMM Do YYYY')}`);

// Populate time blocks in container
createTimeBlock = (timeBlock) => {
    for (let i = 6; i < 22; i++) {
        row = $('<div></div>');
        row.addClass('row');
        container.append(row);

        timeBlock = $('<div></div>');
        timeBlock.addClass('time-block row w-100');        
        row.append(timeBlock);

        hour = $('<div></div>');
        hour.addClass('hour col-2 pt-2');
        timeBlock.append(hour);      

        appointment = $('<input></input>');
        appointment.addClass('text-dark col-8');
        timeBlock.append(appointment);

        button = $('<button></button>');
        button.addClass('saveBtn col-2');
        timeBlock.append(button);

        if (i < 13) {
            console.log(i);
            hour.text(`${i}:00am`);
            appointment.attr('id', `appt${i}am`);
            button.attr('id', `save${i}am`);
        } else if (i >= 13) {
            console.log(i-12);
            hour.text(`${i-12}:00pm`);
            appointment.attr('id', `appt${i-12}pm`);
            button.attr('id', `save${i-12}pm`);            
        };

        if (i < currentHour) {
            appointment.addClass('past');
        } else if (i == currentHour) {
            appointment.addClass('present');
        } else if (i > currentHour) {
            appointment.addClass('future');
        };
    };
};

createTimeBlock(timeBlock);
