$(document).ready(function (){

    $('form').on('submit', function (event){
        event.preventDefault()
        
        const shoreInput = $('#shore-input').val()

        const addShore = $(`<li><p class="shore-text">${shoreInput}</p></li>`)
        $(addShore).appendTo('ul')

        //Evento adicionado para permitir a inserção do "line-through" em um item por vez.
        $('.shore-text').each(function (){
            $(this).click(function (){
                if($(this).css('text-decoration') == 'line-through'){
                    $(this).css('text-decoration', 'none')
                } else {
                    $(this).css('text-decoration', 'line-through')
                }
            })
        })

        $('#shore-input').val('')
    })
})