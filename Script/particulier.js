// Afficher les identifiants des utilisateurs sur le dashboard particulier et protéger la page

const user = protegerPage("particulier");


if (user) {
  const sidebarNom = document.getElementById("sidebar-nom");
  const sidebarProjet = document.getElementById("sidebar-projet");
  const sidebarId = document.getElementById("sidebar-ide");
  const welcoming = document.getElementById("titre-bienvenue");
  const entrepise = document.getElementById("entrepise");

  if (sidebarNom) sidebarNom.textContent = user.nom;
  if (sidebarProjet) sidebarProjet.textContent = user.projet;
  if (sidebarId) sidebarId.textContent = "ID: " + user.id;
  if (welcoming) welcoming.textContent ="Bonjour, " + user.nom + "👋";
  if (entrepise) entrepise.textContent = user.nom;
}

// if (user) {
//   document.getElementById("sidebar-nom").textContent = user.nom;
//   document.getElementById("sidebar-metier").textContent = user.metier;
//   document.getElementById("sidebar-id").textContent = "ID: " + user.id;
//   document.getElementById("titre-bienvenue").textContent ="Bonjour, " + user.nom;

 
// }