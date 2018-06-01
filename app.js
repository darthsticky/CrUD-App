$(document).ready(function(){

    $('.setData').on('click', function(){
        let text = $('.textField').val();
        $('.debug').text(text);
        $('.textField').val('');
        localStorage.setItem('myFormTextData', text);
    });

    $('.textField').on('keyup', function(){
        let text = $('.textField').val();
        $('.debug').text(text);
    });

    $('.getData').on('click', function(){
        let text = $('.textField').val();
        let retrieve = localStorage.getItem('myFormTextData');
        $('.textField').val('');
        $('.debug').text(retrieve);
    });

});