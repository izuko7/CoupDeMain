// Afficher les identifiants des utilisateurs sur le dashboard

const user = protegerPage("professionnel");

if (user) {
  document.getElementById("sidebar-nom").textContent = user.nom;
  document.getElementById("sidebar-metier").textContent = user.metier;
  document.getElementById("sidebar-id").textContent = "ID: " + user.id;
  document.getElementById("titre-bienvenue").textContent ="Bonjour, " + user.nom;

  const mois = new Date().toLocaleDateString("fr-FR", { month: "long"});
  document.getElementById("mois-actuel").textContent = mois.toUpperCase();
}