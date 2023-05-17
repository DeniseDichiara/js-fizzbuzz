//* creazione del ciclo FOR per avere 100 numeri

//todo Controllo multipli

//? stampo in console
    //? se multiplo di 3 => Fizz
    //? Se multiplo di 5 => Buzz
    //? se multiplo di 3 e 5 => fizzBuzz


let fizzBuzz

const divElement = document.getElementById('fizz');
const otherDivElement = document.getElementById('buzz');


for (let i = 1; i <= 100 ; i ++){


if((i % 3 === 0) && (i % 5 === 0)){
    console.log('FizzBuzz');
}


else if (i % 3  === 0){
    console.log('Fizz');
    const FIZZnumber = document.createElement('p');
    FIZZnumber.append('Fizz: ' + i);

    divElement.append(FIZZnumber);


}else if (i % 5 === 0) {
    console.log('Buzz');
    const BUZZnumber = document.createElement('p');
    BUZZnumber.append('Buzz: ' + i);

    otherDivElement.append( BUZZnumber);
} else{
    console.log(i);
}

}
