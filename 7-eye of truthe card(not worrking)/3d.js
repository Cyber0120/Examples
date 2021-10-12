const card = document.querySelector(".card");
const container = document.querySelector(".container");
const title = document.querySelector(".middle h1");
const eye = document.querySelector(".top img");
const cta = document.querySelector(".cta");
const text = document.querySelector(".middle p");
const options = document.querySelector(".middle ul");
const circle = document.querySelector(".circle");

card.addEventListener("mousemove", (e) => {
    let xAxis = (windows.innerHeight / 2 - e.pageY) / -15;
    let yAxis = (windows.innerWidth / 2 - e.pageX) / -15;
    card.getElementsByClassName.transfrom = 'rotateY(${yAxis}deg) rotateX(${xAxis}deg)';
});
