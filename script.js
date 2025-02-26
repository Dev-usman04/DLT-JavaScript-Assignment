



const arrNumber = [3,7,2,9,5] ;
for(let i = 0; i < arrNumber.length; i++){
    console.log(` ${arrNumber} * ${arrNumber} = ${arrNumber * i}`)
}










// et arr = 
let arr = [1, 2, 3, 5, 6, 7 ]
for(let i = 0; i < arr.length; i++){
    if(arr [i] === 5){
        break;
    }
    console.log(arr [i]);
}

let myColors = ["red", "green", "blue"]
for(color of myColors){
    console.log(color);
}

const number = 2;


if(number >= 0){
    console.log('possitive')
}else if(number === 2){
    console.log('zero')
}else{
    console.log('negative')
}



const num1 = 10;
if(num1 % 3 == 0 && num1 % 5 === 0 ){
    console.log( 'fuzzBuzz')
    
}else if( num1 % 3 === 0 && num1 % 5 !== 0){
    console.log( 'fuzz')
}else if(num1 % 3 !== 0 && num1 % 5 === 0){
    console.log('buzz')
}else{
    console.log('the number itselfs')
}
