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
console.log(dis.test("2029") && "2029".length == 2);

const palavraTresLetras = /\w\w\w/;
console.log(palavraTresLetras.test("asd"));
console.log(palavraTresLetras.test("asdf"));


//Operador not ^

const notab = /[^ab]/ 
console.log(notab.test("a"));

//Operador plus +

const qtdDigitos = /\d+/
console.log(qtdDigitos.test("1234"));
console.log(qtdDigitos.test(" "));

//Operador ?

const opcional = /Abacax?i/ //deixa como opcional o char 'x'
console.log(opcional.test("Abacaxi"))
console.log(opcional.test("Abacai"))

