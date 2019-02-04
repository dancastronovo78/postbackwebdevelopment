// Get the modal
var modal = document.getElementById('myModal');
var modal1a = document.getElementById('myModal1a');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn1a = document.getElementById("myBtn1a");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span1a = document.getElementsByClassName("close1a")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

btn1a.onclick = function() {
    modal1a.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

span1a.onclick = function() {
    modal1a.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it

window.onclick = function(event) {
    if (event.target == modal || event.target == modal1a) {
        modal.style.display = "none";
        modal1a.style.display = "none";
    }
}

