
var alunoAprovado = function(nome, nota)
{
    document.write('Aluno: ' + nome)
    document.write('<br>')
    document.write('Nota: ' + nota)
    document.write('<hr />')
    document.write('Resultado: <b>Aprovado</b>')
}

var alunoReprovado = function(nome, nota)
{
    document.write('Aluno: ' + nome)
    document.write('<br>')
    document.write('Nota: ' + nota)
    document.write('<hr />')
    document.write('Resultado: <b>Reprovado</b>') 
}


function exibirNotas(alunoAprovado, alunoReprovado) 
{
    if (false)
    {
        alunoAprovado('Mateus', 9)
    }
    else
    {
        alunoReprovado('Mateus', 5)
    }
}

exibirNotas(alunoAprovado, alunoReprovado)