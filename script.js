import { count } from './utils/counter.js';
import { createCards } from './utils/createCards.js';
import { generatorNumberArr } from './utils/generatorNumberArr.js';
import { addImgCard } from './utils/addImgCard.js';
import { addDatasetCards } from './utils/addDatasetCards.js';
import { openPopUp } from './utils/openPopUp.js';
import {checkWin} from './utils/checkWin.js';
import { shuffle } from './utils/shuffle.js';
 


function startGame (number){
    arrGuessedCards = [];
    count.clear();
    const wrapper = document.getElementById('wrapper');
    createCards(number,wrapper);
    

    const divClass = document.getElementsByClassName('card');
    const arrayDiv = [...divClass];
    let arrNumber = shuffle(generatorNumberArr(divClass));
    const cardImg = document.querySelectorAll('[alt="frontCard"]')

    addImgCard(cardImg,arrNumber);
    addDatasetCards(arrayDiv,arrNumber)

    arrayDiv.forEach((item)=>item.addEventListener('click',turnCard))
}



function endGame (){
    const divClass = document.getElementsByClassName('card');
    const arrayDiv = [...divClass];
    arrayDiv.forEach((item)=>item.remove());
    openPopUp();
}


const choiceDifficulty = document.querySelector('.startGame')
choiceDifficulty.addEventListener('click',function(event){
    if(event.target.textContent === 'EASY'){
        startGame(4)
        choiceDifficulty.classList.add('non')
        wrapper.style.display = "grid"
    }else if(event.target.textContent === 'MEDIUM'){
        startGame(16)
        choiceDifficulty.classList.add('non')
        wrapper.style.display = "grid"
    }else if(event.target.textContent === 'HARD'){
        startGame(32)
        choiceDifficulty.classList.add('non')
        wrapper.style.display = "grid"
    }
})


let statusGame = { 
    hasTurnCard: false,
    firstCard:null,
    secondCard:null,
    lockCards: false,
}

function turnCard(){
    if(statusGame.lockCards)return;
    this.classList.add('turn');
    if(!statusGame.hasTurnCard&&statusGame.secondCard){
        statusGame.secondCard.classList.remove('turn'); 
        statusGame.firstCard.classList.remove('turn');
        statusGame.secondCard.addEventListener('click',turnCard);
        statusGame.firstCard.addEventListener('click',turnCard);
        count.inc();
    }
    if (!statusGame.hasTurnCard) {
        statusGame.hasTurnCard = true;
        statusGame.firstCard = this;
        statusGame.firstCard.removeEventListener('click',turnCard)
        return
    }else{
        statusGame.secondCard = this;
        statusGame.hasTurnCard = false;
        statusGame.secondCard.removeEventListener('click',turnCard)
    }
    checkForMatch()
  
}


// Func Resets values
function resetBoard(obj) {
    obj.hasTurnCard = false,
    obj.firstCard = null,
    obj.secondCard = null,
    obj.lockCards = false
}



let arrGuessedCards = [];
function checkForMatch (){
    if(statusGame.firstCard.dataset.number === statusGame.secondCard.dataset.number){
        statusGame.lockCards = true;
        let promise = new Promise((resolve)=>{
            setTimeout(()=>{
                statusGame.firstCard.classList.add('neo')
                statusGame.secondCard.classList.add('neo');
                arrGuessedCards.push(statusGame.firstCard);
                arrGuessedCards.push(statusGame.secondCard)
                count.inc();
                resetBoard(statusGame);
                statusGame.lockCards = false;
            resolve('OK');
            },2000)
        })
        promise.then(()=>{
            const divClass = document.getElementsByClassName('card');
            if(checkWin(divClass,arrGuessedCards)){console.log('End game'),endGame()};
        });
    }
    
}


