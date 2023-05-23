
deadTime=setInterval(()=>{
    if (dead){
        console.log("dead dead dead")
        clearInterval(deadTime)
        setTimeout(()=>{

            gameOver();
        },2000)

    }
},2)
let reloadGame=document.getElementById('aa');
function gameOver(){
    const gameOverElm=document.createElement('div');

    reloadGame.innerText="Relaod Game"
    reloadGame.style.position="absolute"
    reloadGame.style.top = `${78}%`
    reloadGame.style.left = `${50}%`
    reloadGame.style.display="inline-block"
    reloadGame.style.transform = `translate(${-50}%,${-100}%)`

    gameOverElm.append(reloadGame);
    gameOverElm.style.backgroundImage = `url('img/OVER.png')`;
    gameOverElm.style.position = `absolute`
    gameOverElm.style.width = `${700}px`
    gameOverElm.style.height = `${700}px`
    gameOverElm.style.margin = `${0}`
    gameOverElm.style.padding = `${0}`
    gameOverElm.style.top = `${32}%`
    gameOverElm.style.left = `${50}%`
    gameOverElm.style.backgroundSize = `cover`
    gameOverElm.style.backgroundRepeat = `no-repeat`
    gameOverElm.style.transform = `translate(${-50}%,${-50}%)`
    // gameOverElm.style.transform = `scaleX(${-1})`
    gameOverElm.style.zIndex = `${500}`
    // gameOverElm.style.backgroundColor = `red`;
    document.body.append(gameOverElm)
    // document.body.append(reloadGame)
}


// Add an event listener to the button
reloadGame.addEventListener('click', function() {
    // Reload the page
    location.reload();
});
