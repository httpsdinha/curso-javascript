// MarketPlace
// Não pode listar objetos e produto com valor < 20 dol

let productValue = Number(prompt('Enter the product value: '));

if (productValue >= 20) {
    document.getElementById('result').innerHTML = "Approved";
}else{
    document.getElementById('result').innerHTML = "Negado";
}