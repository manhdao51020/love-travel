
const currentPos = 0;
const min = 0;
const max = -303;
const width = 101
const nextbtn = document.querySelector(".slider-btn");

nextbtn.addEventListener("click", function() {
    goNext();
}, false);
function goNext() {
    if (currentPos > max) {
      currentPos = currentPos - width;
      var pos = currentPos + "%";
      updateViewer(pos)
    }
}
function updateViewer(view) {
    var css = "translateX(" + view + ")";
    var items = document.querySelector('.best-place-img');
    
    for(var i = 0; i < items.length; i++) {
      items[i].style.transform = css;
    }
}