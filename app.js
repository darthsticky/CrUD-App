$(document).ready(function(){
    $('.submitForm').on('click', function(){
        let text = $('.textField').val();
        $('.debug').text(text);
    });
});