$("div.box1").on( "click", "button", function( event ) {
    $(event.delegateTarget ).css( "background-color", "gray");
});

$("div.box2").on( "click", "button", function( event ) {
    $(event.delegateTarget ).css( "background-color", "gray");
});

$("div.box3").on( "click", "button", function( event ) {
    $(event.delegateTarget ).css( "background-color", "gray");
});


$(document).ready(function(){
    $("button1").click(function(){
    $("div.box1").hide(1000);
    });
});

$(document).ready(function(){
    $("button2").click(function(){
    $("div.box2").hide(1000);
    });
});

$(document).ready(function(){
    $("button3").click(function(){
    $("div.box3").hide(1000);
    });
});


//----Change All------------//
$("div.box1").on( "click", "button5", function( event ) {
    $(event.delegateTarget ).css( "background-color", "gray");
});


//----Hide All------------//

$(document).ready(function(){
    $("button6").click(function(){
    $("body").hide(1000);
    });
});
