//JS taken from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal_bottom

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var prj_card = document.getElementsByClassName("project-card")[0];
// console.log(prj_card);

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
prj_card.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}