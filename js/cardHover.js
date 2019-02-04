/* 
 * JQuery to for card hover effect no/reset border
 */
        setInterval(function(){ if($("#col1").is(":hover")||$("#col2").is(":hover")||$("#col3").is(":hover")||$("#col4").is(":hover")) {
            $('#col1, #col2, #col4, #col3').css("border", "none");
            $('.expandImg').css("display","none");
                }
                else {
                   $('#col1, #col2, #col4, #col3').css("border", "");
                    $('.expandImg').css("display","");
                }
            }, 200);

/*  

 setInterval(function(){ if($("#col1a").is(":hover")||$("#col2a").is(":hover")||$("#col3a").is(":hover")||$("#col4a").is(":hover")) {
            $('.expandImga').css("display","none");
                }
                else {
                    $('.expandImga').css("display","");
                }
            }, 200);
*code for video background not currently used
var video = document.getElementById("myVideo");
        var btn = document.getElementById("myBtn");

        function myFunction() {
          if (video.paused) {
            video.play();
            btn.innerHTML = "Pause";
          } else {
            video.pause();
            btn.innerHTML = "Play";
          }
        }
        */
/* 
 * JQuery to for card hover paragraph effect backgroud-color: rgba(255,255,255, 0.8);
 */
setInterval(function(){ 
    if($("#col1").is(":hover")) {
     $('.emptyDiv1').css("background-color", "rgba(255,255,255, 0.8)");
        $('#myBtn').css("display", "inline");
}else{$('.emptyDiv1').css("background-color", "");
     $('#myBtn').css("display", "");}
                      }, 200);
setInterval(function(){ if($("#col2").is(":hover")) {
     $('.emptyDiv2').css("background-color", "rgba(255,255,255, 0.8)");
     $('#myBtn2').css("display", "inline");
}else{$('.emptyDiv2').css("background-color", "");
      $('#myBtn2').css("display", "");}
                      }, 200);
setInterval(function(){ if($("#col3").is(":hover")) {
     $('.emptyDiv3').css("background-color", "rgba(255,255,255, 0.8)");
    $('#myBtn3').css("display", "inline");
}else{$('.emptyDiv3').css("background-color", "");
     $('#myBtn3').css("display", "");}
                      }, 200);
setInterval(function(){ if($("#col4").is(":hover")) {
     $('.emptyDiv4').css("background-color", "rgba(255,255,255, 0.8)");
    $('#myBtn4').css("display", "inline");
}else{$('.emptyDiv4').css("background-color", "");
     $('#myBtn4').css("display", "");}
                      }, 200);
/* 
 *Responsive JQuery to for card hover paragraph effect backgroud-color: rgba(255,255,255, 0.8);
 */
setInterval(function(){ 
    if($("#col1a").is(":hover")) {
           $('#col1a').css("background-color", "white");
     $('.emptyDiv1a').css("background-color", "rgba(255,255,255, 0.8)");
        $('.card1a').css("display", "none");
        $('.card1hovera').css("display", "inline");
        $('#myBtn1a').css("display", "inline");
}else{
    $('.emptyDiv1a').css("background-color", "");
    $('#col1a').css("background-color", "");
     $('.card1a').css("display", "");
    $('.card1hovera').css("display", "none");
    $('#myBtn1a').css("display", "");
}
                      }, 200);
setInterval(function(){ if($("#col2a").is(":hover")) {
      $('#col2a').css("background-color", "white");
     $('.emptyDiv2a').css("background-color", "rgba(255,255,255, 0.8)");
      $('.card2a').css("display", "none");
        $('.card2hovera').css("display", "inline");
    $('#myBtn2a').css("display", "inline");
}else{$('.emptyDiv2a').css("background-color", "");
       $('#col2a').css("background-color", "");
      $('.card2a').css("display", "");
    $('.card2hovera').css("display", "none");
      $('#myBtn2a').css("display", "");
     }
                      }, 200);
setInterval(function(){ if($("#col3a").is(":hover")) {
      $('#col3a').css("background-color", "white");
     $('.emptyDiv3a').css("background-color", "rgba(255,255,255, 0.8)");
      $('.card3a').css("display", "none");
        $('.card3hovera').css("display", "inline");
    $('#myBtn3a').css("display", "inline");
}else{$('.emptyDiv3a').css("background-color", "");
       $('#col3a').css("background-color", "");
     $('.card3a').css("display", "");
    $('.card3hovera').css("display", "none");
     $('#myBtn3a').css("display", "");}
                      }, 200);
