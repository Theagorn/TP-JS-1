//Exercice : réagir au clic 1

const titre = document.getElementsByTagName('h1');

titre[0].addEventListener('click', function() {
    titre[0].textContent = '-- :D --';
});

//Exercice : réagir au clic 2

const monTitre = document.getElementById('monTitre');
const boutonAjouter = document.getElementById('ajouterClasse');
const boutonSupprimer = document.getElementById('supprimerClasse');
const boutonToggle = document.getElementById('toggleClasse');

boutonAjouter.addEventListener('click', function() {
    monTitre.classList.add('maClasse');
});

boutonSupprimer.addEventListener('click', function() {
    monTitre.classList.remove('maClasse');
});


boutonToggle.addEventListener('click', function() {
    monTitre.classList.toggle('maClasse');
});

//Exercice : réagir au clic 3

function creerImage(event) {
    const x = event.clientX;
    const y = event.clientY;

    const nouvelleImage = document.createElement('img');
    nouvelleImage.src = 'https://www.w3.org/html/logo/downloads/HTML5_Logo_256.png';
    nouvelleImage.classList.add('image');

    nouvelleImage.style.left = x + 'px';
    nouvelleImage.style.top = y + 'px';

    const conteneur = document.getElementById('page');
    conteneur.appendChild(nouvelleImage);

    console.log('Coordonnées X:', x);
    console.log('Coordonnées Y:', y);
}

const conteneur = document.getElementById('page');
conteneur.addEventListener('click', creerImage);