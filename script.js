document.addEventListener("DOMContentLoaded", function(){

/* ================================
PHOTO AUTO SCROLL
================================ */

const slider = document.querySelector(".gallery-slider");

if(slider){

let speed = 0.5;

function moveSlider(){

slider.scrollLeft += speed;

if(slider.scrollLeft >= slider.scrollWidth - slider.clientWidth){
slider.scrollLeft = 0;
}

requestAnimationFrame(moveSlider);

}

moveSlider();

}


/* =================================
VISITOR INTEREST LEARNING
================================ */

let visitorData = JSON.parse(localStorage.getItem("visitorData")) || {
skills:0,
projects:0,
gallery:0
};

function recordVisit(section){

visitorData[section] += 1;

localStorage.setItem("visitorData",JSON.stringify(visitorData));

}


/* Detect current page */

let page = window.location.pathname.toLowerCase();

if(page.includes("skills")) recordVisit("skills");
if(page.includes("education")) recordVisit("projects");
if(page.includes("gallery")) recordVisit("gallery");


/* =================================
AI PROJECT RECOMMENDER
================================ */

function recommendProject(){

let recommendation = "Radar System using Ultrasonic Sensor";

if(visitorData.skills > visitorData.projects){

recommendation = "Online Voting System Dynamic Website";

}

localStorage.setItem("recommendedProject",recommendation);

}

recommendProject();


/* =================================
AI CHATBOT SYSTEM
================================ */

const botInput = document.querySelector("#bot-input");
const botMessages = document.querySelector("#bot-messages");
const botSend = document.querySelector("#bot-send");


function addMessage(message,type){

if(!botMessages) return;

let msg = document.createElement("div");

msg.className = type;

msg.innerText = message;

botMessages.appendChild(msg);

botMessages.scrollTop = botMessages.scrollHeight;

}


/* =================================
AI RESPONSE ENGINE
================================ */

function aiResponse(question){

question = question.toLowerCase();

if(question.includes("education")){

return "Nalini Kant completed B.Tech in Electronics and Communication Engineering from Bihar Engineering University Patna.";

}

if(question.includes("skill")){

return "Skills include C, C++, HTML, CSS, JavaScript, Analog Circuits, Digital Circuits, Signals and Systems, Communication, Electronics Devices and Circuits, Network Theory, Control Systems, Electromagnetic Theory and Digital CMOS VLSI Design.";

}

if(question.includes("project")){

let rec = localStorage.getItem("recommendedProject");

return "Projects include Online Voting System Dynamic Website and Radar System using Ultrasonic Sensor. Recommended project for you is: " + rec;

}

if(question.includes("certification") || question.includes("certificate")){

return "Certifications include Sensor Technologies Physics Fabrication and Circuits from NPTEL, Developing Soft Skills and Personality from NPTEL, C Programming Language from Great Learning and C++ from Great Learning.";

}

if(question.includes("achievement") || question.includes("award")){

return "Meritorious Student Encouragement Award for performance in semester examination.";

}

if(question.includes("contact")){

return "You can contact Nalini Kant using the email option available on the website.";

}

return "You can ask about skills, education, projects, certifications or achievements.";

}


/* =================================
SEND BUTTON
================================ */

if(botSend){

botSend.addEventListener("click",function(){

let userText = botInput.value;

if(userText.trim() === "") return;

addMessage(userText,"user");

let reply = aiResponse(userText);

setTimeout(function(){

addMessage(reply,"bot");

},500);

botInput.value="";

});

}


/* =================================
ENTER KEY SUPPORT
================================ */

if(botInput){

botInput.addEventListener("keypress",function(e){

if(e.key === "Enter"){

botSend.click();

}

});

}


/* =================================
MANUAL DRAG + SWIPE SUPPORT
================================ */

if(slider){

let isDown=false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown",(e)=>{
isDown=true;
startX=e.pageX-slider.offsetLeft;
scrollLeft=slider.scrollLeft;
});

slider.addEventListener("mouseleave",()=>{isDown=false;});
slider.addEventListener("mouseup",()=>{isDown=false;});

slider.addEventListener("mousemove",(e)=>{
if(!isDown) return;
e.preventDefault();
const x=e.pageX-slider.offsetLeft;
const walk=(x-startX)*2;
slider.scrollLeft=scrollLeft-walk;
});

slider.addEventListener("touchstart",(e)=>{
startX=e.touches[0].pageX;
scrollLeft=slider.scrollLeft;
});

slider.addEventListener("touchmove",(e)=>{
const x=e.touches[0].pageX;
const walk=(x-startX)*2;
slider.scrollLeft=scrollLeft-walk;
});

}

});