setInterval(function(){ if($("#col4a").is(":hover")) {
      $('#col4a').css("background-color", "white");
     $('.emptyDiv4a').css("background-color", "rgba(255,255,255, 0.8)");
      $('.card4a').css("display", "none");
        $('.card4hovera').css("display", "inline");
    $('#myBtn4a').css("display", "inline");
}else{$('.emptyDiv4a').css("background-color", "");
       $('#col4a').css("background-color", "");
     $('.card4a').css("display", "");
    $('.card4hovera').css("display", "none");
     $('#myBtn4a').css("display", "");}
                      }, 200);
/* 
 * JQuery to for card hover paragraph effect 
 */
 setInterval(function(){ if($("#col1").is(":hover")||$("#col2").is(":hover")||$("#col3").is(":hover")||$("#col4").is(":hover")) {
                     $('p.card1').css("font-size", "0.7em");
                     $('p.card1').css("color", "black");
       $('p.card1').css("font-family", "Arial");
      $('p.card1').css("padding-left", "7%");
      $('p.card2').css("font-size", "0.7em");
                     $('p.card2').css("color", "black");
       $('p.card2').css("font-family", "Arial");
      $('p.card2').css("padding-left", "7%");
      $('p.card3').css("font-size", "0.7em");
                     $('p.card3').css("color", "black");
       $('p.card3').css("font-family", "Arial");
      $('p.card3').css("padding-left", "7%");
      $('p.card4').css("font-size", "0.7em");
                     $('p.card4').css("color", "black");
       $('p.card4').css("font-family", "Arial");
      $('p.card4').css("padding-left", "7%");
                }
                else {
                     $('h2').css("background-color", "");
                   $('p.card1').css("font-size", "");
                     $('p.card1').css("color", "");
                     $('p.card1').css("background-color", "");
                    $('p.card1').css("font-family", "");
                     $('p.card1').css("padding-left", "");
                    $('p.card2').css("font-size", "");
                     $('p.card2').css("color", "");
                     $('p.card2').css("background-color", "");
                    $('p.card2').css("font-family", "");
                     $('p.card2').css("padding-left", "");
                    $('p.card3').css("font-size", "");
                     $('p.card3').css("color", "");
                     $('p.card3').css("background-color", "");
                    $('p.card3').css("font-family", "");
                     $('p.card3').css("padding-left", "");
                      $('p.card4').css("font-size", "");
                     $('p.card4').css("color", "");
                     $('p.card4').css("background-color", "");
                    $('p.card4').css("font-family", "");
                     $('p.card4').css("padding-left", "");
                    $('.emptyDiv1').css("background-color", "");
                    $('.emptyDiv2').css("background-color", "");
                    $('.emptyDiv3').css("background-color", "");
                    $('.emptyDiv4').css("background-color", "");
                }
            }, 200);

  setInterval(function(){ 
    if($("#col1").is(":hover")) {
        $('p.card2').css("display", "none");
        $('p.card3').css("display", "none");
         $('p.card4').css("display", "none");
        $('p.card1').css("display", "none");
        $('p.card1hover').css("display", "block");
         $('p.card2hover').css("display", "none");
        $('p.card3hover').css("display", "none");
        $('p.card4hover').css("display", "none");
                }
                else  if($("#col2").is(":hover")) {
        $('p.card1hover').css("display", "none");
        $('p.card1').css("display", "none");
        $('p.card3').css("display", "none");
         $('p.card4').css("display", "none");
                    $('p.card2').css("display", "none");
                     $('p.card2hover').css("display", "block");
                       $('p.card1hover').css("display", "none");
        $('p.card3hover').css("display", "none");
        $('p.card4hover').css("display", "none");
                }else  if($("#col3").is(":hover")) {
         $('p.card2hover').css("display", "none");
        $('p.card1').css("display", "none");
        $('p.card2').css("display", "none");
         $('p.card4').css("display", "none");
                    $('p.card3').css("display", "none");
                     $('p.card3hover').css("display", "block");
                       $('p.card2hover').css("display", "none");
        $('p.card1hover').css("display", "none");
        $('p.card4hover').css("display", "none");
                }else  if($("#col4").is(":hover")) {
                     $('p.card3hover').css("display", "none");
        $('p.card1').css("display", "none");
        $('p.card3').css("display", "none");
         $('p.card2').css("display", "none");
                    $('p.card4').css("display", "none");
                     $('p.card4hover').css("display", "block");
                       $('p.card2hover').css("display", "none");
        $('p.card3hover').css("display", "none");
        $('p.card1hover').css("display", "none");
                }else{
                     $('p.card1hover').css("display", "none");
                     $('p.card2hover').css("display", "none");
                     $('p.card3hover').css("display", "none");
                     $('p.card4hover').css("display", "none");
                    $('p.card1').css("display", "");
                   $('p.card2').css("display", "");
                    $('p.card3').css("display", "");
                    $('p.card4').css("display", "");
                }
            }, 200);