/* 
 * JavaScript to deplay video playback
 */
document.getElementById('myVideo').addEventListener('ended',myHandler,false);
            function myHandler(e) {
            console.log('ended');
            setTimeout(function(){
                document.getElementById('myVideo').play();
            }, 25000);
        }