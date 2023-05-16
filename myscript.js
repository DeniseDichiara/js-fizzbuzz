//* creazione del ciclo FOR per avere 100 numeri

//todo Controllo multipli

//? stampo in console
    //? se multiplo di 3 => Fizz
    //? Se multiplo di 5 => Buzz
    //? se multiplo di 3 e 5 => fizzBuzz


let fizzBuzz


//* creazione del ciclo FOR per avere 100 numeri
for (let i = 1; i <= 100 ; i ++){
console.log(i);

//? creazione della condizione di divisibilità: if i / n = 0 allora è un multiplo di 
if((i % 3 === 0) && (i % 5 === 0)){
    console.log('FizzBuzz');
}

else if (i % 3  === 0){
    console.log('Fizz');
}else if (i % 5 === 0) {
    console.log('Buzz');
}

}