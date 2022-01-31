export function startNewGame() {
    const popup = document.getElementsByClassName('popup')[0];
    let str = document.getElementsByClassName('startGame')[0];
    const wrapper = document.querySelector('#wrapper');
    wrapper.style.display = 'none';
    popup.remove();
    str.classList.remove('non')
}