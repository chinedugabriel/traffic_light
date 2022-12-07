// link all veriable for each component

let redLight = document.getElementById("red");
let yellowLight = document.getElementById("yellow");
let greenLight = document.getElementById("green");

let displayCounter = document.getElementById("time-in-sec");

let inputSetTimer = document.getElementById("input-time-sec");

// BTN
let StartBtn = document.getElementById("Start");

let StopBtn = document.getElementById("Stop");

const motion = ()=>{
    let setNum = inputSetTimer.value != "" ? eval(inputSetTimer.value) : 120;
    // displayCounter.innerHTML = setNum;
    let resetNum = 1;

 let counter = setInterval(()=>{
    // displayCounter--
    displayCounter.innerHTML = setNum--;
    if (setNum == 0){

        if(resetNum == 1){
            redLight.style.backgroundColor = "white";
            yellowLight.style.backgroundColor = "yellow";
            greenLight.style.backgroundColor = "white";
            resetNum++;
        }else if(resetNum == 2){
            redLight.style.backgroundColor = "green";
            yellowLight.style.backgroundColor = "green";
            greenLight.style.backgroundColor = "green";
            resetNum = 0;
            
        }else if(resetNum == 0){
            redLight.style.backgroundColor = "red";
            yellowLight.style.backgroundColor = "white";
            greenLight.style.backgroundColor = "white";
            resetNum++;
            
        }
        setNum = inputSetTimer.value != "" ? eval(inputSetTimer.value) : 120;

    }

    StopBtn.addEventListener('click',()=>{
       clearInterval(counter);
    });

 },1000)


};


StartBtn.addEventListener('click', motion);