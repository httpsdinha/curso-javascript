// ADICIONANDO VALORES NA ARRAY
const friends = ['Marcos', 'Ana', 'Marcela']
const num = [1,2,3,4]

console.log(friends)
console.log(num)

const num1 = [7,8,9]

// Adiciona os valores no final da Array
num1.push(10, 11, 12)

// Adiciona os valores no inicio da Array
num1.unshift(1,2,3)

// Adiciona os valores no meio da Array
num1.splice(3, 0, 4, 5, 6)

console.log(num1)


// LOCALIZANDO ITENS NA ARRAY

const num2 = [6, 7, 8, 9]

// Indica onde esta o item na Array
console.log(num2.indexOf(8))

// Indica se é True ou False o tem na Array
console.log(num2.includes(4))


// LOCALIZANDO ITENS DE REFERENCIA NA ARRAY
const movies =[
    {id: 1, movieName: 'Dejavu'},
    {id: 2, movieName: 'Back to the future'},
    {id: 3, movieName: 'The Matrix'}
]
// Find utilizado apenas com função para encontrar item de referencia
console.log(movies.find(function(movie) {
    return movie.movieName == 'The Matrix'
}))



// ARROW FUNCTION

// Find simplificado
console.log(movies.find(movie => movie.movieName == 'The Matrix'))


// REMOVENDO ITENS DA ARRAY

const num3 = [5, 6, 7, 8]

// Tira o ultimo numero da array
const final = num3.pop()

// Tira o primeiro numero da array
const final2 = num3.shift()

// Tira o meio da array
// A partir do index 2, retire 1 numero
const final3 = num3.splice(2, 1)

console.log(num3)
// Qual numero foi retirado
console.log(final)


// ESVAZIANDO UMA ARRAY

let num4 = [5, 6, 7, 8]

num4 = []
num4.length = 0
num4.splice(0, num4.length)

console.log(num4)


// CONCATENAÇÃO DE ARRAY

let numbers = [5, 6, 7, 8]
let letters = ['a', 'b', 'c']

// Adiciona dentro dos numbers as letters
all = numbers.concat(letters)

// Adiciona as escolhidas em outra array
half = all.slice(3, 5)

console.log(all)
console.log(half)


// JOIN ARRAY

let clients = ['Andre', 'Ana', 'Marcela']

console.log(clients)

let clientsJoin = clients.join(' ')

console.log(clientsJoin)

// REVERTENDO ARRAY

// Ordem alfabetica
clients.sort()
console.log(clients)

// Faz o inverso da Array
clients.reverse()
console.log(clients)


// VERIFICANDO ELEMENTOS

const tempLondon = [18, -13, 8, 2, 1, -2]

// Checa todos os valores da Array dentro das condições
const tempPositive = tempLondon.every(function(value1){
    return value1 >= 0 
})
console.log(tempPositive)

// Filtra a Array com as condições
const tempPositive1 = tempLondon.filter(value => value >= 0)
console.log(tempPositive1)


