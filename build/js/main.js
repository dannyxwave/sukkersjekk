/*******************************
Declaring variable
********************************/
var rangeInput1 = document.querySelector("#rangeInput1"); /*rVal1*/
var rangeInput2 = document.querySelector("#rangeInput2");/*rVal2*/
var pOutput1 = document.querySelector("#pOutput1"); /*pInput1*/
var pOutput2 = document.querySelector("#pOutput2"); /*pInput2*/
var nAn = true;
/*******************************
Main JS
********************************/
//Runs from oninput change > updates innerHTML
var listener = function(a, b) {
    resetingBtn();
    //requestAnimationFrame makes smoother animation.
    window.requestAnimationFrame(function() {
        b.innerHTML = a.value; // + "g"
    });
};
/*******************************
*Runs listener func on change
********************************/
$("#rangeInput1").on("input change", function() {
    listener(rangeInput1, pOutput1);
});//
/*******************************
*Runs listener func on change
********************************/
$("#rangeInput2").on("input change", function() {
    listener(rangeInput2, pOutput2);
});
/*******************************
*Calculate amount
********************************/
$("#goBtn").click(function() {
    var totSkr = parseInt(rangeInput2.value) / 100 * parseInt(rangeInput1.value);
    var skrBtr = Math.ceil(totSkr / 2.5);
    
    //This enshures no animation on multiple click
    if (nAn === true) {
        $("#goBtn").addClass("goBtnAnimate");
        setTimeout(function() {
            $("#goBtn").text(skrBtr + "x");
            $("#goTxt").text("Antall Sukkerbiter");
            $("#goBtn").removeClass('goBtnAnimate');
        }, 680);//Should be same speed ms than animation. 
        nAn = false;
    }
});
/*******************************
Reseting text and button animation
********************************/
function resetingBtn() {
    $("#goBtn").text("GO");
    $("#goTxt").text("Kalkuler Sukkerbiter");
    nAn = true;
}

<<<<<<< HEAD
/*******************************
SCROLL-BAR VISIBLE FUNCTIONS
********************************/
var mainElement = document.querySelector('main');

if (scrollbarVisible(mainElement) === true) {
    $("header h1").css("fontSize", "1rem");
    $("header h1").css("lineHeight", "1rem");
    $("#btnSection p").css("fontSize", "0.4rem");
    $("#btnSection p").css("marginTop", "0px");
    $("#slider1").css("marginTop", "2px");
    $("#slider2").css("marginTop", "0px");
    /*$("footer").hide();*/
    $("footer p").css("margin", "0");
}//

function scrollbarVisible(element) {
    return element.scrollHeight > element.clientHeight;
}
=======
>>>>>>> ef1a9548faeb50614a27c2780999806106793f93


