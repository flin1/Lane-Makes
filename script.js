
var i = 0;
var txt = 'Make @ Lane';
var speed = 100;

$(document).ready(function(){
 typeWriter();
});
 function typeWriter() {
 if (i < txt.length) {
    document.getElementById("subhead").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    }
  }