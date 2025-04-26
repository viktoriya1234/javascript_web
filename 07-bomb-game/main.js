let shooterGrid = document.getElementById('shooter-grid')

const gridWidth = 15
const gridHeight = 15


for (let i = 0; i < gridWidth * gridHeight; i++){
    let div = document.createElement('div')
    div.innerHTML = i
    shooterGrid.append(div)
}

const gridDivs = document.querySelectorAll('#shooter-grid div')

let bombs = [
    0, 1, 2, 3, 4, 5, 6, 7, 8 , 9,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39
]

for (let i = 0; i < bombs.length; i ++) [
    gridDivs[bombs[i]].classList.add('bomb')
]

let shooterIndex = 217;
gridDivs[shooterIndex].classList.add('shooter')

function moveShooter(event){
    gridDivs[shooterIndex].classList.remove('shooter')

    console.log(event)
    
    switch (event.code){
        case 'ArrowLeft':
            if(shooterIndex > 210)
            shooterIndex--
            break
        case 'ArrowRight':
            if(shooterIndex < 224 )
            shooterIndex++
            break
    }
    
    gridDivs[shooterIndex].classList.add('shooter')
}

function shoot(event) {
    let setIntervalIndex
    let currentshootIndex = shooterIndex

    function moveShoot(){
        gridDivs[currentshootIndex].classList.remove('shoot')
        currentshootIndex -= gridWidth

        if(currentshootIndex < 0)
            clearInterval(setIntervalIndex)

        if(gridDivs[currentshootIndex].classList.contains('bomb')){
            gridDivs[currentshootIndex].classList.remove('bomb')
            gridDivs[currentshootIndex].classList.remove('explosion.png')
            
        }

        console.log(setIntervalIndex)

        gridDivs[currentshootIndex].classList.add('shoot')
    }

    if(event.code == "Space"){
        setIntervalIndex = setInterval(moveShoot, 100)
    }
}

document.addEventListener('keydown', moveShooter)
document.addEventListener('keydown', shoot)
