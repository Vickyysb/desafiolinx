//referencia o campo e-mail do primeiro formulario
var email = document.getElementById('email')

//referencia o campo e-mail do segundo formulario
var email_friend = document.getElementById('email_friend')

//referencia o campo cpf
var cpf = document.getElementById('cpf')


//executa uma função sempre que for digitado algo no campo e-mail do primeiro formulário
email.onkeyup = (e) => {
    //chama a função de validação de e-mail passando o valor digitado no campo de e-mail do primeiro formulário
    validaEmail(e.target.value)
}

//executa uma função sempre que for digitado algo no campo e-mail do segundo formulário
email_friend.onkeyup = (e) => {
    //chama a função de validação de e-mail passando o valor digitado no campo de e-mail do segundo formulário
    validaEmail(e.target.value)
}

//executa uma função sempre que for digitado algo no campo de cpf
cpf.onkeyup = (e) => {
    validaCPF(e.target.value); 
}

//função para validar e-mail
function validaEmail(value) {
    
    //regex de e-mail padrão
    let regex_email = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

    //testa se o email digitado é equivalente ao padrão do regex
    if(regex_email.test(value)){
        // console.log('email válido')
        return true;
    }else {
        // console.log('email invalido')
        return false;
    }
}

//função para validar cpf
function validaCPF(cpf_value){

    //regex para verificar se existem apenas números e caracteres válidos no cpf
    let valido = /^[\d.-]+$/.test(cpf_value)

    //verifica se o cpf digitado tem o mesmo padrão aceito pelo regex
    if(valido){

        //adiciona um . após ser digitado 3 e 6 números
        if(cpf_value.length == 3 || cpf_value.length == 7) cpf_value += '.'

        //adiciona um - após ser digitado 9 números
        if(cpf_value.length == 11) cpf_value += '-'

        //adiciona o cpf formatado no input do cpf
        cpf.value = cpf_value

    //cpf não tem o padrão aceito pelo regex   
    }else{

        //remove o caractere digitadao que não é permitido
        cpf.value = cpf_value.substring(0,cpf_value.length-1)
    }
}