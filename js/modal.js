// Get the modal
var modal = document.getElementById('myModal');
var modal1a = document.getElementById('myModal1a');
var modal2 = document.getElementById('myModal2');
var modal2a = document.getElementById('myModal2a');
var modal3 = document.getElementById('myModal3');
var modal3a = document.getElementById('myModal3a');
var modal4 = document.getElementById('myModal4');
var modal4a = document.getElementById('myModal4a');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn1a = document.getElementById("myBtn1a");
var btn2 = document.getElementById("myBtn2");
var btn2a = document.getElementById("myBtn2a");
var btn3 = document.getElementById("myBtn3");
var btn3a = document.getElementById("myBtn3a");
var btn4 = document.getElementById("myBtn4");
var btn4a = document.getElementById("myBtn4a");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span1a = document.getElementsByClassName("close1a")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span2a = document.getElementsByClassName("close2a")[0];
var span3 = document.getElementsByClassName("close3")[0];
var span3a = document.getElementsByClassName("close3a")[0];
var span4 = document.getElementsByClassName("close4")[0];
var span4a = document.getElementsByClassName("close4a")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

btn2.onclick = function() {
    modal2.style.display = "block";
}

btn3.onclick = function() {
    modal3.style.display = "block";
}

btn4.onclick = function() {
    modal4.style.display = "block";
}

btn1a.onclick = function() {
    modal1a.style.display = "block";
}

btn2a.onclick = function() {
    modal2a.style.display = "block";
}

btn3a.onclick = function() {
    modal3a.style.display = "block";
}

btn4a.onclick = function() {
    modal4a.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    $('video').trigger('pause');
}

span2.onclick = function() {
    modal2.style.display = "none";
    $('video').trigger('pause');
}

span3.onclick = function() {
    modal3.style.display = "none";
    $('video').trigger('pause');
}

span4.onclick = function() {
    modal4.style.display = "none";
    $('video').trigger('pause');
}

span1a.onclick = function() {
    modal1a.style.display = "none";
    $('video').trigger('pause');
}

span2a.onclick = function() {
    modal2a.style.display = "none";
    $('video').trigger('pause');
}

span3a.onclick = function() {
    modal3a.style.display = "none";
    $('video').trigger('pause');
}

span4a.onclick = function() {
    modal4a.style.display = "none";
    $('video').trigger('pause');
}



// When the user clicks anywhere outside of the modal, close it
/*
window.onclick = function(event) {
    if (event.target == modal || event.target == modal1a || event.target == modal2 || event.target == modal2a || event.target == modal3 || event.target == modal3a || event.target == modal4a) {
        modal.style.display = "none";
        modal1a.style.display = "none";
        modal2.style.display="none";
        modal2a.style.display = "none";
        modal3.style.display="none";
        modal3a.style.display = "none";
        modal4.style.display="none";
        modal4a.style.display = "none";
    }
}*/

window.onclick = function(event) {
    if (event.target == modal || event.target == modal2 || event.target == modal3 || event.target == modal4 || event.target == modal1a || event.target == modal2a || event.target == modal3a || event.target == modal4a) {
        modal.style.display = "none";
        modal2.style.display = "none";
        modal3.style.display = "none";
        modal4.style.display = "none";
        modal1a.style.display = "none";
        modal2a.style.display = "none";
        modal3a.style.display = "none";
        modal4a.style.display = "none";
        $('video').trigger('pause');
    }
}

