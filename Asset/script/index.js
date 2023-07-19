
    var seconds=0;
    var tens=0;
    var appendSeconds=document.getElementById('seconds');
    var appendtens=document.getElementById('tens');
    let btnStart=document.getElementById('start-btn');
    var btnReset=document.getElementById('reset-btn');
    var btnStop=document.getElementById('stop-btn');
    var interval;

    btnStart.onclick=function(){
        clearInterval(interval);
        interval=setInterval(startTimer,10);
    }

    btnReset.onclick=function(){
        clearInterval(interval);
        tens="00";
        seconds="00";
        appendSeconds.innerHTML=seconds;
        appendtens.innerHTML=tens;
    }

    btnStop.onclick=function(){
        clearInterval(interval);
    }

    const startTimer=function(){

        tens++

        if(tens<=9){
            appendtens.innerHTML="0"+tens;
        }else{
            appendtens.innerHTML=tens;
        }

        if(tens>99){
            seconds++
            appendSeconds.innerHTML="0"+seconds;
            tens=0;
            appendtens.innerHTML="0"+0;
        }

        if(seconds>9){
            appendSeconds.innerHTML=seconds;
        }
    }