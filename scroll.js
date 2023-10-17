// Get the button
let mybutton = document.getElementById("myBtn");
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function bottomFunction() {
    window.scroll(0, document.body.scrollHeight || document.documentElement.scrollHeight);
  }
document.addEventListener("DOMContentLoaded", function() {
    let mybutton = document.getElementById("myBtn2");
    mybutton.addEventListener("click", bottomFunction);
  

  });
  
