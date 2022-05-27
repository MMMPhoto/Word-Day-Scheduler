let currentDay = $('#currentDay');
let container = $('.container');
let currentHour = moment().hour();
let row;
let timeBlock;
let hour;
let appointment;
let button;

// Pull calendar entries from local storage
let calendarEntries = JSON.parse(localStorage.getItem("calendarEntries"));
// Create if calendar entries is null
if (calendarEntries === null) {
    calendarEntries = [];
    for (let i = 6; i < 22; i++) {
        calendarEntries[i-6] = {
            name: `hour${i}`,
            appt: ''
        };
    };
    localStorage.setItem("calendarEntries", JSON.stringify(calendarEntries));
};
console.log(calendarEntries);

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
        
        appointment = $('<input>');
        appointment.addClass(`text-dark col-8 ${i}00`);
        let eachEntry = calendarEntries[i-6].appt;
        appointment.attr('value', `${eachEntry}`);
        // appointment.attr('type', 'text');
        timeBlock.append(appointment);

        button = $('<button><i>Save</i></button>');
        button.addClass(`saveBtn col-2 ${i}00`);
        // button.attr('type', 'submit');
        timeBlock.append(button);

        button.attr('id', `hour${i}`);
        // appointment.attr('name', `${i}00`);

        // Display am or pm
        if (i < 13) {
            hour.text(`${i}:00am`);
        } else if (i >= 13) {
            hour.text(`${i-12}:00pm`);        
        };

        // Add color coding based on current time of day
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
    let targetId = $(this).attr('id');
    console.log(`${targetValue} is registered`);
    console.log(`${targetId} is the Id`);
    let entry;
    let calendarIndex = calendarEntries.findIndex(
        (entry) => entry.name === `${targetId}`
    );
    console.log(`${calendarIndex} is the index`);
    calendarEntries = JSON.parse(localStorage.getItem("calendarEntries"));
    calendarEntries[calendarIndex] = {name: `${targetId}`, appt: `${targetValue}`};
    console.log(calendarEntries);
    localStorage.setItem("calendarEntries", JSON.stringify(calendarEntries));
});


