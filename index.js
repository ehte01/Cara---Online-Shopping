const bar = document.querySelector('#bar');
const nav = document.querySelector('.navbar');
const mob = document.querySelector('.mobile');
const clse = document.querySelector('#close');

//check if navbar is already open or not bcoz by click hamburger icon we need to open and close the navbar

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
        mob.style.display = 'none';
        clse.style.display = 'inline-block';
    })
}

if(clse){
    clse.addEventListener('click',()=>{
        nav.classList.remove('active');
        mob.style.display = 'inline-block';
    })
}


//single product section

let mainImg = document.querySelector("#mainImg");
let firstPic = document.querySelector("#fpic");
let smallImg = document.querySelectorAll(".small-img");
let smallImgGrp = document.querySelector(".small-img-group");
let singlePrice = document.querySelector("#spdtPrice");

let price;
let imgSrc;
let pdtTitle;
function setPrice(price){
    localStorage.setItem("price",price);
}
function setImage(image){
    localStorage.setItem("image",image);
}
function setPdtTitle(title){
    localStorage.setItem("title",title);
}
let homeProducts = document.querySelector(".product1-container");

homeProducts.addEventListener('click',(e)=>{
    console.log(e.target);
    if(e.target.parentElement.classList.contains("des")){
        price = e.target.parentElement;
        pdtTitle = e.target.parentElement;
        price = price.children[3].innerText
        pdtTitle = pdtTitle.children[1].innerText;
        imgSrc = e.target.parentElement.parentElement;
        imgSrc = imgSrc.children[0].src;   
        e.target.parentElement.parentElement.setAttribute("onclick","changeWindow()");
    }
    else if(e.target.parentElement.classList.contains("pro1")){
        price = e.target.parentElement;
        pdtTitle = e.target.parentElement;
        price = price.children[1].children[3].innerText;
        pdtTitle = pdtTitle.children[1].children[1].innerText;
        imgSrc = e.target.parentElement;
        imgSrc = imgSrc.children[0].src;
        e.target.parentElement.setAttribute("onclick","changeWindow()");
    }
    else if(e.target.contains("pro1")){
        price = e.target.children[1].children[3].innerText;
        pdtTitle = e.target.children[1].children[1].innerText;
        imgSrc = imgSrc.children[0].src;
        e.target.setAttribute("onclick","changeWindow()");
    }
    
    setImage(imgSrc);
    setPrice(price);
    setPdtTitle(pdtTitle);
    changeWindow();
});

function changeWindow(){
    window.location.href = "sproduct.html";
}
let getprice = localStorage.getItem("price");
let getImage = localStorage.getItem("image");
let getPdtTitle = localStorage.getItem("title");
mainImg.src = getImage;
firstPic.src = getImage;
singlePrice.innerText = getprice;

let singlepdtTitle = document.querySelector('#pdt-title');
singlepdtTitle.innerText = getPdtTitle;

smallImgGrp.addEventListener('click',(e)=>{

    if(e.target.classList.contains('small-img')){
        mainImg.src = e.target.src;
    }
});




// now handling add to cart fron single product page





// handling single page input item increment/decrement

// let inpNum = document.querySelector("#inpNum");

// inpNum.addEventListener('change',(e)=>{
//     inpNum.value = e.target.value;
// });

let singlePdt = document.querySelector(".single-pro-details");
let pdtRow = document.querySelector(".pdt-row");
let singleTitle;
let singlePriceItem;
let singlePdtSize;
let singlePdtImg;
let singlePdtQty;

// store size and quantity in local storage
function setSize(size){
    localStorage.setItem("size",size);
}
function setQty(qty){
    localStorage.setItem("qty",qty);
}
singlePdt.addEventListener('click',(e)=>{
    if(e.target.classList.contains("normal")){
        singleTitle = getPdtTitle;
        singlePriceItem = getprice;
        singlePdtSize = e.target.parentElement.children[3].value;
        singlePdtImg = getImage;
        singlePdtQty = e.target.parentElement.children[4].value;
        setSize(singlePdtSize);
        setQty(singlePdtQty);
        let getSize = localStorage.getItem("size");
        let getQty = localStorage.getItem("qty");

        console.log(e.target);
    }
});






