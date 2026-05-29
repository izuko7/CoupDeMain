// Afficher les identifiants des utilisateurs sur le dashboard Entreprise et protéger la page

const user = protegerPage("entreprise");

if (user) {
  document.getElementById("sidebar-nom").textContent = user.nom;
  document.getElementById("sidebar-activite").textContent = user.activite;
  document.getElementById("sidebar-id").textContent = "ID: " + user.id;
  document.getElementById("titre-bienvenue").textContent ="Bonjour, " + user.entreprisename;
  document.getElementById("nom-entrepise").textContent = user.entreprisename;
}