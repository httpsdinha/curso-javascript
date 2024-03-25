const reg1 = new RegExp('bola');

console.log(reg1.test("tem bola?"));
console.log(reg1.test("Não tem"));

const reg2 = /bola/;

let text = 'Tem bola na cesta';

console.log(reg2.test("tem bola?"));
console.log(reg2.test("Não tem"));
console.log(reg2.test(text));

console.log(/quadrado/.test("Onde tem um quadrado"));


//Conjunto de caracteres

const reg3 = /[12345]/;
console.log(reg3.test("Temos o numero 12345"));

const reg4 = /[0-9]/;
console.log(reg4.test("temos o numero 65"));

//Caracteres Especiais

const pontoRegex = /./ //aceita qualquer coisa dentro das ""
console.log(pontoRegex.test("asd"));

const dRegex = /\d/ //aceita todos os digitos 
console.log(dRegex.test("123"));

const dRegex2 = /\D/ //aceita os que tiverem caracteres
console.log(dRegex2.test("123asda"));

const sRegex = /\s/; //aceita espaços vazios
console.log(sRegex.test(" "));

const wRegex = /\w/; //aceita caracteres alfa-numericos
console.log(wRegex.test("adad13"));

const dia = /\d\d/ //verifica se tem dois digitos
console.log(dia.test("05"));
console.log(dia.test("2029") && "2029".length == 2);

const palavraTresLetras = /\w\w\w/;
console.log(palavraTresLetras.test("asd"));
console.log(palavraTresLetras.test("asdf"));


//Operador not ^
console.log("OPERADOR NOT")
const notab = /[^ab]/ 
console.log(notab.test("a"));

//Operador plus +
console.log("OPERADOR PLUS")
const qtdDigitos = /\d+/
console.log(qtdDigitos.test("1234"));
console.log(qtdDigitos.test(" "));

//Operador ?
console.log("OPERADOR ?")
const opcional = /Abacax?i/ //deixa como opcional o char 'x'
console.log(opcional.test("Abacaxi"))
console.log(opcional.test("Abacai"))

//Ocorrencia precisa
console.log("OCORRENCIA PRECISA")

const cep = /\d{5}-\d{3}/
console.log(cep.test("88117-500"))
console.log(cep.test("asd"))

//Método exec
console.log("Método Exec")

const digitos = /\d+/ // retorna o objeto
console.log(digitos.exec("Tem o numero 100 aqui"))

//Método Match

const frase = "O numero 100 esta aqui".match(/\d+/)
console.log(frase)

//Choice pattern

const frutas = /\d+ (bananas|maçãs|laranjas)/

console.log(frutas.test("10 bananas"))
console.log(frutas.test("25 batatas"))
console.log(frutas.test("8 laranjas"))


//VALIDA DOMINIO
console.log("VALIDA DOMINIO")
const validaDominio = /www. \w+\.com.br |.com/
console.log(validaDominio.test("www.google.com"))
console.log(validaDominio.test("www.horadecodar"))

// VALIDANDO EMAIL

console.log("VALIDA EMAIL")
const validaEmail = /\w+@\w+\.\w+/
console.log(validaEmail.test("amandabalcacar@gmail.com"))
console.log(validaEmail.test("gmail.com"))

// VALIDANDO DATA DE NASCIMENTO

console.log("VALIDA DATA DE NASCIMENTNO")
const validaDatadeNascimento = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/
console.log(validaDatadeNascimento.test("22/08/2004"))
console.log(validaDatadeNascimento.test("4/99/3424"))