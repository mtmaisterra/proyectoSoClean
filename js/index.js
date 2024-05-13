let carrouselimg = document.querySelectorAll("body main .carrousel img");
let carrouselright = document.querySelector("body main .carrousel .flecha-derecha");
let carrouselleft = document.querySelector("body main .carrousel .flecha-izquierda");
let i = 1;

// let ultimaPosicion = imagenesCarrousel.length;

// function ordernaImagen(img){
//     if(img1.style.right == "100%"){
//         img1.classList.replace("next", "prev");
//     }
//     if(img1.style.right == "0%"){
//         img1.classList.replace("prev", "center");
//     }
//     if(img1.style.right == "-100%"){
//         img1.classList.replace("center", "next");
//     }
// }

// flechaDerecha.addEventListener("click", ()=>{
//     // console.log(imagenesCarrousel[0].classList.replace("prev","center"));
//     // imagenesCarrousel[0].style.opacity = 0.5;
//     imagenesCarrousel[0].style.right = "0%";
//     imagenesCarrousel[1].style.right = "-100%";
//     // imagenesCarrousel[2].style.display = "none";
//     // imagenesCarrousel[2].style.right = "100%";
//     // setTimeout(3000);
//     // imagenesCarrousel[2].style.display = "inline";

//     // imagenesCarrousel[2].style.right = "100%";



//     indexCarrousel +=indexCarrousel;

// });




carrouselright.addEventListener("click", function () {
    
    //i = 5
    if(i+2 >= carrouselimg.length){
        carrouselimg[i - (carrouselimg.length-2)].classList.replace("back", "next");
        if(i+1 == carrouselimg.length){
            //i = 6
            carrouselimg[i - (carrouselimg.length-1)].classList.replace("next", "center");
            carrouselimg[i].classList.replace("center", "prev");
            carrouselimg[i-1].classList.replace("prev", "back");
            i += 1;
        }else if(i == carrouselimg.length){
            //i = 7
            carrouselimg[i - carrouselimg.length].classList.replace("center", "prev");
            carrouselimg[i - (carrouselimg.length-1)].classList.replace("next", "center");
            carrouselimg[i-1].classList.replace("prev", "back");
            i= -1 + 2;
        }else{
            //i = 5
            carrouselimg[i-1].classList.replace("prev", "back");
            carrouselimg[i].classList.replace("center", "prev");
            carrouselimg[i+1].classList.replace("next", "center");
            i += 1;
        }
    }else{
        if(i == -1){
            carrouselimg[i+carrouselimg.length].classList.replace("center","prev");
            carrouselimg[i+(carrouselimg.length-1)].classList.replace("prev","back");
            carrouselimg[i+1].classList.replace("next","center");
            carrouselimg[i+2].classList.replace("back","next");
            i+=1;
        }else if(i == (-1 + 1)){
            carrouselimg[i+(carrouselimg.length-1)].classList.replace("prev", "back");
            carrouselimg[i].classList.replace("center", "prev");
            carrouselimg[i+1].classList.replace("next", "center");
            carrouselimg[i+2].classList.replace("back", "next");
            i += 1;
        }else{
        carrouselimg[i-1].classList.replace("prev", "back");
        carrouselimg[i].classList.replace("center", "prev");
        carrouselimg[i+1].classList.replace("next", "center");
        carrouselimg[i+2].classList.replace("back", "next");
        i+=1;
        }
    }
});






carrouselleft.addEventListener("click", function () {
//i = 1
    if(i-2 <= -1){
        carrouselimg[i + (carrouselimg.length-2)].classList.replace("back", "prev");
        if(i-1 == -1){
            //i = 0
            carrouselimg[i + (carrouselimg.length-1)].classList.replace("prev", "center");
            carrouselimg[i].classList.replace("center", "next");
            carrouselimg[i+1].classList.replace("next", "back");
            i -= 1;
        }else if(i == -1){
            //i = -1
            carrouselimg[i + carrouselimg.length].classList.replace("center", "next");
            carrouselimg[i + (carrouselimg.length-1)].classList.replace("prev", "center");
            carrouselimg[i+1].classList.replace("next", "back");
            i=carrouselimg.length-2;
        }else{
            //i = 1
            carrouselimg[i-1].classList.replace("prev", "center");
            carrouselimg[i].classList.replace("center", "next");
            carrouselimg[i+1].classList.replace("next", "back");
            i -= 1;
        }
    }else{
        if(i == carrouselimg.length){
            carrouselimg[i-carrouselimg.length].classList.replace("center","next");
            carrouselimg[i-(carrouselimg.length-1)].classList.replace("next","back");
            carrouselimg[i-1].classList.replace("prev","center");
            carrouselimg[i-2].classList.replace("back","prev");
            i-=1;
        }else if(i == (carrouselimg.length-1)){
            carrouselimg[i-(carrouselimg.length-1)].classList.replace("next", "back");
            carrouselimg[i].classList.replace("center", "next");
            carrouselimg[i-1].classList.replace("prev", "center");
            carrouselimg[i-2].classList.replace("back", "prev");
            i -= 1;
        }else{
            carrouselimg[i-2].classList.replace("back", "prev");
            carrouselimg[i-1].classList.replace("prev", "center");
            carrouselimg[i].classList.replace("center", "next");
            carrouselimg[i+1].classList.replace("next", "back");
            i-=1;
        }
    }
}
);