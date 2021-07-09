window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    document.getElementById("navbar").style.background = "#fff";
}

const navToogle = document.querySelector(".nav-toogle");
const navLinks = document.querySelectorAll(".nav_link");

navToogle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
    link.addEventListener("click", () =>{
        document.body.classList.remove("nav-open");
    })
})