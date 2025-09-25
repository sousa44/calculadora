function calculo(valor) {

    console.log(valor)

    let resultado = document.getElementById("telaResultado");

    resultado.value += valor







    let igual = document.getElementById("igual")

    igual.onclick = function () {
        resultado.value = eval(resultado.value)


       


       

    }




























}

function limpar(valor) {

    if (valor == 'c') {
        document.getElementById('telaResultado').value = ' '

    }


}

