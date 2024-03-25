
// Crie uma regex que aceite só letra maiúsculas

const letrasMaiusculas = /\w[A-Z]\w[^a-z]/
console.log("APENAS LETRAS MAIUSCULAS:")
console.log(letrasMaiusculas.test("ABCDEG"))
console.log(letrasMaiusculas.test("abcde"))
console.log(letrasMaiusculas.test("ABCdefg"))

// Crie uma regex que só aceite string terminadas com ID

const finalID = /\d+(ID\b)/

console.log("FINAL ID")
console.log(finalID.test("5555ID"))
console.log(finalID.test("4444"))
console.log(finalID.test("44524ID2134"))

// Crie um regex que aceite a seguinte expressão "Marca: NomedaMarca"
// Onde nomeDaMarca pode variar

const nomeDaMarca = /Marca: (Nike|Adidas|Pumas|Asics)/

console.log("NOME DA MARCA")
console.log(nomeDaMarca.test("Marca: Adidas"))
console.log(nomeDaMarca.test("Marca: banana"))

// Crie uma regex que valide endereços de IP
// Ex: 127.0.1.0

const validaIP = /\d{0,3}\.\d{0,3}\.\d{0,3}\.\d{0,3}/
console.log("VALIDAR IP")
console.log(validaIP.test("127.0.0.1"))
console.log(validaIP.test("8.0.0.1"))

// Crie uma regex que valide nome de usuarios no sistema
// Aceita letras de a-z _ e -, numeros de 0-9, minimo de 3 caracteres e maximo de 16

const validaUsuario = /^(?=.{3,16}$)[a-z0-9-_]/
console.log("VALIDA USUARIO")
console.log(validaUsuario.test("matheus_123"))
console.log(validaUsuario.test("amanda.gois"))