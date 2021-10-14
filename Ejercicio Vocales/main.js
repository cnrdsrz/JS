
const form = document.getElementById('myForm')

form.addEventListener('click', event => {

    event.preventDefault()
    const palabra = document.getElementById('texto')
    

    let vocales = 0;
    let consonantes = 0;
    const resultado = [`${vocales} vocales, ${consonantes} consonantes`]

        for(const letra of palabra) {
            if(letra === 'a'|| letra ==='e'|| letra === 'i'|| letra === 'o'|| letra === 'u') {
                resultado.push(vocales++)
            }
            else {
                resultado.push(consonantes++)
            }
        }

    console.log(`La expresión ${palabra} cuenta con ${resultado}`)

})



    


