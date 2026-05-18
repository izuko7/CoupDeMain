// Affiche le mot de passe au click
const input1 = document.getElementById("mdp");
const icon1 = document.querySelector(".toggle-mdp");

function toggleMotdePasse() {
    if (input1.type === "password") {
        input1.type = "text";
        icon1.classList.replace("fa-eye", "fa-eye-slash");
    } else {
        input1.type = "password";
        icon1.classList.replace("fa-eye-slash", "fa-eye");
    }
}

// Changer de profil pour l'inscription

function selectionProfil(profil, type) {
    document.querySelectorAll(".profil-item").forEach((i) => i.classList.remove("active"));
    profil.classList.add("active");

    document.getElementById("form-particulier").style.display = "none";
    document.getElementById("form-professionnel").style.display = "none";
    document.getElementById("form-entreprise").style.display = "none";
    document.getElementById("gauche-particulier").style.display = "none";
    document.getElementById("gauche-professionnel").style.display = "none";
    document.getElementById("gauche-entreprise").style.display = "none";

    if (type === "particulier") {
        document.getElementById("form-particulier").style.display = "block";
        document.getElementById("gauche-particulier").style.display = "flex";
    } else if (type === "entreprise") {
        document.getElementById("form-entreprise").style.display = "block";
        document.getElementById("gauche-entreprise").style.display = "flex";
    } else {
        document.getElementById("form-professionnel").style.display = "block";
        document.getElementById("gauche-professionnel").style.display = "flex";
    }
}