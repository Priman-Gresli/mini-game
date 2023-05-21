const boxElm = document.createElement('div');

boxElm.classList.add('box');

document.body.append(boxElm);




let jump = false;

let run = false;

let dx = 0;




document.body.addEventListener('keydown', (eventData)=> {

    if (eventData.code === 'Space'){

        jump = true;

    }else if (eventData.code === 'ArrowRight'){

        run = true;

        dx = 2;

    }else if (eventData.code === 'ArrowLeft'){

        run = true;

        dx = -2;

    }

});




document.body.addEventListener('keyup', (eventData) => {

    if (eventData.code === 'ArrowRight'){

        run = false;

        dx = 0;

    }else if (eventData.code === 'ArrowLeft'){

        run = false;

        dx = 0;

    }

});




let angle = 0;

function doJump(){

    let y  = Math.cos(angle * (Math.PI / 180));

    y *= 3;

    boxElm.style.top = (boxElm.offsetTop - y) + "px";

    angle++;

    if (angle >  180){

        jump = false;

        angle = 0;

    }

}




function doRun(){

    let x = boxElm.offsetLeft + dx;

    if ((x + boxElm.offsetWidth)> innerWidth) {

        x = innerWidth - boxElm.offsetWidth;

    }else if (x <= 0) x = 0;

    boxElm.style.left = `${x}px`;

}




let i = 1;

function drawIdle(){

    boxElm.style.backgroundImage = `url('img/Idle (${i++}).png')`;

    if(i === 11) i = 1;

}




setInterval(()=> {

    if (jump){

        doJump();

    }

    if (run){

        doRun();

    }

}, 5);




setInterval(()=> drawIdle(), (1000/20));