// Função que calcula o metro quadrado de um terro
function calcularAreaTerreno ( largura, comprimento )
{
    // Converte os valores para número com ponto flutuante
    largura = parseFloat(largura)
    comprimento = parseFloat(comprimento)

    // Calcula a chamada e seta a quantidade de zero após a vírgula
    var area = largura * comprimento
    area = area.toFixed(1)

    // Retorna os valores calculados
    return area
}

// Realiza a chmada dos valores no browser
var largura = prompt('Largura: (metros)')
var comprimento = prompt('Comprimento: (metros)')

// Seta os valores recebidos da função na variável "area"
var area = calcularAreaTerreno(largura, comprimento)

// Escreve no browser o resultado
document.write('O terreno possui ' + area + ' metros quadrados')