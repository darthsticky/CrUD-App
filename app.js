$(document).ready(function(){
// big data structure
var snipObj = {
    data: [],
};
    $('.setData').on('click', function(){
        // When setting data
        var sendSnippet = function () {
            var tempObj = {}; // need an object that will store our snippets
            // Create a tags object later to implement searching by tags.
            var tempArr = [];
            let snipName = $('.textName').val();
            let snippet = $('.textSnip').val();
            tempObj.name = snipName;
            tempObj.codeSnippet = snippet;
            tempArr.push(tempObj);
            snipObj.data.push(tempArr);
        }
        sendSnippet();
        $('.textSnip').val('');
        $('.textName').val('');
        localStorage.setItem('storedSnips', JSON.stringify(snipObj));
    });

    $('.getSnip').on('click', function(){
        $('.snippet').remove();
        $('.noHits').remove();
        let search = $('.searchInput').val();
        if (!search) {
            $('.snippetWrapper').append(`<div class="noHits">You Didn't Search For Anything...</div>`);
        }
        let retrieve = localStorage.getItem('storedSnips');
        let obj = JSON.parse(retrieve); // make data iterable for searching
        let myCheck = false;
        for (var i = 0; i < obj.data.length; i++) {
            let current = obj.data[i][0]; // the actual snippet object created earlier.
            if (current.name === search) {
                let snipCode = current.codeSnippet;
                $('.snippetWrapper').append(`<div class="snippet"><div class="snipName">${current.name}</div><figure><pre><code class="snippet">${snipCode}</code></pre></figure></div>`);
                $('.searchInput').val('');
                myCheck = true;
            }
        }
        if (myCheck === false && search) {
            $('.snippetWrapper').append(`<div class="noHits">No matching snippets...</div>`);
        }
    });

    $(".showAll").on('click', function(){
        $(".snippet").remove();
        let retrieve = localStorage.getItem('storedSnips');
        let obj = JSON.parse(retrieve); // make data iterable for searching
        for (var i = 0; i < obj.data.length; i++) {
            let current = obj.data[i][0]; // the actual snippet object created earlier.
            let snipCode = current.codeSnippet;
            let nameSnip = current.name;
            $('.snippetWrapper').append(`<div class="snippet"><div class="snipName">${nameSnip}</div><figure><pre><code class="snippet">${snipCode}</code></pre></figure></div>`);
        }
    });

});