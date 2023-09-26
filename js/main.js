$(document).ready(function (){
    $('#tel-input').mask('(00) 00000-0000')
    $('#cpf-input').mask('000.000.000-00')
    $('#cep-input').mask('00000-000')

    $('form').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true
            },
            tel: {
                required: true
            },
            cpf: {
                required: true
            },
            address: {
                required: false
            },
            cep: {
                required: true
            }
        },
        messages: {
            name: 'Por favor, insira seu nome para continuar o cadastro.',
            email: 'Por favor, insira seu endereço de email para continuar o cadastro.',
            tel: 'Por favor, insira seu número de telefone para continuar o cadastro.',
            cpf: 'Por favor, insira seu CPF para continuar o cadastro.',
            cep: 'Por favor, insira seu CEP para continuar o cadastro.'
        },
        submitHandler: function(form) {
            console.log(form)
            $('#name-input').val('')
            $('#email-input').val('')
            $('#tel-input').val('')
            $('#cpf-input').val('')
            $('#complete-address-input').val('')
            $('#cep-input').val('')
        },
        invalidHandler: function(event, validator) {
            let incorrectInputs = validator.numberOfInvalids()
            console.log(incorrectInputs)

            if(incorrectInputs){
                alert(`Existem ${incorrectInputs} campos incorretos ou não preenchidos!`)
            }
        }
    })
})