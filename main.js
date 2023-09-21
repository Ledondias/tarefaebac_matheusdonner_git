$(document).ready(function (){

    $('form').on('submit', function (event){
        event.preventDefault()
        
        const choreInput = $('#chore-input').val()

        const addChore = $(`<li><p class="chore-text">${choreInput}</p></li>`)
        $(addChore).appendTo('ul')

        //Evento adicionado para permitir a inserção do "line-through" em um item por vez.
        $('.chore-text').each(function (){
            $(this).click(function (){
                if($(this).css('text-decoration') == 'line-through'){
                    $(this).css('text-decoration', 'none')
                } else {
                    $(this).css('text-decoration', 'line-through')
                }
            })
        })

        $('#chore-input').val('')
    })
})