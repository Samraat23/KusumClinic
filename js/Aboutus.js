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

