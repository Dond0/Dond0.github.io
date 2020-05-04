jQuery(function($){
    "use strict";
    $('.header_slider, .news_slider').slick({
        adaptiveHeight: true,
        autoplay:true,
        arrows:true,
    });
    $('.news_slider').slick({
        autoplay:false,
    });

});
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var btn_2 = document.getElementById("myBtn_2");
var btn_3 = document.getElementById("myBtn_3");
var btn_4 = document.getElementById("myBtn_4");
var btn_5 = document.getElementById("myBtn_5");
var btn_6 = document.getElementById("myBtn_6");
var btn_7 = document.getElementById("myBtn_7");
var btn_8 = document.getElementById("myBtn_8");
var btn_10 = document.getElementById("myBtn_10");
var btn_11 = document.getElementById("myBtn_11");


btn.onclick = function (){
    modal.style.display = "block";

}
btn_2.onclick = function (){
    modal.style.display = "block";

}
btn_3.onclick = function (){
    modal.style.display = "block";

}
btn_4.onclick = function (){
    modal.style.display = "block";

}
btn_5.onclick = function (){
    modal.style.display = "block";

}
btn_6.onclick = function (){
    modal.style.display = "block";

}
btn_7.onclick = function (){
    modal.style.display = "block";

}
btn_8.onclick = function (){
    modal.style.display = "block";

}
btn_10.onclick = function (){
    modal.style.display = "block";

}
btn_11.onclick = function (){
    modal.style.display = "block";

}
span.onclick = function(){
    modal.style.display = "none";
}
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}



