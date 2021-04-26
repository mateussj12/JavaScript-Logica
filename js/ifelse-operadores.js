
var nota = prompt('Digite a nota do aluno: ')
var faltas = prompt('Digite a qtd de faltas do aluno: ')

var media = 7
var faltas_maximas = 15

if (nota >= media && faltas >= faltas_maximas)
{
	document.write('Aprovado <br>')
}

else
{
	document.write('Reprovado <br>')
}