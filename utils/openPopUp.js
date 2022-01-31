import { count } from "./counter.js";
import { startNewGame } from "./startNewGame.js";
export function openPopUp () {
    const wrapper = document.getElementById('wrapper');
    const popup = document.createElement('div');
    popup.classList.add('popup');

    const btnStartNew = document.createElement('button');
    btnStartNew.textContent = 'start new game';
    btnStartNew.addEventListener('click', startNewGame);
    btnStartNew.classList.add('start');

    const winMessage = document.createElement('span');
    winMessage.textContent = 'YOU WON!';

    const counter = document.createElement('span');

    counter.textContent = `Вы выйграли за ${count.counter} попыток!`


    popup.append(winMessage);
    popup.append(counter);
    popup.append(btnStartNew);
    wrapper.append(popup);
}
