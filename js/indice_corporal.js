//Dados da pessoa
var pessoa = prompt('Digite seu nome: ')
var altura = prompt('Digite sua altura em cm (Ex.: 1.75): ')
var quilo = prompt('Digite seu peso em quilograma (Ex.: 65.7): ')

//Conversão dos dados
altura = parseFloat(altura)
quilo = parseFloat(quilo)

//Fómula do indice de massa corporal
var massa = quilo / (altura * 2)
var massa = massa.toFixed(2)

var classificacao = ''

//Estrutura de condição
if (massa < 16)
{
    classificacao =  'baixo peso muito grave'; 
}
else if (massa >= 16 && massa <= 16.99)
{
    classificacao =  'baixo peso grave'; 
}
else if (massa >= 17 && massa <= 18.49)
{
    classificacao =  'baixo peso'; 
}
else if (massa >= 18 && massa <= 24.99)
{
    classificacao =  'peso normal';  
}
else if (massa >= 25 && massa <= 29.99)
{
    classificacao =  'sobrepeso';  
}
else if (massa >=30 && massa <= 34.99)
{
    classificacao =  'obesidade grau I';  
}
else if (massa >=35 && massa <= 39.99)
{
    classificacao =  'obesidade grau II';  
}
else
{
    classificacao =  'obesidade grau III';  
}

document.write(pessoa + ' possui índice de massa corporal igual a ' + massa + ', sendo classificado como '+ classificacao)