$('input').focus();

$('form').on('submit',function(e){
    e.preventDefault();

    const valueInput = $('input').val();
    const newTask = $(`<li></li>`);

    $(`<div class="item"
        <p>${valueInput}</p>
        </div>`).appendTo(newTask);

    $(newTask).appendTo('ol');
    $('input').val('');
})

$('ol').on('click', 'li',function(){
    $(this).toggleClass('tachar');
});