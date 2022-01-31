export function addImgCard (arr1,arr2) {
    for(let i = 0;i<arr1.length;i++){
        arr1[i].src = `img/${arr2[i]}.jpg`
    }
}