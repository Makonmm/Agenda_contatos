const form = document.getElementById("form-agenda");
const estados = [];
const telefones = [];
const nomes = [];

let linhas = '';

form.addEventListener("submit", function(e) {
    e.preventDefault();

    adicionarLinha();
    atualizaTabela();
})


function adicionarLinha(){

const inputNome = document.getElementById("nome-completo");
const inputNumero = document.getElementById("numero");
const inputEstado = document.getElementById("estado");



if (!validarNomeCompleto(inputNome.value)) {
    alert("Por favor, insira um nome completo.");
    return;
}

if (!inputNome.value.match(/^[a-zA-ZÀ-ÿ\s]+$/)) {
    alert("Por favor, insira um nome válido.");
    return;
}

if (!inputNumero.value.match(/^\d+$/)) {
        alert("Por favor, insira um número de telefone válido.");
        return;
}

if (!inputEstado.value.match(/^[a-zA-ZÀ-ÿ\s]+$/)) {
            alert("Por favor, insira um estado válido.");
            return;
}

nomes.push(inputNome.value);
telefones.push(inputNumero.value);
estados.push(inputEstado.value);



let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNumero.value}</td>`;
        linha += `<td>${inputEstado.value}</td>`;
        linha += '</tr>';

    linhas += linha;

    inputNome.value =  '';
    inputNumero.value = '';
    inputEstado.value = '';
}


function validarNomeCompleto(nomeCompleto) {
    
    const nomeSemEspacos = nomeCompleto.trim();
    const partesDoNome = nomeSemEspacos.split(' ');
    return partesDoNome.length >= 2;
}

function atualizaTabela(){
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}