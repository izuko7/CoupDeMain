// Inscription Professionel

document.querySelector("#form-professionnel .btn-submit")?.addEventListener("click", function (e) {
    e.preventDefault();

    const nom = document.querySelector("#form-professionnel input[type='text']")?.value.trim();
    const email = document.querySelector("#form-professionnel input[type='email']")?.value.trim();
    const metier = document.querySelector("#form-professionnel select")?.value;
    const exp = document.querySelector("#form-professionnel input[type='number']")?.value.trim();
    const localisation = document.querySelector("#form-professionnel .input-info input[type='text']")?.value.trim();
    const password = document.getElementById("mdp")?.value.trim();
    const cgu = document.getElementById("cgu-pro")?.checked;

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

    window.location.href = "../Dashboard/dashboardPro.html"; 
}
);

// Inscription Entreprise

document.querySelector("#form-entreprise .btn-submit")?.addEventListener("click", function (e) {
    e.preventDefault();

    const entreprisename = document.querySelector("#form-entreprise input[type='text']")?.value.trim();
    const siret = document.querySelectorAll("#form-entreprise input[type='text']")[1]?.value.trim();
    const activite = document.querySelectorAll("#form-entreprise select")[0]?.value;
    const taille = document.querySelectorAll("#form-entreprise select")[1]?.value;
    const nom = document.querySelectorAll("#form-entreprise input[type='text']")[2]?.value.trim();
    const password = document.getElementById("mdp-ent")?.value.trim();
    const email = document.querySelector("#form-entreprise input[type='email']")?.value.trim();
    const telephone = document.querySelector("#form-entreprise input[type='tel']")?.value.trim();
    const cgu = document.getElementById("cgu-ent")?.checked;

    let erreur = document.querySelector("#form-entreprise .erreur");
    if (!erreur) {
        erreur = document.createElement("p");
        erreur.className = "erreur";
        erreur.style.cssText = "color:red;font-size:0.82rem;margin:4px 0;";
        document.querySelector("#form-entreprise .btn-submit").before(erreur);
    }

    erreur.textContent = "";

    if (!entreprisename || !email || !password || !nom) {
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
        entreprisename,
        siret,
        activite,
        taille,
        nom,
        email,
        telephone,
        password,
        role: "entreprise"
    };

    const saved = localStorage.getItem("users");
    const users = saved ? JSON.parse(saved) : [];
    users.push(nouvelUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("userConnecte", JSON.stringify(nouvelUser));

    window.location.href = "../DashboardEntreprise/dashboardEnt.html";
})

// Inscription particulier

document.querySelector("#form-particulier .btn-submit")?.addEventListener("click", function (e) {
    e.preventDefault();
 
    const nom      = document.querySelector("#form-particulier input[type='text']")?.value.trim();
    const email    = document.querySelector("#form-particulier input[type='email']")?.value.trim();
    const projet   = document.querySelectorAll("#form-particulier select")[0]?.value;
    const password = document.getElementById("mdp-part")?.value.trim();
    const cgu      = document.getElementById("cgu-part")?.checked;
 
    let erreur = document.querySelector("#form-particulier .erreur");
    if (!erreur) {
        erreur = document.createElement("p");
        erreur.className = "erreur";
        erreur.style.cssText = "color:red;font-size:0.82rem;margin:4px 0;";
        document.querySelector("#form-particulier .btn-submit").before(erreur);
    }
    erreur.textContent = "";
 
    if (!nom || !email || !password) {
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
        projet,
        password,
        role: "particulier"
    };
 
    const saved = localStorage.getItem("users");
    const users = saved ? JSON.parse(saved) : [];
    users.push(nouvelUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("userConnecte", JSON.stringify(nouvelUser));
 
    window.location.href = "../DashboardParticulier/dashboardPart.html"; 
});