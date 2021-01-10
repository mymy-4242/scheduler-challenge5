$(document).ready(function() {

    //current day function to show day at top of the page
    var displayDate = function() {
        //append date to currentDay <p> element using moment
        $('#currentDay')
            .append(
                moment().format('dddd, MMMM Do, YYYY')
                );
    };



    //build daily schedule
        for (var hour=9; hour <=17; hour++) {
            //build rows
            let $divRows = $('<div>')
                .addClass('row');

            //build time columns
            let $divTimeCol = $('<div>')
                .addClass('col-2')
                .addClass('hour');

            //show hour blocks in time columns  
            const $timeBlockSpan = $('<span>');

                //time block hours
                var displayHour = 0;
                if (hour < 12) {
                    displayHour = (hour + "AM");
                } else {
                    displayHour = ((hour-12) + "PM");
                }

            $timeBlockSpan.text(`${displayHour}`);
           
            //append time column to rows
            $divRows.append($divTimeCol);
            //append time block to time column
            $divTimeCol.append($timeBlockSpan);

            //build description columns
            let $divDescriptionCol = $('<div>')
                .addClass('col-8');


            //append description column to rows
            $divRows.append($divDescriptionCol);    
            //append rows to container
            $('#schedule').append($divRows);
        }


    //current day function
    displayDate();
});



