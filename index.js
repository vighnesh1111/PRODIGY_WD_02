let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');

let hour = 0;
let minute = 0;
let second = 0;

function op() {

    if (document.getElementById('start').innerHTML == "start") {
        document.getElementById('start').innerHTML = "stop"
        u = 1
    } else if (document.getElementById('start').innerHTML == "stop") {
        document.getElementById('start').innerHTML = "start"
        u = 2
    } else {
        u = 3
    }

    if (u == 1) {
        timer = true
        sw()
    } else if (u == 2) {
        timer = false
    } else if (u == 3) { }
}

function op1() {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    document.getElementById('second').innerHTML = "00";
    document.getElementById('minute').innerHTML = "00";
    document.getElementById('hour').innerHTML = "00";
    document.getElementById('start').innerHTML = "start"
}

function sw() {
    if (timer) {
        second++
        if (second == 60) {
            minute++;
            second = 0;
        }

        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }

        let hr = hour;
        let min = minute;
        let sec = second;

        if (hour < 10) {
            hr = "0" + hr;
        }

        if (minute < 10) {
            min = "0" + min;
        }

        if (second < 10) {
            sec = "0" + sec;
        }

        document.getElementById('second').innerHTML = sec;
        document.getElementById('minute').innerHTML = min;
        document.getElementById('hour').innerHTML = hr;
        setTimeout(sw, 1000);
    }
}

let i = 1;
function lab() {
    const hm = document.getElementById('lab')
    hm.classList.remove("hm")
    document.querySelector('#lab').innerHTML +=
        ` <div class = "task" id="okay">    
            <span id="taskname">
                <li>
                    lab ${i}  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    ${document.querySelector('#hour').innerHTML} :      
                    ${document.querySelector('#minute').innerHTML} :
                    ${document.querySelector('#second').innerHTML} 
                </li>
                <br>
          </span>  
    `;
    i++;
}

function lab1() {
    var divsToRemove = document.getElementsByClassName("task");
    for (var k = 0; k < divsToRemove.length + 1; k++) {
        divsToRemove[k].remove();
    }
    const hm = document.getElementById('lab')
    hm.classList.remove("hm")

    const elem = document.querySelector('.task')
    elem.remove()
    i = 1
}