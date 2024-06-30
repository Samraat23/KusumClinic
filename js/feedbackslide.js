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