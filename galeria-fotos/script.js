//chamando jquery

$('header button').click(function(e){
    $('form').slideDown();
})

$('#button-cancelar').click(function(e){
    $('form').slideUp();
})

$('form').on('submit', function(e){
    e.preventDefault();
    const newAdressImage = $('#adress-new-image').val();
    const newItem = $('<li style="display:none"></li>');
    $(`<img src="${newAdressImage}"/>`).appendTo(newItem);

    $(`
        <div class="overlay-image-link">
            <a href="${newAdressImage}" target="_blank" >Ver imagem em tamanho real</a>
        </div>`
    ).appendTo(newItem);
    $(newItem).appendTo('ul');
    $(newItem).fadeIn(1000);
    $('#adress-new-image').val('');

})

