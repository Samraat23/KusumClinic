const slides = document.querySelectorAll('.imagep');
const scrolling = document.querySelectorAll(".image")
const totalscrollingimage = scrolling.length;
const totalSlides = slides.length
var counter = 0;

slides.forEach((imagep , index) =>{
           imagep.style.left = `${index * 400}px`
})

const slideimage = () =>{ 
    slides.forEach(
        (imagep) =>{
              imagep.style.transform = `translateX(-${counter * 450}px)`     
    })
}

const gopre = () =>{
    if (counter > 0) {
        counter--
        slideimage();
    }
}  

const gonext = () =>{
    if( counter < totalSlides - 3 ){
        counter++
        slideimage();

}
}

scrolling.forEach((image , index)=>{
       image.style.left = `${index * 400}px`
})

const certificatescrolling = () =>{
     scrolling.forEach((image) =>{
          image.style.transform = `translateX(-${counter * 400}px)`
     })
}

const Cgopre = () =>{
    if(counter > 0){
      counter--
      certificatescrolling()
    }
}

const Cgonext = () =>{
    if( counter < totalscrollingimage -3 ){
       counter++
       certificatescrolling();
    }
}

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


