// Afficher les identifiants des utilisateurs sur le dashboard et protéger la page

const user = protegerPage("professionnel");

if (user) {
  document.getElementById("sidebar-nom").textContent = user.nom;
  document.getElementById("sidebar-metier").textContent = user.metier;
  document.getElementById("sidebar-id").textContent = "ID: " + user.id;
  document.getElementById("titre-bienvenue").textContent ="Bonjour, " + user.nom;

  const mois = new Date().toLocaleDateString("fr-FR", { month: "long"});
  document.getElementById("mois-actuel").textContent = mois.toUpperCase();
}

// Filtrage des projets
function filtrerProjets() {
  const metier = document.getElementById("filtre-metier").value.toLowerCase();
  const ville = document.getElementById("filtre-localisation").value.toLowerCase();
  const budget = parseInt(document.getElementById("filtre-budget").value) || 0;
  const cartes = document.querySelectorAll(".carte-projet");
 
  cartes.forEach((carte) => {
    const cMetier = carte.dataset.metier.toLowerCase();
    const cVille = carte.dataset.ville.toLowerCase();
    const cBudget = parseInt(carte.dataset.budget);
 
    const okMetier = !metier || cMetier === metier;
    const okVille = !ville || cVille.includes(ville);
    const okBudget = !budget || cBudget >= budget;
 
    carte.style.display = okMetier && okVille && okBudget ? "flex" : "none";
  });
}
 