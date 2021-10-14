
const form = document.getElementById('myForm')
const textContainer = document.getElementById('textContainer')

form.addEventListener('submit', event => {
    event.preventDefault()

    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value 
    const li = document.createElement('li')
    

    num1 === '' || num1 === null || num2 === '' || num2 === null ? console.log('Ingresar datos reales'):
     console.log('Datos válidos')
    
    if(num1 > num2) {
        li.appendChild(document.createTextNode(`${num1} es mayor que ${num2}`))
    }
    else if(num1 < num2) {
        li.appendChild(document.createTextNode(`${num1} es menor a ${num2}`))
    }
    else {
        li.appendChild(document.createTextNode('Los números son iguales')) 
    }   

    textContainer.appendChild(li)

})





