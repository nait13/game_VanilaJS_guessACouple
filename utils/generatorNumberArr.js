//Функция генерирует массив чисел.
export function generatorNumberArr(arr) {
    let arrNumber = [];
    let cur = 1;
    for(let i = 0;i<arr.length;i+=2){
        arrNumber[i] = cur;
        arrNumber[i+1] = cur
        cur++
    }
    return arrNumber;
}
