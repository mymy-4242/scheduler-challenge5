//current day
var displayDate = function() {
    $('#currentDay')
        .append(
            moment().format('dddd, MMMM Do')
            );
};

displayDate();
