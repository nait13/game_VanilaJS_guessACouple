//Create cards in DOM;
export function createCards(number,anchor){
    for(let i = 0;i<number;i++){
        anchor.insertAdjacentHTML("afterbegin",`
        <div class="card" data-number = "0">
            <div class="front">
                <img src='' alt="frontCard">
            </div>
            <div class="back">
                <img src="img/backWrapper.jpg" alt="backCard">
            </div>
        </div>
    `)
    }
}