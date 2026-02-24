// Get the modal
window.onload = function(){
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


console.log(document.getElementById('blumenhänger'))

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

// Get all images and insert the clicked image inside the modal
var images = document.getElementsByTagName('img');
var modalImg = document.getElementById("img01");
var i;
for (i = 0; i < images.length; i++) {
  images[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  }
}
}