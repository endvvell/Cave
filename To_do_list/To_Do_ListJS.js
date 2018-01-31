//create element with "X" button//
var nodeList = document.getElementsByTagName("LI");
for (i = 0; i < nodeList.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  nodeList[i].appendChild(span);
}
//close function//
var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}
//adds a "checked" thingy//
var list = document.querySelector("ul");
list.addEventListener("click", function(ev) {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
    }
});
//Add a "thing" to the list//
function newList() {
    var li = document.createElement("LI");
    var inputValue = document.getElementById("thinginput").value;
    var textY = document.createTextNode(inputValue);
    var nothingtxt = document.createTextNode("Nothing... Fly you little bird!")
    li.appendChild(textY);
    //
    if (inputValue == "") {
        li.appendChild(nothingtxt);
        document.getElementById("thelist").appendChild(li);
    }else{
        document.getElementById("thelist").appendChild(li);
    };
    
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}