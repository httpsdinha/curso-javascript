const colors = ['green', 'yellow', 'purple', 'blue', 'red']
const btn = document.getElementById('btn')

// escutar por um evento
btn.addEventListener('click', function() {
    // troca o style background para colors
    document.body.style.background = colors[2]
    
})