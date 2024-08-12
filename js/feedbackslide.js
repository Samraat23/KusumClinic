const sliders = document.querySelectorAll(".textimonial_box");
const totalSlides = sliders.length; // Fixed typo here
var counter = 0;

// Set the initial position of each slider
sliders.forEach((textimonial_box, index) => {
    textimonial_box.style.left = `${index * 400}px`; // Assuming each slide is 200px wide
});

const slideimage = () => {
    sliders.forEach((textimonial_box) => {
        textimonial_box.style.transform = `translateX(-${counter * 400}px)`; // Adjust based on slide width
    });
}

const goprev = () =>{
    if (counter > 0) {
        counter--;
        slideimage();
    }
}  

const gonext = () =>{
    if (counter < totalSlides - 3) {
        counter++;
        slideimage()
    }

}


//mobile version hemburgur

const hamburger = document.querySelector('#Hummenu');
const menucancel = document.querySelector("#cancel");

hamburger.addEventListener('click', function() {
    var navbar = document.querySelector(".navbar");
    var cancel = document.querySelector("#cancel");
    navbar.style.transform = `translateX(0%)`;
    navbar.style.opacity = 1;
    navbar.style.visibility = "visible";
    cancel.style.display = 'block';
    this.style.display = 'none'; // Hide the hamburger menu
});

menucancel.addEventListener('click', function() {
    var navbar = document.querySelector(".navbar");
    var hum = document.querySelector('#Hummenu');
    navbar.style.transform = `translateX(-100%)`; // Hide the navbar by moving it off-screen
    navbar.style.opacity = 0;
    navbar.style.visibility = "hidden";
    this.style.display = 'none'; // Hide the cancel button
    hum.style.display = "block"; // Show the hamburger menu again
});



