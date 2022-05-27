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

        timeBlock = $('<form></form>');
        timeBlock.addClass(`time-block row w-100 ${i}00`);        
        row.append(timeBlock);

        hour = $('<label></label>');
        hour.addClass(`hour col-2 pt-2 ${i}00`);
        timeBlock.append(hour);
        
        appointment = $('<input></input>');
        appointment.addClass(`text-dark col-8 ${i}00`);
        // appointment.attr('type', 'text');
        timeBlock.append(appointment);

        button = $('<button><i>Save</i></button>');
        button.addClass(`saveBtn col-2 ${i}00`);
        // button.attr('type', 'submit');
        timeBlock.append(button);

        timeBlock.attr('id', `${i}00Hour`);
        // appointment.attr('name', `${i}00`);

        if (i < 13) {
            console.log(i);
            hour.text(`${i}:00am`);
        } else if (i >= 13) {
            console.log(i-12);
            hour.text(`${i-12}:00pm`);        
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
button = $('.saveBtn');

// Listen for Submit Button
button.click(function(event) {
    event.preventDefault();
    let targetValue = $(this).siblings('input').val();
    console.log (`${targetValue} is registered`);
});


