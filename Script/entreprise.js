// Afficher les identifiants les utilisateurs sur le dashboard Entreprise et protection de la page
const user = protegerPage("entreprise");

if (user) {
  document.getElementById("sidebar-nom").textContent = user.nom;
  document.getElementById("sidebar-activite").textContent = user.activite;
  document.getElementById("sidebar-id").textContent = "ID: " + user.id;
  document.getElementById("titre-bienvenue").textContent ="Bonjour, " + user.entreprisename();
}