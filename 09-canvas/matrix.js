const matrixBg = document.getElementById('matrix-bg')

let ctxBg = matrixBg.getContext()

let cw = matrixBg.width
let ch = matrixBg.clientHeight
let font = 10
let col = cw / font
let arrSymbol = []

for(let i = 0; i < cor; i++){
    arrSymbol[i] = 1;
}

const str = "йцу к2е нгш щзх ф5і вфі вап р3о д4ж ячс мит еь8 шбю 1ук 2@-"
let matrixStrArr = str.split('')
console.log(matrixStrArr)

function drawSymbol(){
    ctxBg.fillStyle = "rgba(0, 0, 0, 0.05)"
    ctxBg.fillRect(0, 0, cw, ch)

    ctxBg.fillStyle = "#0f0"
    ctxBg.font = font + "px system-ui"

    for (let i = 0; i < arrSymbol.length; i++) {
        let s = matrixStrArr[Math.floor(Math.random() * matrixStrArr.length)

        ]
        
        ctxBg.fillText(s, i * font, arrSymbol[i] * font)


        arrSymbol[i]++
    }
}
setInterval(drawSymbol, 150)