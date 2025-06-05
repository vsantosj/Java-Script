const form = document.getElementById('form-atividade');
const iconAprovado = '<img src="src/aprovado.png" alt="emogi festejando">';
const iconReprovado = '<img src="src/reprovado.png" alt="emogi festejando">'
const atividades = [];
const notas = [];
const spanAprovado = '<span class="result aprovado"> Aprovado</span>';
const spanReprovado = '<span class="result reprovado"> reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota minima"));

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    addLine();
    updateTable();
    updateMedia();
    
});

function addLine(){

    const InputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById("nota-atividade");

    //não deixar duplicar atividade
    if(atividades.includes(InputNomeAtividade.value)){
        alert(`A atividade ${InputNomeAtividade.value} já foi inserida`);
    }else{
        atividades.push(InputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
        
        let linha = '<tr>';
        //coluna
        linha+= `<td>${InputNomeAtividade.value}</td>`;
        //segunda coluna
        linha+= `<td>${inputNotaAtividade.value}</td>`;
        // coluna resultado
        linha+= `<td>${inputNotaAtividade.value >= notaMinima ? iconAprovado : iconReprovado}</td>`;

        linhas+=linha;
}  

    inputNotaAtividade.value = '';
    InputNomeAtividade.value ='';


}


function updateTable(){
    const bodyTable = document.querySelector('tbody');
    bodyTable.innerHTML = linhas;

}



function updateMedia(){
    const mediaFinal = calculaMedia().toFixed(1);
    
    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= 7 ? spanAprovado: spanReprovado;
    
}

function calculaMedia(){
    let somaNotas = 0;
    let i = 0;

    while (i < notas.length){
        somaNotas+=notas[i];
        i++;
    }
    

   return somaNotas / notas.length;
}


