"use strict"

const $container = document.querySelector('.container');
const $cep = document.querySelector('#cepInput');

const fillData = ( $container ) => {

    const cep = JSON.parse(document.getElementById('cep').innerHTML);

    console.log(cep)

    $container.innerHTML = `
        <h1>CEP : ${cep.cep}</h1>
        <hr>
        <h1>RUA : ${cep.logradouro}</h1>
        <hr>
        <h1>CIDADE: ${cep.cidade}</h1>
        <hr>
        <h1>ESTADO: ${cep.estado_info.nome}</h1>
        <hr>
        <h1>BAIRRO: ${cep.bairro}</h1>
    `;
    
}

$cep?.addEventListener('keydown', ( e ) => {
    e.target.value = e.target.value.replace(/[^0-9]/g,'').replace(/(.{5})(.)/,'$1-$2')
})

$cep?.addEventListener('blur', ( e ) => {
    const cep = e.target.value

    if (cep.length === 9 ){
        location.href = `/cep/${cep}`
    } else {
        window.alert("PREENCHA UM CEP REAL")
    }
})

if ($container) fillData($container);
