
module.exports = getDate;

function getDate()
{


    var today = new Date();
    var currentDay = today.getDay();
    var day="";
   
    var options={
        weekday : "long",
        day : "numeric",
        month : "long"

    };

    day = today.toLocaleDateString("en-US", options); 

    return day;
}    