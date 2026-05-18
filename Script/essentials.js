// Affiche le mot de passe au click
const input1 = document.getElementById('mdp');
const icon1 = document.querySelector('.toggle-mdp');

function toggleMotdePasse() {
    if (input1.type === 'password') {
        input1.type = 'text';
        icon1.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        input1.type = 'password';
        icon1.classList.replace('fa-eye-slash', 'fa-eye');
    }
}
