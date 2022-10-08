const header = document.querySelector('header');
let searchBar = document.querySelector(".search-bar");
let openSearch = document.querySelector(".open-search");
let closeSearch = document.querySelector(".close-search");
let productSizes = document.querySelectorAll(".product-size");
let allSizes = document.querySelectorAll(".sizes");
let signInForm = document.querySelector(".sign-in");
let signUpForm = document.querySelector(".sign-up");
let underBar = document.querySelector(".under-bar");
let increaseProductAmt = document.querySelectorAll(".increase");
let decreaseProductAmt = document.querySelectorAll(".decrease");
const products = document.querySelector(".products");
const product = Array.from(document.querySelectorAll(".product"));
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
arrayList = [];
let page = 0;

window.addEventListener("scroll", () =>{ 
    if(this.window.pageYOffset >= 1){
        header.style.background = "white";
        header.classList.add("active");
    }else{
        header.style.background = "";
        header.classList.remove("active");
    }
});

openSearch.addEventListener("click", () =>{
    searchBar.style.display = "block";
});

closeSearch.addEventListener("click", () =>{
    searchBar.style.display = "none";
});



productSizes.forEach(productSize => {
    productSize.addEventListener("click",(e) => {
        let sizesClicked = e.target;
        let sizes = sizesClicked.parentElement.children[6];
        sizes.style.display = "block";
        let size = Array.from(sizes.children);
        size.forEach(targetSize => {
            targetSize.addEventListener("click", (e) =>{
                let sizeSelected=  e.target.innerHTML;
                productSize.innerHTML= sizeSelected;
                sizes.style.display = "none";
             })
        })
    })
   
})

function signIn(){
    signInForm.style.transform = "translateX(0)"
    signUpForm.style.transform = "translateX(-600px)"
    underBar.classList.remove("active");
}

function signUp(){
    signInForm.style.transform = "translateX(600px)"
    signUpForm.style.transform = "translateX(0)"
    underBar.classList.add("active");
}

increaseProductAmt.forEach(increaseProduct => {
    increaseProduct.addEventListener("click", (e) => {
        let buttonClicked = e.target;
        let input = buttonClicked.parentElement.children[4];
        var inputValue = input.value;
        var newValue = parseInt(inputValue) + 1;
        if(newValue <= 19){
            input.value = newValue;
        }
   })
})


decreaseProductAmt.forEach(decreaseProduct => {
    decreaseProduct.addEventListener("click", (e) => {
        let buttonClicked = e.target;
        let input = buttonClicked.parentElement.children[4];
        var inputValue = input.value;
        var newValue = parseInt(inputValue) - 1;
        if(newValue >= 1){
            input.value = newValue;
        }
   })
})


for(let i = 0; i < product.length; i++){
    arrayList.push(product[i]);
}

for(let i = 0; i < page + 6; i++){
    products.appendChild(arrayList[i]);
}

next.addEventListener("click", () => {
    page == arrayList.length - 6 ? (page = 0) : (page += 6);
    products.innerHTML = "";
    for(let i = page; i < page + 6; i++){
        products.appendChild(arrayList[i]);
    }
});

prev.addEventListener("click", () => {
    page ==  0 ? page = arrayList.length - 6 : (page -= 6);
    products.innerHTML = "";
    for(let i = page; i < page + 6; i++){
        products.appendChild(arrayList[i]);
    }
});