var date1 = new Date("08/10/2021");
var date2 = new Date("09/11/2021");

var Difference_In_Time = date2.getTime() - date1.getTime();

var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

console.log(date1 + date2 + Difference_In_Days);