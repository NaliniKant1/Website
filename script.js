document.addEventListener("DOMContentLoaded", function(){

/* ==============================
PHOTO AUTO SCROLL (UNCHANGED UI)
============================== */

const slider = document.querySelector(".slider");

if(slider){

let speed = 1.2;
let position = 0;

function moveSlider(){

position += speed;

slider.scrollLeft = position;

if(position >= slider.scrollWidth - slider.clientWidth){
position = 0;
}

requestAnimationFrame(moveSlider);

}

moveSlider();

}


/* ==============================
VISITOR INTEREST LEARNING (ML STYLE)
============================== */

let clicks = JSON.parse(localStorage.getItem("userClicks")) || {
skills:0,
projects:0,
gallery:0
};

function recordClick(section){

clicks[section] += 1;

localStorage.setItem("userClicks",JSON.stringify(clicks));

}


/* Track Navigation Clicks */

document.querySelectorAll("a").forEach(link=>{

link.addEventListener("click",function(){

let text = this.innerText.toLowerCase();

if(text.includes("skill")) recordClick("skills");

if(text.includes("project") || text.includes("education")) recordClick("projects");

if(text.includes("gallery")) recordClick("gallery");

});

});


/* ==============================
AI CHATBOT ENGINE
============================== */

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


/* ==============================
AI RESPONSE LOGIC
============================== */

function aiResponse(question){

question = question.toLowerCase();


if(question.includes("education")){

return "Nalini Kant completed B.Tech in Electronics and Communication Engineering from Bihar Engineering University Patna.";

}


if(question.includes("skill")){

return "Skills include C, C++, HTML, CSS, JavaScript, Analog Circuits, Digital Circuits, Signals and Systems, Communication, Electronics Devices and Circuits, Network Theory, Control Systems, Electromagnetic Theory and Digital CMOS VLSI Design.";

}


if(question.includes("project")){

return "Two projects are available: Online Voting System built using HTML CSS Bootstrap PHP MySQL JavaScript and AJAX. Radar System using Ultrasonic Sensor built with Arduino Uno Servo Motor Arduino IDE and Processing IDE.";

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


/* ==============================
SEND MESSAGE
============================== */

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


/* ==============================
ENTER KEY SUPPORT
============================== */

if(botInput){

botInput.addEventListener("keypress",function(e){

if(e.key === "Enter"){

botSend.click();

}

});

}


});
