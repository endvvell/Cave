//Hide & Show Functions//
var main1 = document.getElementById("ulhide1");

function changeMDivI() {
    if (main1.style.visibility !== 'visible') {
            main1.style.visibility = 'visible';
            main1.style.opacity = 1;
        }else{
            main1.style.visibility = 'hidden';
            main1.style.opacity = 0;
        }
    if (main2.style.visibility !== 'hidden' || main3.style.visibility !== 'hidden') {
            main2.style.visibility = 'hidden';
            main2.style.opacity = 0;
            main3.style.visibility = 'hidden';
            main3.style.opacity = 0;
        }
}

var main2 = document.getElementById("ulhide2");
    
function changeMDivS() {
    if (main2.style.visibility !== 'visible') {
            main2.style.visibility = 'visible';
            main2.style.opacity = 1;
        }else{
            main2.style.visibility = 'hidden';
            main2.style.opacity = 0;
        }
    if (main1.style.visibility !== 'hidden' || main3.style.visibility !== 'hidden') {
            main1.style.visibility = 'hidden';
            main1.style.opacity = 0;
            main3.style.visibility = 'hidden';
            main3.style.opacity = 0;
        }
}

var main3 = document.getElementById("ulhide3");
    
function changeMDivO() {    
    if (main3.style.visibility !== 'visible') {
            main3.style.visibility = 'visible';
            main3.style.opacity = 1;
        }else{
            main3.style.visibility = 'hidden';
            main3.style.opacity = 0;
        }
    if (main1.style.visibility !== 'hidden' || main3.style.visibility !== 'hidden') {
            main1.style.visibility = 'hidden';
            main1.style.opacity = 0;
            main2.style.visibility = 'hidden';
            main2.style.opacity = 0;
        }
}

//Time//
function showTime() {
    var t = new Date();
    document.getElementById("time").innerHTML = ("0" + t.getHours()).slice(-2) + ":" +  ("0" + (t.getMinutes())).slice(-2);
}
showTime();
setInterval(showTime, 1000);

//Do Nothing If Nothing Typed In The Search Box//
function noValueFunc(){
    if (document.getElementById("tsb").value.length >= 1){
        return true;
        document.getElementById("tsb").value = "";
    } else {
        return false;
    }
}
