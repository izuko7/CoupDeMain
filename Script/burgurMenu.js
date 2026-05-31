function ouvrirMenu() {
    document.getElementById('sidebar').classList.add('ouvert');
    document.getElementById('overlay').classList.add('actif');
}

function fermerMenu() {
    document.getElementById('sidebar').classList.remove('ouvert');
    document.getElementById('overlay').classList.remove('actif');
}