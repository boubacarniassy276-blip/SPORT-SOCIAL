// SPORT SOCIAL
// JavaScript principal

console.log("Sport Social est lancé !");


// ================================
// BOUTON CRÉER UN COMPTE
// ================================

function creerCompte() {
  window.location.href = "register.html";
}


// ================================
// BOUTON SE CONNECTER
// ================================

function seConnecter() {
  alert("La page de connexion sera créée prochainement.");
}


// ================================
// FORMULAIRE D'INSCRIPTION
// ================================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

  registerForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const username =
      document.getElementById("username").value;

    alert(
      "Bienvenue " + username + " !\n\n" +
      "Ton compte sera connecté à la base de données dans une prochaine étape."
    );

  });

}
