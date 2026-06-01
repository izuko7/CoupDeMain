// function ouvrirConversation(el) {
//     document.querySelectorAll(".contact").forEach(
//         c => c.classList.remove("active"));
//     el.classList.add("active");
// }

 function ouvrirConversation(el) {
            document.querySelectorAll('.contact').forEach(c => c.classList.remove('active'));
            el.classList.add('active');

            // Mobile : slide vers le chat
            if (window.innerWidth <= 600) {
                document.querySelector('.liste-contacts').classList.add('masquee');
                document.querySelector('.panneau-chat').classList.add('visible');
                document.querySelector('.btn-retour').style.display = 'flex';
            }
        }

        function fermerConversation() {
            document.querySelector('.liste-contacts').classList.remove('masquee');
            document.querySelector('.panneau-chat').classList.remove('visible');
            document.querySelector('.btn-retour').style.display = 'none';
        }

        function ouvrirMenu() {
            document.querySelector('.barre-laterale').classList.add('ouverte');
            document.getElementById('overlay').classList.add('visible');
        }

        function fermerMenu() {
            document.querySelector('.barre-laterale').classList.remove('ouverte');
            document.getElementById('overlay').classList.remove('visible');
        }