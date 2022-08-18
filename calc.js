
$(function(){
    //pegar a class do botão 
    $('#calc').click(function(){
        //pegar valor digitado no unput milhas em float e estanciar em milhas
        const milhas = parseFloat($('#milhas').val())
        console.log(milhas)
        const metros = 1609.34 * milhas
        //estanciar em metros a quantidade de milhas digitadas * por 169.34
        console.log(metros)
        //captura  o id e com o .val()joga o retorno no input
        $('#metros').val(metros)
    })
})
