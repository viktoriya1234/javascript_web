let rulesModalWindow = document.getElementsByClassName('rules')[0];
//console.log(rulesModalWindow)

let buttons = rulesModalWindow.getElementsByTagName('button');
//console.log(buttons);

for (let i = 0; i < buttons.length; i++) {
    //console.log(buttons[i]);
    buttons[i].onclick = function(e){
        //console.log(e);
        rulesModalWindow.style.display = 'none';
    }
}

const boardItems = [
    {name:'bullbasaur', img:'bullbasaur.png'},
    {name:'charmander', img:'charmander.png'},
    {name:'eevee', img:'eevee.png'},
    {name:'pikachu', img:'pikachu.png'},
    {name:'psyduck', img:'psyduck.png'},
    {name:'squirtle', img:'squirtle.png'},
    {name:'bullbasaur', img:'bullbasaur.png'},
    {name:'charmander', img:'charmander.png'},
    {name:'eevee', img:'eevee.png'},
    {name:'pikachu', img:'pikachu.png'},
    {name:'psyduck', img:'psyduck.png'},
    {name:'squirtle', img:'squirtle.png'},
    
];

let sectionBoard = document.getElementById('board');
let initImg = 'pokeball.jpg'
let images = 'images/'

function flipImg(){}

function createBoard(number=12){
    for (let i = 0; i < number; i++) {
        let img = document.createElement('img')
        console.log(img)
        img.setAttribute('src', images + initImg)
        img.setAttribute('id', 'i' + i)
        img.onclick = flipImg
        sectionBoard.append(img)
    }
}

createBoard(boardItems.length)
