function update(){
    let bill = Number(document.getElementById('yourBill').value)
    let tipPercent = document.getElementById('tipInput').value
    let split = document.getElementById('splitInput').value

    let tipValue = bill * (tipPercent/100)
    let billtotal = bill + tipValue
    let billEach = billtotal / split

    document.getElementById('tipPercent').innerHTML = tipPercent + ' %0'
    document.getElementById('tipValue').innerHTML = '$ ' + tipValue
    document.getElementById('totalWithTip').innerHTML = '$ ' + billtotal
    document.getElementById('splitValue').innerHTML = split 
    document.getElementById('billEach').innerHTML = billtotal / split

}