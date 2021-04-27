
function exibirArtigo(id, callbackSucesso, callbackErro)
{
    if(true)
    {
        callbackSucesso('Funções de Callback em JS', 'Funções de callback são novas formas de encapsular funções')
    }
    else
    {
        callbackErro('Erro ao recuperar os dados')
    }
}

var callbackSucesso = function(titulo, descricao)
{
    document.write('<h2>' + titulo + '</h>')
    document.write('<hr />')
    document.write('<p>' + descricao + '<p>')
}

var callbackErro = function(erro)
{
    document.write('<p><b>Erro - 405:</b> ' + erro + '</p>')
}

exibirArtigo(1, callbackSucesso, callbackErro)