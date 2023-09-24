// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".btn-signup");
const modalCloseBtn = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");

const launchModal = () => modalbg.style.display = "block"; // launch modal form
const closeModal = () => modalbg.style.display = "none"; // close modal form

function editNav() {
	var x = document.getElementById("myTopnav");
	(x.className === "topnav") ? x.className += " responsive" : x.className = "topnav";
}

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalCloseBtn.addEventListener("click", closeModal);