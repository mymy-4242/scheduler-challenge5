$(document).ready(function() {

    //current day function to show day at top of the page
    var displayDate = function() {
        //append date to currentDay <p> element using moment
        $('#currentDay')
            .append(
                moment().format('dddd, MMMM Do, YYYY')
                );
    };

    //load descriptions from local storage
    var descriptions = JSON.parse(localStorage.getItem("descriptions"));
    //if nothing in local storage, create new object to track new plans
    if (!descriptions) {
        descriptions = [];
    } 
    

    //build daily schedule
        for (var hour=9; hour <=17; hour++) {
            //index for array
            var index = hour - 9;

            //build rows
            let $divRows = $('<div>')
                .addClass('row')
                .attr('hour-index', index);

            //build time columns
            let $divTimeCol = $('<div>')
                .addClass('col-2')
                .addClass('hour')

            //show hour blocks in time columns  
            const $timeBlockSpan = $('<span>');

                //time block hours
                var displayHour = 0;
                if (hour > 12) {
                    displayHour = ((hour-12) + "PM");
                } else if (hour <12) {
                    displayHour = (hour + "AM");
                } else {
                    displayHour = (hour + 'PM');
                } 

            $timeBlockSpan.text(`${displayHour}`);
           
            //append time column to rows
            $divRows.append($divTimeCol);
            //append time block to time column
            $divTimeCol.append($timeBlockSpan);
            
            
            //build description columns
            let $divDescriptionCol = $('<div>')
                .addClass('col-8')
                .addClass('description');

            //build input for descriptions
            var descriptionInput = $('<input>')
                .attr('type', 'text')
                .attr('hour-index', index)
                .attr('id', `inputId-${index}`)
                .val(descriptions[index]);

            // change row color 
            if (moment().isAfter(hour)) {
                $(descriptionInput).addClass("past");
            } else if (moment() = hour) {
                $(descriptionInput).addClass("present");
            } else if (Math.abs(moment().diff(hour)) >= 1) {
                $(descriptionInput).addClass("future");
            }

            //append description column to rows
            $divRows.append($divDescriptionCol);
            //append description input to description column
            $divDescriptionCol.append(descriptionInput);
            

            //build save columns
            let $divSaveCol = $('<div>')
                .addClass('col-2')
                .addClass('saveBtn');

            //save button
            var saveBtn = $('<button>')
                .attr('type', 'submit')
                .attr('hour-index', index)
                .attr('id', `saveId-${index}`)
                .attr('class', "fas fa-save");
             
            //append save column to rows
            $divRows.append($divSaveCol);
            //append save button to save column
            $divSaveCol.append(saveBtn);

  
            //save task
            $(`saveId-${index}`).on('click', function(event) {
                //prevent default
                event.preventDefault();

                localStorage.setItem("descriptions", JSON.stringify(descriptions));
    
            });
            
            //append rows to container
            $('#schedule').append($divRows);
        }
      

    //current day function
    displayDate();
});


