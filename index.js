const imageContainerEl = document.querySelector('.container');

const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");


let x = 0;
let timer;

prevEl.addEventListener("click", () =>{
    x= x+45
    clearTimeout(timer)
    upadategall()
})

nextEl.addEventListener("click", () =>{
    x= x-45
    clearTimeout(timer)
    upadategall()
});

function upadategall(){
     imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;

     timer=setTimeout(() =>{
        x = x -45
        upadategall()
     }, 3000);
}

