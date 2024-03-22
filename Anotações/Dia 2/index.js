//Funções
function percentage10(price){
    return price - (price * 10/100);
    
}
let total = percentage10(20);
console.log(total);
//Objetos

let itemName = 'Pen';
let itemPrice = 3;
let itemAvailable = true;
let itemColor = 'Red';

let pen = {
    itemName: 'Pen',
    itemPrice: 3,
    itemAvailable: true,
    itemColor: 'Red'
}

console.log(pen);

let friends = ['Marcos', 'Silvia', 'Elisa']
friends[2] = 'Amanda';
console.log(friends);

//Operadores de Igualdade

let num1 = 3;
// === tipo e valor
// == valor
console.log(num1);

//Operadores Ternarios

let driver = 90;
let speed = driver > 110 ? 'Above' : 'Below';
console.log(speed);

//Operadores Lógicos
    //and &&
    //or ||
    //not !

//Operadores Lógicos com Strings
let corCliente = 'white';
let corEstoque = 'black';
let corVendida = corCliente|| corEstoque;

console.log(corVendida);

//If else

let driverSpeed = 39

if (driverSpeed >  110){
    console.log("Fast");
}else if (driverSpeed > 40 && driverSpeed < 110){
    console.log("OK");
}else
    console.log("slow");

//Switch and Case

let airport = 'MCO';

switch(airport){
    case 'MCO':
        console.log("Orlando");
        break;
    case 'JFK':
        console.log("Kennedy");
        break;
    case 'SEA':
        console.log("Seattle");
        break;
}

//For loop

for (i=0; i < 3; i++){
    console.log('Numero ', i);
}

//While loop

i = 1;

while(i<= 3){
    console.log('Numero ', i);
    i++;

}

//Do While loop
i = 1;
do {
    console.log('Numero ', i);
    i++;
} while(i <= 3)

//For in Loop

const myCar = {
    model: 'BMW',
    year: 2023
}

for (let i in myCar){
    console.log(i, myCar[i]);
}

//For of Loop

const friend = ['Marcos', 'Ana', 'Jose']

for (let i of friend){
    console.log(i);
}