const form = document.getElementById('form-agenda');
const listInputTel = [];
let registers = '';
form.addEventListener('submit', function(e){
    e.preventDefault();

    addRegister();
})

//Faltantes 
// organizar por ordem alfabética


//Functions


function addRegister(){
    const inputNomeContato = document.getElementById("input-name");
    const inputTel = document.getElementById("input-tel");
    
    let phoneFormatted = formatPhone(inputTel);

    if(listInputTel.includes(phoneFormatted)){
        alert('O número já existe na lista');
    }else{

    listInputTel.push(phoneFormatted);


    let register = '<tr>';

    register += `<td>${inputNomeContato.value}</td>`;
    register += `<td>${phoneFormatted}</td>`;

    
    registers+=register;
    
    document.getElementById('body-table').innerHTML = registers;
    inputNomeContato.value = '';
    inputTel.value = '';
    }
    

}

function formatPhone(input){

    let value = input.value.replace(/\D/g, "").slice(0, 11); // Limita a 11 números

    if (value.length <= 10) {
        // Formato fixo: (11) 1234-5678
        value = value.replace(/^(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    } else {
        // Formato celular: (11) 91234-5678
        value = value.replace(/^(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
    }

    return input.value = value;
}



