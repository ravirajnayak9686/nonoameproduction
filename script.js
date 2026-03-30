// Smooth scrolling navigation
document.querySelectorAll("nav a").forEach(anchor => {

anchor.addEventListener("click", function(e) {

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior:"smooth"
});

});

});


// Lightbox

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

function openImage(img){

lightbox.style.display="flex";
lightboxImg.src = img.src;

}

function closeImage(){

lightbox.style.display="none";

}