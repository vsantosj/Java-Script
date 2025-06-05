
const form = document.getElementById("form-deposito");
const nomeBeneficiario = document.getElementById("nome-beneficiario");
let fomrEValido = false;

function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.trim().split(" ");
    return nomeComoArray.length >= 2;
}

form.addEventListener("submit", function(e){
    e.preventDefault(); // não deixa atualizar a pagina ao ser acionado

    const numeroConta = document.getElementById("numero-conta");
    const valorDeposito = document.getElementById("valor-deposito");
    const mensagemSucesso = `Valor de: <b>R$${valorDeposito.value}</b> depositado para o cliente <b>${nomeBeneficiario.value}</b>  na conta <b>${numeroConta.value}</b>`;
    fomrEValido = validaNome(nomeBeneficiario.value);

    if(fomrEValido){
        const containerMensagemSucesso =  document.querySelector(".success-message");
        containerMensagemSucesso.innerHTML= mensagemSucesso;
        containerMensagemSucesso.style.display = "block";

        nomeBeneficiario.value= "";
        numeroConta.value= "";
        valorDeposito.value= "";
    }else{
        nomeBeneficiario.style.border = "1px solid red"
        document.querySelector(".error-message").style.display = "block";               
    }
        
    
})
// pega o tipo de evento ex. keyup
//nomeBeneficiario.addEventListener('change', function(e){
    //console.log(e);
//})



// Assim usuário não precisa completar o formulario para verificar que precisa do nome completo
nomeBeneficiario.addEventListener('keyup', function(e){
    fomrEValido = validaNome(e.target.value); 

        if(!fomrEValido){
        nomeBeneficiario.classList.add("error"); //classe input.error
        document.querySelector(".error-message").style.display = "block";               
    }else{
        nomeBeneficiario.classList.remove("error");
        document.querySelector(".error-message").style.display = "none";

    }
      
})



