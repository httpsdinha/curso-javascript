const colors = ['green', 'yellow', 'purple', 'blue', 'red']
const btn = document.getElementById('btn')

// escutar por um evento


btn.addEventListener('click', function() {
    const randomColor = getRandomColor()
    console.log(randomColor)
    // troca o style background para colors
    document.body.style.background = colors[getRandomColor()]

})


function getRandomColor(){
    return Math.floor(Math.random() * colors.length)
}

