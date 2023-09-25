// DOM Elements Declaration
const menu_nav = document.getElementById("nav_menu");

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".btn-signup");
const modalCloseBtn = document.querySelector(".close");

const formData = document.querySelectorAll(".formData");
const submit = document.getElementById("form");


// Functions Declaration
const launchModal = () => modalbg.style.display = "block"; // launch modal form
const closeModal = () => modalbg.style.display = "none"; // close modal form

const editNav = () => {
	let x = document.getElementById("myTopnav");

	(x.className === "topnav") ? x.className += " responsive" : x.className = "topnav";
	(x.className.includes("responsive")) ? menu_nav.style = "color: white;" : menu_nav.style = "color: #ff0000";
}

const checkData = (e) => {
	e.preventDefault();

	const firstname = document.querySelectorAll(".formData")[0].querySelector("input").value;
	const surname = document.querySelectorAll(".formData")[1].querySelector("input").value;
	const email = document.querySelectorAll(".formData")[2].querySelector("input").value;
	const birthdate = document.querySelectorAll(".formData")[3].querySelector("input").value;
	const quantity = document.querySelectorAll(".formData")[4].querySelector("input").value;
	const radio = document.querySelectorAll(".formData")[5].querySelectorAll("input[type='radio']");
	const generalConditions = document.querySelectorAll(".formData")[6].querySelector("input"); // querySelector("input") Select automatically the first element

	if(firstname === "" || firstname.length < 2) return false;
	if(surname === "" || surname.length < 2) return false;

	// ^ : Début de la chaîne
	// [a-zA-Z0-9._-]+ : Nom d'utilisateur de l'adresse e-mail
	// [a-zA-Z0-9] : Lettres (majuscules et minuscules) ou chiffres
	// . : Caractère "point"
	// _- : Caractères "underscore" (_) ou "tiret" (-)
	// + : Au moins un caractère de cette classe de caractères
	// @ : Caractère "at" (@) qui sépare le nom d'utilisateur du domaine
	// [a-zA-Z0-9.-]+ : Domaine de l'adresse e-mail (similaire au nom d'utilisateur)
	// [a-zA-Z0-9] : Lettres (majuscules et minuscules) ou chiffres
	// . : Caractère "point"
	// - : Caractère "tiret"
	// + : Au moins un caractère de cette classe de caractères
	// \. : Caractère "point" (échappé avec \)
	// [a-zA-Z]{2,4} : Extension du domaine
	// [a-zA-Z] : Lettres (majuscules et minuscules)
	// {2,4} : Longueur de 2 à 4 caractères
	// $ : Fin de la chaîne
	if(!(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email))) return false;

	// [0-9]+ Correspond à un ou plusieurs nombres
	if(!(/^[0-9]+$/.test(quantity))) return false;

	const radioChecked = [...radio].filter((r) => r.checked === true);
	if(radioChecked.length === 0) return false;

	if(!generalConditions.checked) return false;

	submit.submit();
}

// Functions Call
menu_nav.addEventListener("click", editNav);
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalCloseBtn.addEventListener("click", closeModal);
submit.addEventListener("submit", (e) => checkData(e));