//----Change boxes------------//

$(".changeBtn1").click(function(){
    console.log("click is working Btn 1")

    $(".firstDiv").addClass("firstDivNew")
});

$(".changeBtn2").click(function(){
    console.log("click is working Btn 2")

    $(".secondDiv").css("background", "yellow");
    $(".secondDiv").css("border-color", "blue");
    
});

$(".changeBtn3").click(function(){
    console.log("click is working Btn 3")

    $(".thirdDiv").css("background", "purple");
    $(".thirdDiv").css("border-color", "limegreen");
});


$(".changeAllBtn").click(function(){
    
    $(".firstDiv").addClass("firstDivNew");
    $(".secondDiv").css("background", "yellow");
    $(".secondDiv").css("border-color", "blue");   
    $(".thirdDiv").css("background", "purple");
    $(".thirdDiv").css("border-color", "limegreen");
});


//----Hide boxes------------//

$(document).ready(function(){
    $(".hideBtn1").click(function(){
    $(".firstDiv").hide(1000);
    });
});

$(document).ready(function(){
    $(".hideBtn2").click(function(){
    $(".secondDiv").hide(1000);
    });
});

$(document).ready(function(){
    $(".hideBtn3").click(function(){
    $(".thirdDiv").hide(1000);
    });
});

$(document).ready(function(){
    $(".hideAllBtn").click(function(){
    $(".firstDiv, .secondDiv, .thirdDiv").hide(1000);
    });
});

//----Reset Colors------------//

$(document).ready(function(){
    $(".resetColors").click(function(){
    $(".firstDiv").css("background", "red");
    $(".firstDiv").css("border-color", "black");
    $(".secondDiv").css("background", "blue");
    $(".secondDiv").css("border-color", "yellow");   
    $(".thirdDiv").css("background", "limegreen");
    $(".thirdDiv").css("border-color", "purple");
    });
});


//----Show All boxes------------//

$(document).ready(function(){
    $(".showAllBoxes").click(function(){
    $(".firstDiv, .secondDiv, .thirdDiv").show(1000);
    });
});