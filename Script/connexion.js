document.getElementById("btn-connexion")?.addEventListener("click", function (e) {
    e.preventDefault();

    const email = document.getElementById("email")?.value.trim();
    const password = document.getElementById("mdp")?.value.trim();
    const erreur = document.getElementById("erreur");

    // Réinitialiser le message d'erreur
    erreur.textContent = "";

    if (!email || !password) {
      erreur.textContent = "Veuillez remplir tous les champs.";
      return;
    }

    const tous = getUsers();
    const user = tous.find((u) => u.email === email && u.password === password);

    if (!user) {
      erreur.textContent = "Email ou mot de passe incorrect.";
      return;
    }

    // CORRECTION : clé cohérente avec auth.js
    localStorage.setItem("userConnecte", JSON.stringify(user));

    // Redirection selon le rôle (à compléter avec les URLs des dashboards)
    switch (user.role) {
      case "professionnel":
        window.location.href = "../Dashboard/dashboardPro.html"; //"../Dashboard/dashboard_professionnel.html"
        break;
      case "entreprise":
        window.location.href = "../DashboardEntreprise/dashboardEnt.html"; //"../Dashboard/dashboard_entreprise.html"
        break;
      case "particulier":
        window.location.href = ""; // TODO: "../Dashboard/dashboard_particulier.html"
        break;
      default:
        erreur.textContent = "Rôle utilisateur inconnu.";
    }
  });