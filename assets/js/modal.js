// DOM Elements Declaration
const menu_nav = document.getElementById("nav_menu");

const modalbg = document.querySelector(".bground");
const modalSuccess = document.querySelector(".modal-success");
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

const addErrorMessage = (node, number, message, border) => {
	if(border) node.style.border = "2px solid #FF4E60";

	const nodeP = [...document.querySelectorAll(".formData")[number].childNodes].filter((n) => n.tagName === "P");
	if(nodeP.length === 0) {
		const errorParagraph = document.createElement("p");
		errorParagraph.className = "error";
		errorParagraph.textContent = message;
	
		document.querySelectorAll(".formData")[number].appendChild(errorParagraph);
	}
}

const checkData = (e) => {
	e.preventDefault();

	const firstname = document.querySelectorAll(".formData")[0].querySelector("input");
	const surname = document.querySelectorAll(".formData")[1].querySelector("input");
	const email = document.querySelectorAll(".formData")[2].querySelector("input");
	const birthdate = document.querySelectorAll(".formData")[3].querySelector("input");
	const quantity = document.querySelectorAll(".formData")[4].querySelector("input");
	const radio = document.querySelectorAll(".formData")[5].querySelectorAll("input[type='radio']");
	const generalConditions = document.querySelectorAll(".formData")[6].querySelector("input"); // querySelector("input") Select automatically the first element

	if(firstname.value === "" || firstname.value.length < 2)
		return addErrorMessage(firstname, 0, "Veuillez entrer 2 caractères ou plus pour le champ du prénom.", true);

	if(surname.value === "" || surname.value.length < 2)
		return addErrorMessage(surname, 1, "Veuillez entrer 2 caractères ou plus pour le champ du nom.", true);

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
	if(!(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email.value)))
		return addErrorMessage(email, 2, "Vous devez entrer une adresse email valide.", true);

	if(birthdate.value === "")
		return addErrorMessage(birthdate, 3, "Vous devez entrer votre date de naissance.", true);

	// [0-9]+ Correspond à un ou plusieurs nombres
	if(!(/^[0-9]+$/.test(quantity.value)))
		return addErrorMessage(quantity, 4, "Vous devez entrer un nombre entre 0 et 99.", true);

	const radioChecked = [...radio].filter((r) => r.checked === true);
	if(radioChecked.length === 0)
		return addErrorMessage(radio, 5, "Vous devez choisir au moins une option.", false);

	if(!generalConditions.checked)
		return addErrorMessage(generalConditions, 6, "Vous devez vérifier que vous acceptez les termes et conditions.", false);

	modalSuccess.style.display = "flex";

	setTimeout(() => {
		submit.submit();
	}, 1000);
}

// Functions Call
menu_nav.addEventListener("click", editNav);
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalCloseBtn.addEventListener("click", closeModal);
submit.addEventListener("submit", (e) => checkData(e));