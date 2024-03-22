# Projeto Marketplace - Verificador de Preço

Este é um projeto simples que implementa um verificador de preços em um site de marketplace. O projeto permite que o usuário insira o preço de um produto em uma caixa de texto e, em seguida, o site imprime se o produto está aprovado para listagem com base em um critério específico. Neste caso, o critério é que o preço do produto deve ser superior a 20 dólares para ser listado no marketplace.

## Funcionamento

O projeto é composto por um arquivo HTML, um arquivo JavaScript e um arquivo CSS.

### Arquivo HTML

- **index.html**: Este arquivo HTML contém a estrutura básica da página. Ele inclui um campo de entrada para o usuário digitar o preço do produto e um botão para iniciar a verificação.

### Arquivo JavaScript

- **script.js**: Este arquivo JavaScript contém o código responsável por verificar o preço inserido pelo usuário e imprimir se o produto está aprovado ou não para listagem no marketplace.

### Arquivo CSS

- **style.css**: Este arquivo CSS contém estilos básicos para melhorar a aparência da página.

## Como Usar

1. Abra o arquivo `index.html` em um navegador da web.
2. Insira o preço do produto na caixa de texto.
3. Clique no botão "Verificar Preço".
4. O site imprimirá se o produto está aprovado ou não para listagem no marketplace, com base no critério de preço mínimo.

## Exemplo de Conteúdo do index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verificador de Preço - Marketplace</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Verificador de Preço - Marketplace</h1>
    <input type="number" id="priceInput" placeholder="Digite o preço do produto em dólares">
    <button onclick="verificarPreco()">Verificar Preço</button>
    <p id="resultado"></p>

    <script src="script.js"></script>
</body>
</html>
