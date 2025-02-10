const dino = document.getElementById("dino");

const steen = document.getElementById("steen");

const score = document.getElementById("score");



function jump() {

dino.classList.add("jump-animation");

setTimeout(() => {

dino.classList.remove("jump-animation");

}, 500) //zelfde tijd als jump

}

document.addEventListener("keydown", (event) => {

if (!dino.classList.contains("jump-animation")) {

jump();

}

});



setInterval(() => {

score.innerText++;

const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

const steenLeft = parseInt(window.getComputedStyle(steen).getPropertyValue("left"));

if (steenLeft < 0) {

steen.style.display = "none";

}

else {

steen.style.display = "";

}



if(steenLeft < 50 && steenLeft > 0 && dinoTop > 150){

steen.style.animation = "none";

alert("Game Over. Score: " + parseInt(score.textContent))

location.reload();

}



}, 50);