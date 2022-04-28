"use strict"

//Mouse Events lecture notes

//TODO: Write a click function using jQuery and make the image with the id of "cat" appear by clicking on the h4
// with the id of "click"

$('.animals').css('visibility', 'hidden')
$('#click').click(function (){
    $('#cat').css('visibility', 'visible')
})


//TODO: Write a double click function to hide el gato by clicking on the h4 with the if of "dblClick"

$('#dblClick').dblclick(function() {
    $('#cat').css('visibility', 'hidden');
})


//TODO: Write an event handler using the .hover function to make the image with the id of "turtle" appear by hovering
// over the div with the id of "hover"

$('#hover').hover(function(){
    $('#turtle').css('visibility', 'visible');
},
    function(){
    $('#turtle').css('visibility', 'hidden');
    })

//Keyboard Events lecture notes

//TODO: Use keydown to change the background of the whole page

// $('*').keydown(function (){
//     $('*').css('color', 'white')
//     $('#background').css('background-image', 'url("https://i.pinimg.com/originals/9c/fc/4c/9cfc4c37f3d447fb4ece4f05e64fa9a9.gif")')
//         .keypress(function () {
//             $('*').css('color', 'black')
//             $('#background').css('background-image', 'none')
//         })
// })


//TODO: Modify the previous snippet of code so that after the background is changed with keydown, the background can
// then be reverted back to normal by using keypress


//TODO: Modify the original snippet of code again so that after the background is changed with keydown, the background can
// then be reverted back to normal by using keyup

$('*').keydown(function (){
    $('*').css('color', 'white')
    $('#background').css('background-image', 'url("https://i.pinimg.com/originals/9c/fc/4c/9cfc4c37f3d447fb4ece4f05e64fa9a9.gif")')
        .keyup(function () {
            $('*').css('color', 'black')
            $('#background').css('background-image', 'none')
        })
})


//TODO: You're given two buttons that can change the h4 tags to red and black. create two more buttons that has the ability
// to enable or disable these two buttons using the .off an .on functions

$('#red').click( function (){
    $('h4').css('color', 'red')
})

$('#black').dblclick( function (){
    $('h4').css('color', 'black')
})

$('#offSwitch').click(function (){
    $('#red').off()
    $('#black').off();
})
$('#onSwitch').click(function (){
    $('#red').on()
    $('#black').on();
})






