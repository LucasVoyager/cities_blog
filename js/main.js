$('#telefone').mask('(00) 00000-0000', {placeholder: '(__) _____-____'})

$('form').validate({
    rules: {
        nome:{
            required: true
        },
        email: {
            required: true
        },
        mensagem: {
            required: true
        }
    },
    messages: {
        nome: 'Por favor, insira seu nome',
        email: 'Por favor, insira seu email',
        mensagem: 'Por favor, insira sua mensagem'
    }
})