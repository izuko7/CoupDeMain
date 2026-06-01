function ouvrirMenu() {
    const sidebar = document.getElementById('sidebar') || document.querySelector('.sidebar') || document.querySelector('.barre-laterale');
    const overlay = document.getElementById('overlay');
    if (sidebar) sidebar.classList.add('ouvert');
    if (overlay) overlay.classList.add('actif');
}

function fermerMenu() {
    const sidebar = document.getElementById('sidebar') || document.querySelector('.sidebar') || document.querySelector('.barre-laterale');
    const overlay = document.getElementById('overlay');
    if (sidebar) sidebar.classList.remove('ouvert');
    if (overlay) overlay.classList.remove('actif');
}