// Afficher les identifiants des utilisateurs sur le dashboard Entreprise et protéger la page

const user = protegerPage("entreprise");

if (user) {
  const sidebarNom = document.getElementById("sidebar-nom");
  const sidebarActivite = document.getElementById("sidebar-activite");
  const sidebarId = document.getElementById("sidebar-id");
  const welcoming = document.getElementById("titre-bienvenue");
  const entrepise = document.getElementById("entrepise");

  if (sidebarNom) sidebarNom.textContent = user.nom;
  if (sidebarActivite) sidebarActivite.textContent = user.activite;
  if (sidebarId) sidebarId.textContent = "ID: " + user.id;
  if (welcoming) welcoming.textContent ="Bonjour, " + user.entreprisename;
  if (entrepise) entrepise.textContent = user.entreprisename;
}