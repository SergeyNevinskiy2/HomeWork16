'use strict';

const userName = +prompt('Введите число');
if(userName < 1) {
    console.log('NaN')
}else if (userName === 1){
    console.log('1 не простое число')
}

if (userName > 1) {
    for(let i = 2; i < userName; i++){
        if(userName % i === 0){
            console.log(`Минимальный делитель твоего числа ${i}`)
        break
        }else{
            console.log(`Число простое и минимальный делитель ${userName} и 1`);
            break;
        }
    }
}