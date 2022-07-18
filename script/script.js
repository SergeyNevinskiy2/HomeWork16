'use strict';

const userName = +prompt('Введите число');
let minDiv = 0;
if(userName < 1) {
    console.log('NaN')
}else{
    for(let i = 2; i < userName; i++){
        if(userName % i === 0){
            minDiv = i;
            console.log(`Минимальный делитель твоего числа ${minDiv}`)
            break;
}
}


if (minDiv === 0) {
    console.log(`Число простое и минимальный делитель ${userName} и 1`)
        
}
}