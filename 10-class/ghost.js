console.log('start')
const canvas = document.getElementById('ghost')
const ctx = canvas.getContext('2d')
const cWidth = canvas.width;
const cHeight = canvas.height;
//console.log(canvas)

const imgFolder = 'images/'

const bgImg = new Image()
bgImg.src = imgFolder + 'map01_preview-01.png';

let gameFrame = 0

let mouse = {
    x: cWidth / 2,
    y: cHeight / 2
}

canvas.addEventListener('mousemove', function(event){
    //console.log(event)
    let c = canvas.getBoundingClientRect();
    mouse.x = event.clientX - c.left
    mouse.y = event.clientY - c.top
});

class Player {
    static heroImg = new Image()
    static runLeftImg = new Image()
    static runRightImg = new Image()

    static loadImages(){
         Player.heroImg.src = imgFolder + 'idle_hero.png'
         Player.runLeftImg.src = imgFolder + 'run_left.png'
         Player.runRightImg.src = imgFolder + 'run_right.png'
    }

    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
        this.heroMaxFrame = 17
        this.runMaxFrame = 8
        this.xFrame = 0
        this.sWidth = 43
        this.sHeight = 50
        this.takt = 7
        this.speed = 1

    }
    drawImg(img, maxFrame){
         console.log(mouse, this.xFrame)
        ctx.drawImage(
            img,
            this.sWidth * this.xFrame,
            0,
            this.sWidth,
            this.sHeight,
            this.x,
            this.y,
            this.sWidth,
            this.sHeight 
        )
        if (gameFrame % this.takt === 0){
            this.xFrame = (this.xFrame + 1) % maxFrame
        }
    }


    stay() {
        this.drawImg(player.heroImg, this.heroMaxFrame)
    }
    runLeft() {
        this.drawImg(player.runLeftImg, this.heroMaxFrame)
    }
    runRight() {
        this.drawImg(player.runRightImg, this.heroMaxFrame)
    }
    update(){

    }
    move(){
        if (this.x < mouse.x) {
            this.runRight()
        } else if (this.x > mouse.x) {
            this.runLeft()
        }else {
            this.stay()
        }
    }
}

class Ghost{

}

let player = new Player(cWidth / 2, cHeight / 2)
let ghost = new Ghost()

function start() {
    //console.log(gameFrame);
    ctx.clearRect(0,0, cWidth, cHeight)
    ctx.drawImage(bgImg, 0, 0, cWidth, cHeight)

    //cod . . .
    player.update()
    player.move()

    gameFrame++;
    requestAnimationFrame(start)
}


//setInterval(start, 100)
start()