const userDefault = [
  // profil professionnel
  {
    id: 1,
    nom: "Salif Doumbia",
    metier: "Plomberie",
    localisation: "Daloa",
    exp: 5,
    email: "SalifouDdoumb@gmail.com",
    password: "12345",
    role: "professionnel",
  },
  // profil entreprise
  {
    id: 2,
    entreprisename: "BatiCorp",
    activite: "BTP",
    taille: "11-50",           
    nom: "Bingoto Walebo",
    email: "Walebooon@gmail.com",
    password: "1234",
    role: "entreprise",
  },
  // profil particulier
  {
    id: 3,                   
    nom: "jean Kouadio",
    email: "JeanKouadio@gmail.com",
    projet: "Gros oeuvre",
    password: "01234",
    role: "particulier",
  },
];

function getUsers() {
  const saved = localStorage.getItem("users");
  const savedUsers = saved ? JSON.parse(saved) : [];
  return [...userDefault, ...savedUsers];
}

function getUserConnect() {
  const user = localStorage.getItem("userConnecte"); 
  return user ? JSON.parse(user) : null;
}

function protegerPage(roleRequis) {
  const user = getUserConnect();
  if (!user) {
    window.location.href = "../Authentification/connexion.html";
    return null;
  }
  if (user.role !== roleRequis) {
    window.location.href = "../Authentification/connexion.html";
    return null;
  }
  return user;
}

function logOut() {
  localStorage.removeItem("userConnecte"); 
  window.location.href = "../Authentification/connexion.html"; 
}