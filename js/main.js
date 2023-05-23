const boxElm = document.createElement('div');
const scoreElm = document.createElement('h1');
scoreElm.classList.add("purples")
scoreElm.innerText="SCORE : 0"
boxElm.classList.add('box');
document.body.append(boxElm);
document.body.append(scoreElm);

let jump = false;
let jumpdone = true;
let dead = false;
let slide = false;
let run = false;
let isShoot = false;
let shoot = false;
let dx = 0;
let k = 1;
let d = 1;
let i = 1;
let s = 1;
let l = 1;
let forward= true;
let manX;
let manY;

let score=0;
document.body.addEventListener('keydown', (eventData)=> {
    if (eventData.code === 'Space'){
        jump = true;

    }else if (eventData.code === 'ArrowRight'){
        run = true;
        forward=true;
        dx = 2;
        // console.log(run)
    }else if (eventData.code === 'ArrowLeft'){
        run = true;
        forward=false;
        dx = -2;
    }
    if (eventData.shiftKey){
        slide = true;
        // console.log(slide)
    }else{
        slide = false;
        // console.log(slide)
    }
});

document.body.addEventListener('keyup', (eventData) => {
    if (eventData.code === 'ArrowRight'){
        run = false;
        dx = 0;
        // console.log(run)

    }else if (eventData.code === 'ArrowLeft'){
        run = false;
        dx = 0;

    }
});

document.body.addEventListener('mousedown', (eventData) => {
    shoot=true;
    // console.log("shoot1=",shoot)
    if (eventData.button === 0){
        if(eventData.clientX>manX){
            forward=true;
        }else{
            forward=false;
        }

    }
});

document.body.addEventListener('mouseup', (eventData) => {
    if (eventData.button === 0){
        // shoot=false;
        // console.log("shoot2=",shoot)
        isShoot = true;
        // console.log("isShoot1=",isShoot)
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
    y *= 4;
    boxElm.style.top = (boxElm.offsetTop - y) + "px";
    angle++;
    if (angle >  180){
        jump = false;
        angle = 0;
        jumpdone=true;
    }
}

function doRun(){
    let x = boxElm.offsetLeft + dx;
    if ((x + boxElm.offsetWidth)> innerWidth) {
        x = innerWidth - boxElm.offsetWidth;
    }else if (x <= 0) x = 0;
    boxElm.style.left = `${x}px`;
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
    // console.log("slide")
}
function drawDead(){
    if(forward){
        boxElm.style.transform=`scaleX(1)`;
    }else{
        boxElm.style.transform=`scaleX(-1)`;
    }
    boxElm.style.backgroundImage = `url('img/Dead (${d++}).png')`;
    if(d === 10) {
        d = 1;
        clearInterval(intervalAlive)
        // clearInterval(runPunkTime)
        clearInterval(createPumkTime)
        clearInterval(intervalMove)
    }
    // console.log("dead:",d)
}

function drawShoot(){
    if(forward){
        boxElm.style.transform=`scaleX(1)`;
    }else{
        boxElm.style.transform=`scaleX(-1)`;
    }
    boxElm.style.backgroundImage = `url('img/Melee (${s++}).png')`;
    if(s === 8) {
        s = 1;
        shoot=false
        // console.log("shoot2=",shoot)
        isShoot = false;
        // console.log("isShoot2=",isShoot)
    }
    // console.log("slide")
}

function drawRun(){
    if(forward){
        boxElm.style.transform=`scaleX(1)`;
    }else{
        boxElm.style.transform=`scaleX(-1)`;
    }
    boxElm.style.backgroundImage = `url('img/Run (${k++}).png')`;
    if(k === 8) k = 1;
    // console.log("run");
}

function drawJump(){
    if(forward){
        boxElm.style.transform=`scaleX(1)`;
    }else{
        boxElm.style.transform=`scaleX(-1)`;
    }
    boxElm.style.backgroundImage = `url('img/Jump (${l++}).png')`;
    if(l === 10) l = 1;
    // console.log("jump");
}

intervalMove=setInterval(()=> {
    manX=boxElm.offsetLeft
    manY=boxElm.offsetTop
    // console.log("MAn: ",manX,manY,innerHeight)
    if (run){
        doRun();
    }
    if (jump){
        doJump();
    }
}, 5);

intervalAlive=setInterval(()=> {

    if(!run && !jump && shoot && !dead){
        drawShoot();
    }
    if(!run && !jump && !shoot && !dead){
        drawIdle();
    }
    if(jump && !slide && !dead){
        jumpdone=false;
        drawJump();
    }
    if(run && !jump && !slide && !dead){
        drawRun();
    }
    if(run && !jump && slide && !dead){
        drawSlide();
    }if(dead && jumpdone){
        drawDead();
    }
}, (1000/20));













