var d = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function getTheDate(){
    document.getElementById("date").innerHTML = "The " + ("0" + d.getDate()).slice(-2) + " of " + months[d.getMonth()]+ " " + d.getFullYear();
}
getTheDate();
setInterval (getTheDate, 1000);
//////////////////////////////////////////////
function getTheDay(){
    document.getElementById("day").innerHTML = days[d.getDay()];
}
getTheDay();
setInterval(getTheDay, 1000);
//////////////////////////////////////////////
function getTheTime() {
    var d = new Date();
    document.getElementById("time").innerHTML = ("0" + d.getHours()).slice(-2) + ":" +  ("0" + (d.getMinutes())).slice(-2) + ":" + ("0" + (d.getSeconds())).slice(-2);
}
getTheTime();
setInterval(getTheTime, 1000);
//////////////////////////////////////////////
function noValueFunc(){
    if (document.getElementById("tsb").value.length >= 1){
        return true;
        document.getElementById("tsb").value = "";
    } else {
        return false;
    }
}