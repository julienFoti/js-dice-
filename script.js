// Déclaration des constantes/variables
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
 
let scores, currentScore, activePlayer,playing;

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
    currentScore += diceRandomNum;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
  } else {
    
    // si non fin du tour , joueur suivant
    switchPlayer();
  }
    }
})
// changement de joueur
const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    };
    // click bouton sauve si score courrant différent de 0
    btnHold.addEventListener('click', function (event) {
      if (currentScore !== 0) {
        event.preventDefault();
      if (playing)
        
        {
         
            
            // 1. Ajout score courrant au socre global
            scores[activePlayer] += currentScore;
            // scores[1] = scores[1] + currentScore
        
            document.getElementById(`score--${activePlayer}`)
            .textContent = scores[activePlayer];
        
            // Verrification si score egal 100 
            if (scores[activePlayer] >= 100)
             {
               
            
            // Fin de partie
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector('#name--' + activePlayer).textContent = 'gagné!';
            document.querySelector('#name--' + activePlayer).style.color="#ff5e57";
            
                   document.getElementById("show").hidden=false;
              
            document
                .querySelector(`.player--${activePlayer}`)
                
                .classList.add('player--winner');
                document
                .querySelector(`.player--${activePlayer}`)
                .classList.add('player--winner .name');
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.remove('player--active');
                document
                .querySelector(`.player--${activePlayer}`)
              
               
            } else {
            
            // Sinon passe au joeur suivant
            switchPlayer();
            }
          }
        }
        });
        // Conditions début de partie


    const init = function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    
    
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    };
    init();
    //Nouvelle partie
    btnNew.addEventListener('click', init);




