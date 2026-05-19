const userDafault = [
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
    id: 1,
    entreprisename: "BatiCorp",
    activite: "BTP",
    taille: 11 - 50,
    siret: "1234567",
    nom: "Bingoto Walebo",
    email: "Walebooon@gmail.com",
    password: "1234",
    role: "entreprise",
  },
  // profil particulier
  {
    id: 1,
    nom: "jean Kouadio",
    email: "SalifouDdoumb@gmail.com",
    projet: "Gros oeuvre",
    password: "01234",
    role: "particulier",
  },
];

function getUsers() {
  const saved = localStorage.getItem("users");
  const savedUsers = saved ? JSON.parse(saved) : [];
  return [...userDafault, ...savedUsers];
}

function getUserConnect() {
  const user = localStorage.getItem("userConnect");
  return user ? JSON.parse(user) : null;
}

function protegerPage(roleRequis) {
  const user = getUserConnect();
  if (!user) {
    window.location.href = "";
    return null;
  }
  if (user.role !== roleRequis) {
    window.location.href = "";
    return null;
  }
  return null;
}

function logOut() {
  localStorage.removeItem("userConnect");
  window.location.href;
}
