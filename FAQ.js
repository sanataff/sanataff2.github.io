const body = document.querySelector("body")

const queestions = ["What is Frontend Mentor, and how will it help me?","Can I use Frontend Mentor projects in my portfolio?","How can I get help if I'm stuck on a Frontend Mentor chcalllenge?","What is Frontend Mentor, and how will it help me?"]

const answers = ["Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.","Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.","Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellentway to showcase your skills to potential employers!","Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills wit"]
const accordion = document.querySelector(".accordion")
const accordionItem = document.querySelectorAll(".accordion-item")
const accordionHeader = document.querySelectorAll(".accordion-header")
const accordionContent = document.querySelectorAll(".accordion-body")


body.appendChild(accordion)

const questionDiv = document.getElementsByClassName("accordion-header")
const bodyDiv = document.getElementsByClassName("accordion-body")

for (let i=0 ; i<questionDiv.length;i++){
    const plusButton = document.createElement("button")

   plusButton.innerHTML = '<img src="assets/images/icon-plus.svg" />'
   plusButton.style.background = "none"
   plusButton.style.border = "none"
   plusButton.style.cursor = "pointer"
   plusButton.className = "plus-button"

   questionDiv[i].appendChild(plusButton)
plusButton.addEventListener("click",() => {
    const isActive = bodyDiv[i].classList.toggle('active');
    if (isActive) {
        plusButton.innerHTML = '<img src="assets/images/icon-minus.svg" />';
    } else {
        plusButton.innerHTML = '<img src="assets/images/icon-plus.svg" />';
    }


})
}





