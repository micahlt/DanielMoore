let shown = false;
function showVideo() {
  if (shown == false) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modalContent").style.display = "block";
  shown = true;
} else {
  document.getElementById("modal").style.display = "none";
  document.getElementById("modalContent").style.display = "none";
  shown = false;
}
}

document.getElementById("modal").addEventListener("click", function(){
  showVideo();
})
