

const monthList = ["January","February","March","April","May","June","July","August","September","October","November","December"]
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
export  function formatDateNumber(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}


export function formatDateText(date){
    var d = new Date(date),
    month = '' + (monthList[d.getMonth()]),
    day = '' + weekday[d.getUTCDay()],
    year = d.getFullYear();
    return  day + ', ' + month + ' ' + d.getDate() +', ' + year
}