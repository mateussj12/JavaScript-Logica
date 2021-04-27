
var operacao = prompt('Digite a operaçã (Soma ou Subtracao): ')
var numero1 = prompt('Digite o primeiro número: ')
var numero2 = prompt('Digite o segundo número: ')

function calcular(operacao, numero1, numero2)
{
    numero1 = parseFloat(numero1)
    numero2 = parseFloat(numero2)

    if(operacao == 'soma')
    {
        var resultado = numero1 + numero2
        resultado = resultado.toFixed(1)
    }
    else if (operacao == 'subtracao')
    {
        var resultado = numero1 - numero2
        resultado = resultado.toFixed(1)
    }
    else
    {
        var resultado = document.write('Operação inválida, por favor repita! ')
    }

    return resultado
}

var calculo = calcular(operacao, numero1, numero2)

document.write('O resultado é: ' + calculo)