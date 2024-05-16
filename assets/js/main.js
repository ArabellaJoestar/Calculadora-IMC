function IMC() {
    var inputAltura = Number(document.getElementById('altura').value);
    var inputPeso = Number(document.getElementById('peso').value);
    var resultado = inputPeso / inputAltura ** 2;

    resultado = resultado.toFixed(2)
    if (resultado < 18.5) {
        document.getElementById('resultadoIMC').innerHTML = `Você está Abaixo do peso</br>Seu IMC é de: ${resultado.toString().replace(".",",")}`;
    } else if (resultado >= 18.5 && resultado <= 24.9) {
        document.getElementById('resultadoIMC').innerHTML = `Peso Normal</br>Seu IMC é de: ${resultado.toString().replace(".",",")}`
    } else if (resultado >= 25 && resultado <= 29) {
        document.getElementById('resultadoIMC').innerHTML = `Sobrepeso</br>Seu IMC é de: ${resultado.toString().replace(".",",")}`
    } else if (resultado >= 30 && resultado <= 34.9) {
        document.getElementById('resultadoIMC').innerHTML = `Obesidade Grau 1</br>Seu IMC é de: ${resultado.toString().replace(".",",")}`
    } else if (resultado >= 35 && resultado <= 35.9) {
        document.getElementById('resultadoIMC').innerHTML = `Obesidade Grau 2</br>Seu IMC é de: ${resultado.toString().replace(".",",")}`
    } else if (resultado > 40) {
        document.getElementById('resultadoIMC').innerHTML = `Obesidade Grau 3</br>Seu IMC é de: ${resultado.toString().replace(".",",")}`
    }}
