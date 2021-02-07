
var i = 0;
var txt = 'Make @ Lane';
var speed = 100;
var fields = {};
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

$(document).ready(function(){
 fields.name = document.getElementById('name');
 fields.email = document.getElementById('email');
 fields.message = document.getElementById('message');
})