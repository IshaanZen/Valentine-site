let pickup_line = document.getElementById("pickup-line")
let pickup_container = document.getElementById("pickup-container")

let questions_container = document.getElementById("question-cont")
let propose_container = document.getElementById("propose-cont") 


function pickup(){
    pickup_line.style.transform = "translate(0px,-50px)"
    pickup_line.style.opacity = "0"; 
    
}

function question(){
    questions_container.style.opacity="1";
    questions_container.style.transform = "translate(0 , -100px)"
    
}

function propose(){
    window.alert("ITS VALENTINESSS WEEKKK")
    propose_container.style.display = "block"
    pickup_container.style.display = "none"
}

setTimeout(() => {
    pickup()
    console.log("runned")
    question()
    }, 4000);


const buttonHeight = 50;
const buttonWidth = 150;
    
const MaxWidth = window.innerWidth - buttonWidth;
const MaxHeight = window.innerHeight - buttonHeight;
    
const noButton = document.getElementById("no_button")

window.addEventListener("DOMContentLoaded" , ()=>{


    noButton.addEventListener("click" , ()=>{
        alert("button clicked")
    })

    noButton.addEventListener("mouseover" , ()=>{
        noButton.style.left = Math.floor(Math.random() * (MaxWidth + 1 )) + "px" ;
        noButton.style.top = Math.floor(Math.random() * (MaxHeight + 1 )) + "px" ;
    })

})
 
let h1 = document.querySelector("#h1_id")
let yes_btn = document.querySelector(".yes")


yes_btn.addEventListener("click" , ()=>{
    h1.innerHTML = "I lOVE YOU TOO 💓❣️ "
    h1.style.fontS
    noButton.style.display = "none"

})

    