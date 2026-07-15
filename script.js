const steps = [

{
image:"images/rohit1.jpg",
heading:"Hello Jiii 👋",
message:"Before you continue...<br><br>I have a tiny surprise prepared just for you.",
button:"Continue →"
},

{
image:"images/rohit2.jpg",
heading:"Just one small request... ✨",
message:"May I borrow a few moments from your valuable time?<br><br>I promise it'll be worth every second. 🌸",
button:"Grant Permission 💌"
},

{
image:"images/rohit3.jpg",
heading:"Finally... 😄",
message:"Thank you for staying till here.<br><br>Now it's time for the real reason behind all this...",
button:"Reveal Surprise 🎁"
},

{
image:"images/rohit3.jpg",
heading:"🎉 Happy Birthday! 🎉",
message:"Wishing you a day filled with laughter, happiness and countless beautiful moments.<br><br>Hope this year brings you everything you've been wishing for! ✨💛",
button:"Open Gallery 📸"
}

];

let current = 0;

const image = document.getElementById("mainImage");
const heading = document.getElementById("heading");
const message = document.getElementById("message");

const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");

const container = document.querySelector(".container");

const gallery = document.getElementById("gallerySection");
const finalPage = document.getElementById("finalSection");

const galleryBack = document.getElementById("galleryBack");
const galleryNext = document.getElementById("galleryNext");

function showStep(){

image.classList.add("fadeOut");
heading.classList.add("fadeOut");
message.classList.add("fadeOut");

setTimeout(()=>{

image.src=steps[current].image;
heading.innerHTML=steps[current].heading;
message.innerHTML=steps[current].message;
nextBtn.innerHTML=steps[current].button;

image.classList.remove("fadeOut");
heading.classList.remove("fadeOut");
message.classList.remove("fadeOut");

image.classList.add("fadeIn");
heading.classList.add("fadeIn");
message.classList.add("fadeIn");

backBtn.disabled=current===0;

},300);

}

nextBtn.onclick=()=>{

if(current<steps.length-1){

current++;
showStep();

}

else{

container.style.display="none";
gallery.style.display="block";

}

};

backBtn.onclick=()=>{

if(current>0){

current--;
showStep();

}

};

galleryNext.onclick=()=>{

gallery.style.display="none";
finalPage.style.display="flex";

};

galleryBack.onclick=()=>{

gallery.style.display="none";
container.style.display="flex";

current=steps.length-1;

showStep();

};