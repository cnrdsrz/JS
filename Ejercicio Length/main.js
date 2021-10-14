
const myForm = document.getElementById('myForm')
const textContainer = document.getElementById('textContainer')

myForm.addEventListener('submit', event => {

    event.preventDefault()
    const texto = document.getElementById('texto').value
    const len = texto.length
    const li = document.createElement('li')
    

    texto === '' ? window.alert('Debes indicar una expresión valida'): 
    li.appendChild(document.createTextNode(`La cadena ${texto} tiene ${len} caracteres`)),
    textContainer.appendChild(li)
    
    // texto === '' ? window.alert('Debes indicar una expresión valida'):
   //console.log(`La cadena ${texto} tiene ${len} caracteres`)  

   
})
