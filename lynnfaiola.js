/*accordion functionality*/
var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  };
}

//Card Flip Click
/*$(document).on("click", ".flip-card", function () {
  $(this).toggleClass('hover');
});*/

var flip = document.getElementsByClassName("flip-card");
function flipCard(){
  flip.classList.toggle("flip-card");

  flip.addEventListener("click", flipCard);

}



