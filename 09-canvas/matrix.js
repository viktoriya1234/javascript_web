console.log('Start!')

const matrixBg = document.getElementById('matrix-bg')

let ctxBg = matrixBg.getContext('2d')
let cw = matrixBg.width
let ch = matrixBg.clientHeight
let font = 12;
let col = cw / font
let arrSymbolPosY = [];

for(let i = 0; i < col; i++){
    arrSymbolPosY[i] = 1;
}

const str = "йQцу к2Aе нгMш щзNх ф5і вфTі ваXп рS3о д4Jж ячLс миUт еZь8 шбLю 1уMк 2@P-"
let matrixStrArr = str.split('')
console.log(matrixStrArr)

ctxBg.fillStyle = "rgb(0, 0, 0)"
ctxBg.fillRect(0, 0, cw, ch)

function drawSymbol(){
    ctxBg.fillStyle = "rgba(0, 0, 0, 0.04)"
    ctxBg.fillRect(0, 0, cw, ch)

    ctxBg.fillStyle = "#0f0"
    ctxBg.font = font + "px system-ui"

    for (let i = 0; i < arrSymbolPosY.length; i++) {
        let s = matrixStrArr[Math.floor(Math.random() * matrixStrArr.length)

        ]
        
        ctxBg.fillText(s, i * font, arrSymbolPosY[i] * font)

        if(arrSymbolPosY[i] * font > ch && Math.random() > 0.95)
            arrSymbolPosY[i] = 1


        arrSymbolPosY[i]++
    }
}
setInterval(drawSymbol, 60)

const canvas3 = document.getElementById('canvas3')
const ctx3 = canvas3.getContext('2d')

const sliderArray = [
    'img-2/1.jpg', 'img-2/2.jpg', 'img-2/3.jpg',
    'img-2/4.jpg', 'img-2/5.jpg'
]
let sliderIndex = 0;
let slideImg = new Image()
slideImg.src = sliderArray[sliderIndex]
slideImg.onload = function(){
    ctx3.drawImage(slideImg, 0, 0)
}

let leftButton = document.getElementById('left-button')
let rightButton = document.getElementById('right-button')

leftButton.onclick = function(event) {
    sliderIndex--
    if(sliderIndex < 0)
        sliderIndex = sliderArray.length - 1

    slideImg.src = sliderArray[sliderIndex]
}

rightButton.onclick = function(event) {
    sliderIndex++
    if(sliderIndex >= sliderArray.length)
        sliderIndex = 0

    slideImg.src = sliderArray[sliderIndex]
}