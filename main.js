const form = document.getElementById('validation-form')
const inputA = document.querySelector('.input-A')
const inputB = document.querySelector('.input-B')
let validResult = true
let equalInputs = true

form.addEventListener('submit', function(event) {
    event.preventDefault()
    
    const successMessage = `O valor <b>${inputB.value}</b> no campo B é maior que <b>${inputA.value}</b> no campo A. Formulário validado com sucesso!`
    const errorMessage = `O valor <b>${inputB.value}</b> no campo B é menor que <b>${inputA.value}</b> no campo A. Formulário inválido!`
    const equalInputsMessage = `O valor <b>${inputB.value}</b> no campo B é igual ao valor <b>${inputA.value}</b> no campo A. Formulário inválido!`

    const successMessageContainer = document.querySelector('.success-message')
    const errorMessageContainer = document.querySelector('.error-message')
    const equalInputsMessageContainer = document.querySelector('.equal-inputs-message')

    validResult = inputA.value < inputB.value
    equalInputs = inputA.value === inputB.value

    if (validResult) {
        successMessageContainer.innerHTML = successMessage
        successMessageContainer.style.display = 'block'

        equalInputsMessageContainer.style.display = 'none'
        errorMessageContainer.style.display = 'none'

        inputA.value = ''
        inputB.value = ''

    } else if (equalInputs) {
        equalInputsMessageContainer.innerHTML = equalInputsMessage
        equalInputsMessageContainer.style.display = 'block'

        successMessageContainer.style.display = 'none'
        errorMessageContainer.style.display = 'none'

        inputA.value = ''
        inputB.value = ''
        
    } else {
        errorMessageContainer.innerHTML = errorMessage
        errorMessageContainer.style.display = 'block'

        successMessageContainer.style.display = 'none'
        equalInputsMessageContainer.style.display = 'none'

        inputA.value = ''
        inputB.value = ''
    }
})