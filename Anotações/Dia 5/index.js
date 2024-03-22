// Hosting: move as funções sempre pra cima
// Function Declaration

function movie() {
    console.log("Teste")
}

movie()


// Function Expression
// A função está associada à uma variavel

const car = function() {
    console.log("tesla")
}

car()

const truck = car

truck()

// Argumentos (a. b)
// Declara menos argumentos: NaH
// Declara mais argumentos: utiliza as declaradas na função

function price(a, b){
    return a + b
}

console.log(price(10,20))

function price1(a,b){
    let total = 0
    for (let value of arguments)
        total += value
    return total
}

console.log(price1(10, 20, 30, 40, 50))

// Associando argumentos constantes nas funções

function carLoan(loan, rate = 2.9, years = 5){
    return (loan * rate / 100 * years) + loan

}

console.log(carLoan(20000))