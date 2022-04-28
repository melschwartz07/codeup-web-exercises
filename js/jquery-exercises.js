// $(document).ready(function() {
//     alert( 'The DOM has finished loading!' );
// });
// var welcome = $('#welcome').html()
// alert(welcome);
//
// var unorderedList = $('#list-item').html()
// alert(unorderedList);



// $('.codeup').css('background-color', 'red');

// MOUSE ELEMENTS EXERCISES

//Change background of h1 on click
$('.header').css('visibility', 'visible')
$('#click').click(function (){
    $('#example').css('background', 'orange')
})


//Change font size on double click
$('.body').css('visibility', 'visible')
$('#dblclick').dblclick(function() {
    $('#paragraphs').css('font-size', '18px');
})

//Color of the list items will be red when you hover.

// $('.list').css('visibility', 'visible')
$('#hover').hover(function(){
        $('#list-content').css('color', 'red');
    },
    function(){
        $('#list-content').css('color', 'black');
    })
