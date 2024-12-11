let hr = 0;
let min = 0;
let sec = 0;
let milsec = 0;
let timer = true;
function Start(){
    timer = true;
stopWatch();
}

function Stop(){
 timer = false;   
}

function Reset(){
 timer = false;   
 document.getElementById("hr").innerHTML = "00";
 document.getElementById("min").innerHTML = "00";
 document.getElementById("sec").innerHTML = "00";
 document.getElementById("milsec").innerHTML = "00";
    
}
function stopWatch(){
    if(timer == true){
        milsec = milsec + 1;
        if(milsec == 100){
            sec = sec + 1;
            milsec = 0;
        }
        if(sec == 60){
            min = min +1 ;
            sec = 0;
        }
        if(min == 60){
            hr = hr +1 ;
            min = 0;
        }
        let hrString = hr;
        let minString = min;
        let secString = sec;
        let milsecString = milsec;
        if(hrString < 10){
            hrString = "0" + hrString;
        }
        if(minString < 10){
            minString = "0" + minString;
        }
        if(secString < 10){
            secString = "0" + secString;
        }
        if(milsecString < 10){
            milsecString = "0" + milsecString;
        }
        document.getElementById("hr").innerHTML = hrString;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("sec").innerHTML = secString;
        document.getElementById("milsec").innerHTML = milsecString;
        setTimeout("stopWatch()",10)
    }
}