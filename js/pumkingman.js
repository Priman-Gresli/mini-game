class Pumkingman {
    tanElm = document.createElement('div');
    dead=false;
    speed=Math.round(Math.random()*10)+7
    // speed=;
    w = 1;
    x;
    y;
    xxx;

    constructor() {
        this.tanElm.style.position = `absolute`
        this.tanElm.style.width = `${130}px`
        this.tanElm.style.height = `${180}px`
        this.tanElm.style.margin = `${0}`
        this.tanElm.style.padding = `${0}`
        this.tanElm.style.bottom = `${24}vh`
        this.tanElm.style.left = `${110}%`
        this.tanElm.style.backgroundSize = `cover`
        this.tanElm.style.backgroundRepeat = `no-repeat`
        // this.tanElm.style.transform = `translate(${-50}%,${-50}%)`
        this.tanElm.style.transform = `scaleX(${-1})`
        this.tanElm.style.zIndex = `${5}`
        this.tanElm.style.backgroundImage = `url('img/jackfree/Run (1).png')`;
        // this.tanElm.style.backgroundColor = `red`;
        document.body.append(this.tanElm)
        const xxx = this.tanElm.offsetLeft
    }
    move(){
        let xx = this.tanElm.offsetLeft - this.speed;
        // console.log(xx)
        if (xx< -100) {
            if (dead){
                this.tanElm.style.display=`none`;
                // clearInterval(runPunkTime)
            }
            this.tanElm.style.left = `${110}%`
            let xx = `${100}vw`;
            return;
        }
        this.tanElm.style.left = `${xx}px`;
        this.tanElm.style.backgroundImage = `url('img/jackfree/Run (${this.w++}).png')`;
        if(this.w === 8) this.w = 1;
        this.x=this.tanElm.offsetLeft
        this.y=this.tanElm.offsetHeight;

        console.log("pumpY: ",manY-this.y)
        // console.log("pumpX: ",this.x-manX,dead)
        // (this.x-manX<10 && this.x-manX>-10 )
        if( (manY-this.y<=340 && manY-this.y>200) && ( this.x-manX<65 && this.x-manX>-135 ) &&!dead){
            console.log("dead :",this.x-manX)
            console.log("dead :",manY-this.y)
            dead=true;
        }
    }

}
const array=[]
createPumkTime=setInterval(()=>{
    array.push(new Pumkingman())
    if (array.length === 2) {
        clearInterval(createPumkTime)
    }
    console.log("000--",array.length)
},5000)

runPunkTime=setInterval(()=> {

    array.forEach(pumking=>{
        pumking.move()
    });
}, 1000/20);
