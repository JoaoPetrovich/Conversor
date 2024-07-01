function converter() {
    var metros = parseFloat(document.getElementById("metrosInput").value);


    var centimetros = metros * 100;
    var milimetros = metros * 1000;
    var pes = metros * 3.28084;
    var polegadas = metros * 39.3701;

    //Apresentação dos resultados//

    var resultado = `

    ${centimetros.toFixed(2)}<br><br>

    ${milimetros.toFixed(2)}<br><br>

    ${pes.toFixed(2)}<br><br>

    ${polegadas.toFixed(2)} 

`;

    document.getElementById("resultado").innerHTML = resultado;

}


function limpar() {
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = " ";

    var input = document.getElementById('metrosInput');
    input.value = '';

}