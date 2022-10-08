const header = document.querySelector('header');
const slideshowImg = document.querySelectorAll('.banner');
let revealOne = document.querySelector(".reveal-1");
let revealTwo = document.querySelector(".reveal-2");
let products = document.querySelectorAll(".product");
let details = document.querySelectorAll(".details");
let searchBar = document.querySelector(".search-bar");
let openSearch = document.querySelector(".open-search");
let closeSearch = document.querySelector(".close-search");
let hamburgerMenu = document.querySelector(".fa-bars");
let navbar = document.querySelector(".navbar");



currentImageCounter = 0;

slideshowImg[currentImageCounter].style.opacity = 1;

setInterval(nextImage, 5000);
setTimeout(()=> {
    slideshowImg[currentImageCounter].classList.remove('under-image');
},5000);

function nextImage(){
    const counter = currentImageCounter;
    slideshowImg[counter].style.opacity = 0;
    slideshowImg[counter].classList.add('under-image');
  
    setTimeout(()=> {
        slideshowImg[counter].classList.remove('under-image');
    },5000);
    currentImageCounter = (currentImageCounter + 1) % slideshowImg.length;
   
    slideshowImg[currentImageCounter].style.opacity = 1;   
}

window.addEventListener("scroll", () =>{ 
    if(this.window.pageYOffset >= 1){
        header.style.background = "white";
        header.classList.add("active");
    }else{
        header.style.background = "";
        header.classList.remove("active");
    }

    if(this.window.pageYOffset >= 60){
        revealOne.classList.add("active");
    }else{
        revealOne.classList.remove("active");
    }

    if(this.window.pageYOffset >= 1700){
        revealTwo.classList.add("active");
    }else{
        revealTwo.classList.remove("active");
    }
});


  

openSearch.addEventListener("click", () =>{
    searchBar.style.display = "block"
});

closeSearch.addEventListener("click", () =>{
    searchBar.style.display = "none"
});

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    if(hamburgerMenu.classList.contains("active")){
        hamburgerMenu.classList.remove("fa-bars");
        hamburgerMenu.classList.add("fa-x");
        navbar.style.display = "flex";
    }else{
        hamburgerMenu.classList.remove("fa-x");
        hamburgerMenu.classList.add("fa-bars");
        navbar.style.display = "none";
    }
})
