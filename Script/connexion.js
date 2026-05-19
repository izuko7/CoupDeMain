document
  .getElementById("btn-connexion")
  ?.addEventListener("click", function (e) {
    e.preventDefault();

    const email = document.getElementById("email")?.value.trim();
    const password = document.getElementById("mdp")?.value.trim();
    const erreur = document.getElementById("erreur");

    if (!email || !password) {
      erreur.textContent = "Veuillez remplir tous les champs.";
      return;
    }

    const tous = getUsers();
    const user = tous.find((u) => u.email === email && u.password === password);

    if (!user) {
      erreur.textContent = "Email ou mot de passe incorrect";
      return;
    }

    localStorage.setItem("userConnecte", JSON.stringify(user));

    switch (user.role) {
        case "professionnel":
            window.location.href = "";
        break;
        case "entreprise" :
            window.location.href = "";
        break;
        case "particulier":
            window.location.href = "";
        break;
    }
  });
