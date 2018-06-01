$(document).ready(function(){

    $('.submitForm').on('click', function(){
        let text = $('.textField').val();
        $('.debug').text(text);
        localStorage.setItem('myFormTextData', text);
    });

    $('.textField').on('keyup', function(){
        let text = $('.textField').val();
        $('.debug').text(text);
    });

});