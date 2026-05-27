document.querySelector("#form-professionnel .btn-submit")?.addEventListener("click", function (e) {
    e.preventDefault();
 
    const nom        = document.querySelector("#form-professionnel input[type='text']")?.value.trim();
    const email      = document.querySelector("#form-professionnel input[type='email']")?.value.trim();
    const metier     = document.querySelector("#form-professionnel select")?.value;
    const exp        = document.querySelector("#form-professionnel input[type='number']")?.value.trim();
    const localisation = document.querySelector("#form-professionnel .input-info input[type='text']")?.value.trim();
    const password   = document.getElementById("mdp")?.value.trim();
    const cgu        = document.getElementById("cgu-pro")?.checked;
 
    let erreur = document.querySelector("#form-professionnel .erreur");
    if (!erreur) {
        erreur = document.createElement("p");
        erreur.className = "erreur";
        erreur.style.cssText = "color:red;font-size:0.82rem;margin:4px 0;";
        document.querySelector("#form-professionnel .btn-submit").before(erreur);
    }
    erreur.textContent = "";
 
    if (!nom || !email || !password || !metier) {
        erreur.textContent = "Veuillez remplir tous les champs obligatoires.";
        return;
    }
    if (!cgu) {
        erreur.textContent = "Vous devez accepter les conditions d'utilisation.";
        return;
    }
 
    const tous = getUsers();
    if (tous.find(u => u.email === email)) {
        erreur.textContent = "Cet email est déjà utilisé.";
        return;
    }
 
    const nouvelUser = {
        id: Date.now(),
        nom,
        email,
        metier,
        exp: parseInt(exp) || 0,
        localisation,
        password,
        role: "professionnel"
    };
 
    const saved = localStorage.getItem("users");
    const users = saved ? JSON.parse(saved) : [];
    users.push(nouvelUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("userConnecte", JSON.stringify(nouvelUser));
 
    window.location.href = "../Dashboard/dashboardPro.html"; // TODO: mettre le bon chemin
}
);