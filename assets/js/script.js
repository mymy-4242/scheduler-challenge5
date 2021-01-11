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
        descriptions = {
            planText: []
        };
    }
    

    //build daily schedule
        for (var hour=9; hour <=17; hour++) {
            //index for array
            var index = hour - 9;

            //build rows
            let $divRows = $('<div>')
                .addClass('row')
                .attr('hour-index', index);

                console.log(hour-index);

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
                .val(planText[index]);

            //append description column to rows
            $divRows.append($divDescriptionCol);
            //append description input to description column
            $divDescriptionCol.append(descriptionInput);
            

            //build save columns
            let $divSaveCol = $('<div>')
                .addClass('col-2')

            //save button
            var $saveTask = $('<button>')
                .addClass('saveBtn')
                .attr('hour-index', index)
                .attr('id', `saveId-${index}`)
                .attr('class', "fas fa-save");
             
            //append save column to rows
            $divRows.append($divSaveCol);
            //append save button to save column
            $divSaveCol.append($saveTask);
            
            //append rows to container
            $('#schedule').append($divRows);
        }
        
        //row color function
        /*var changeRowColor = function($displayHour, hour) {
            var now = moment();
            if (hour < now) {
                $
            }
        }*/


        /*
        //save function
        var saveDescription = function() {
            event.preventDefault();
            localStorage.setItem("description", JSON.stringify(description));
        };
        
        */

    //current day function
    displayDate();
});

//in a cloumn, create a form with 2 columns, one for description and one for the save button
//make p elements in every description column
//give p elements for each row a specific id
//on click, allow p elements to be edited
//on save click, allow p elements to be saved

           /* //append description column to rows
            $divRows.append($divDescriptionCol);

            var descriptionInput = $('<input>')
                .addClass("plan-item");

            var descriptionP = $('<p>')
                .text(descriptionText);

            //append p element to input
            descriptionInput.append(descriptionP);
            
            //append input to description columns*/



