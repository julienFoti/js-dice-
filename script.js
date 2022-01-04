// Déclaration des constantes/variables
const joueur0El = document.querySelector('.joueur--0');
const joueur1El = document.querySelector('.joueur--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const round0El = document.getElementById('round--0');
const round1El = document.getElementById('round--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
 
let scores, roundScore, activejoueur,playing;

// cacher les confettis
document.getElementById("show").hidden=true;

// definition aleatoire du lancer de dé
  btnRoll.addEventListener('click', function () {
    if (playing) {
const diceRandomNum = 
Math.floor(Math.random()*6)+1

// affichage de l'image 
const firstDiceImage =
'images/dice-' + diceRandomNum + '.png';

document.querySelectorAll('img')[1].setAttribute
('src', firstDiceImage)

 // 3. verrification résultat différent de 1
 if (diceRandomNum !== 1) {
      
    // si oui ajout au score courrant
    roundScore += diceRandomNum;
    document.getElementById(
      `round--${activejoueur}`
    ).textContent = roundScore;
  } else {
    
    // si non fin du tour , joueur suivant
    switchjoueur();
  }
    }
})
// changement de joueur
const switchjoueur = function () {
    document.getElementById(`round--${activejoueur}`).textContent = 0;
    roundScore = 0;
    activejoueur = activejoueur === 0 ? 1 : 0;
    joueur0El.classList.toggle('joueur--active');
    joueur1El.classList.toggle('joueur--active');
    };
    // click bouton sauve si score courrant différent de 0
    btnHold.addEventListener('click', function (event) {
      if (roundScore !== 0) {
        event.preventDefault();
      if (playing)
        
        {
         
            
//Ajout score courrant au socre global
    scores[activejoueur] += roundScore;
    // scores[1] = scores[1] + roundScore
        
    document.getElementById(`score--${activejoueur}`)
    .textContent = scores[activejoueur];
        
     // Verrification si score egal 100 
        if (scores[activejoueur] >= 100)
             {
         // Fin de partie
            playing = false;   
             document.getElementById("show").hidden=false;
            diceEl.classList.add('hidden');
            document.querySelector('#nom--' + activejoueur).textContent = 'gagné!';
            document.querySelector('#nom--' + activejoueur).style.color="#ff5e57";  
            document.querySelector(`.joueur--${activejoueur}`).classList.add('joueur--winner');
            document.querySelector(`.joueur--${activejoueur}`).classList.add('joueur--winner.nom');
            document.querySelector(`.joueur--${activejoueur}`).classList.remove('joueur--active');
            document.querySelector(`.joueur--${activejoueur}`)
               } 
        else {
            
        // Sinon passe au joeur suivant
            switchjoueur();
            }
          }
        }
        });
        
        // Conditions début de partie


            const init = function () {
            scores = [0, 0];
            roundScore = 0;
            activejoueur = 0;
            playing = true;
            diceEl.classList.remove('hidden');
            score0El.textContent = 0;
            score1El.textContent = 0;
            round0El.textContent = 0;
            round1El.textContent = 0;
            document.getElementById("show").hidden=true;
            
            joueur0El.classList.remove('joueur--winner');
            joueur1El.classList.remove('joueur--winner');
            joueur0El.classList.add('joueur--active');
            joueur1El.classList.remove('joueur--active');
            };
            init();

        //Nouvelle partie
            btnNew.addEventListener('click', init);




