
setInterval(function(){
                if($("#col1").is(":hover")){
                   $('#mainContainer').css("background-image", "url('images/webLg.png')")&&$('#mainContainer').css("background-repeat", "no-repeat")&&$('#mainContainer').css("background-size", "cover")&&$('#mainContainer').css("background-color", "white")&&$('#mainContainer').css("color", "black")&&$('#mainContainer').css("animation", "zoom1 10s linear")&&$('#mainContainer').css("transition", "background-color 1s ease-out");
                }else if($("#col2").is(":hover")){
                    $('#mainContainer').css("background-image", "url('images/vidLg.png')")&&$('#mainContainer').css("background-repeat", "no-repeat")&&$('#mainContainer').css("background-size", "cover")&&$('#mainContainer').css("background-color", "white")&&$('#mainContainer').css("color", "black")&&$('#mainContainer').css("animation", "zoom2 10s linear")&&$('#mainContainer').css("transition", "background-color 1s ease-out");
                }else if($("#col3").is(":hover")){
                    $('#mainContainer').css("background-image", "url('images/hangOverLg.png')")&&$('#mainContainer').css("background-repeat", "no-repeat")&&$('#mainContainer').css("background-size", "cover")&&$('#mainContainer').css("color", "black")&&$('#mainContainer').css("background-color", "white")&&$('#mainContainer').css("animation", "zoom3 10s linear")&&$('#mainContainer').css("transition", "background-color 1s ease-out");
                }else if($("#col4").is(":hover")){
                    $('#mainContainer').css("background-image", "url('images/eLearningLg.png')")&&$('#mainContainer').css("background-repeat", "no-repeat")&&$('#mainContainer').css("background-size", "cover")&&$('#mainContainer').css("background-color", "white")&&$('#mainContainer').css("color", "black")&&$('#mainContainer').css("animation", "zoom4 10s linear")&&$('#mainContainer').css("transition", "background-color 1s ease-out");
                }else {
                   $('#mainContainer').css("background-image", "")&& $('#mainContainer').css("background-color", "")&&$('#mainContainer').css("color", "");
                }
            }, 200);
            

