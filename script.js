'use sctrict';

async function pegarDadosCep(cep) {
    let url = `https://brasilapi.com.br/api/cep/v1/${cep}`;

    let response = await fetch(url);
    let data = await response.json();
    return data;
}

async function preencherFormulario() {
    let cep = document.getElementById('cep').value;
    let dadosCep = await pegarDadosCep(cep);
    console.log(await dadosCep);

    if (dadosCep.street != undefined && dadosCep.neighborhood != undefined && dadosCep.city != undefined && dadosCep.state != undefined) {
        document.getElementById('endereco').value = dadosCep.street;
        document.getElementById('bairro').value = dadosCep.neighborhood;
        document.getElementById('cidade').value = dadosCep.city;
        document.getElementById('estado').value = dadosCep.state;
    };
}

document.getElementById('cep').addEventListener('focusout', preencherFormulario);