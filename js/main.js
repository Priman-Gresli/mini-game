const boxElm = document.createElement('div');
boxElm.classList.add('box');
document.body.append(boxElm);
let tanElm;
    tanElm = document.createElement('div');
    tanElm.classList.add('boxtan');
    document.body.append(tanElm);


    setInterval(()=> {
        drawRunTan();
    }, (1000/20));


let jump = false;
let slide = false;
let run = false;
let shoot = false;
let dx = 0;
let k = 1;
let w = 1;
let i = 1;
let s = 1;
let l = 1;
let forward= true;
let manX;
let manY;


document.body.addEventListener('keydown', (eventData)=> {
    if (eventData.code === 'Space'){
        jump = true;

    }else if (eventData.code === 'ArrowRight'){
        run = true;
        forward=true;
        dx = 2;
        console.log(run)
    }else if (eventData.code === 'ArrowLeft'){
        run = true;
        forward=false;
        dx = -2;
    }
    if (eventData.shiftKey){
        slide = true;
        console.log(slide)
    }else{
        slide = false;
        console.log(slide)
    }
});

document.body.addEventListener('keyup', (eventData) => {
    if (eventData.code === 'ArrowRight'){
        run = false;
        dx = 0;
        console.log(run)

    }else if (eventData.code === 'ArrowLeft'){
        run = false;
        dx = 0;

    }
});

document.body.addEventListener('mousedown', (eventData) => {
    shoot=true;
    if (eventData.button === 0){
        if(eventData.clientX>manX){
            forward=true;
        }else{
            forward=false;
        }

    }
});

document.body.addEventListener('mouseup', (eventData) => {
    shoot=false;
    if (eventData.button === 0){
        if(eventData.clientX>manX){
            forward=true;
        }else{
            forward=false;
        }

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

function doRunTan(){
    let xx = tanElm.offsetLeft - 2;
    if (xx+150 < 0) tanElm.style.display=`none`;
    tanElm.style.left = `${xx}px`;
}

function drawIdle(){
    boxElm.style.backgroundImage = `url('img/Idle (${i++}).png')`;
    if(forward){
        boxElm.style.transform=`scaleX(1)`;
    }else{
        boxElm.style.transform=`scaleX(-1)`;
    }
    if(i === 11) i = 1;
    // console.log("idle")
}

function drawSlide(){
    if(forward){
        boxElm.style.transform=`scaleX(1)`;
    }else{
        boxElm.style.transform=`scaleX(-1)`;
    }
    boxElm.style.backgroundImage = `url('img/Slide (${i++}).png')`;
    if(i === 11) i = 1;
    console.log("slide")
}

function drawShoot(){
    if(forward){
        boxElm.style.transform=`scaleX(1)`;
    }else{
        boxElm.style.transform=`scaleX(-1)`;
    }
    boxElm.style.backgroundImage = `url('img/Shoot (${s++}).png')`;
    if(s === 4) s = 1;
    console.log("slide")
}

function drawRun(){
    if(forward){
        boxElm.style.transform=`scaleX(1)`;
    }else{
        boxElm.style.transform=`scaleX(-1)`;
    }
    boxElm.style.backgroundImage = `url('img/Run (${k++}).png')`;
    if(k === 8) k = 1;
    console.log("run");
}

function drawRunTan(){
    console.log("uuuu")
    tanElm.style.backgroundImage = `url('img/jackfree/Run (${w++}).png')`;
    if(w === 8) w = 1;

}

function drawJump(){
    if(forward){
        boxElm.style.transform=`scaleX(1)`;
    }else{
        boxElm.style.transform=`scaleX(-1)`;
    }
    boxElm.style.backgroundImage = `url('img/Jump (${l++}).png')`;
    if(l === 10) l = 1;
    console.log("jump");
}

setInterval(()=> {
    manX=boxElm.offsetLeft
    manY=boxElm.offsetTop

    // console.log(manX)
    // console.log(manY)

    if (run){
        doRun();
    }
    if (jump){
        doJump();
    }
    doRunTan();
}, 5);

setInterval(()=> {
    // drawRunTan();
    if(!run && !jump && shoot){
        drawShoot();
    }
    if(!run && !jump && !shoot){
        drawIdle();
    }
    if(jump && !slide){
        drawJump();
    }
    if(run && !jump && !slide){
        drawRun();
    }
    if(run && !jump && slide){
        drawSlide();
    }
}, (1000/20));







