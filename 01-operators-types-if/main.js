const LABEL_NAME = [
    "Як звати тебе?", 
    "Тебе то як звати?", 
    "Ім'я твоє яке, юний падаван?",
    "Хто ти такий, малий?",
    "Як назвали тебе батьки твої?",
    "Ім'я твоє, скажи мені, юний учню Сили?"
];

const LABEL_AGE = [
    "Готовий чи ти, юний падаване? І скільки літ минуло з твого народження?",
    "Готовий до випробувань? Скільки циклів обернулося навколо сонця з часу твого появлення?",
    "Готовий чи ти до шляху? Скільки років просипалося через пісочний годинник твого життя?",
    "Чи готовий ти до завдання? Скільки зим і літ бачив ти?" ,
    "Чи готовий ти до випробувань? Скільки років згасло з часу твого народження?",
    "Чи готовий ти до подорожі? Скільки зустріло твоє око років з моменту зявлення?",
    "Чи готовий ти до бою? Скільки років бачив ти на небі?",
    "Чи готовий ти до знань? Скільки років прочикав ти?",
    "Чи готовий ти до відповідальності? Скільки років прийняв ти самостійно?",    
    'Чи готовий ти? Маєш років скільки?'
];

const LABEL_AGE_ERROR = [

];

let randomLabelName = Math.floor(Math.random() * LABEL_NAME.length);
// отримати значення від користувача - prompt
let userName = prompt(LABEL_NAME[randomLabelName]);


let randomLabelAge =  Math.floor(Math.random() * LABEL_AGE.length);
let userAge;
userAge = prompt(LABEL_AGE[randomLabelAge]);

// userAge = "frg"
let message = '';

if(isNaN(userAge)) {
    message = LABEL_AGE_ERROR[Math.floor(Math.random() * LABEL_AGE_ERROR.length)];

} else{
    message = '<h2>' + userName + '</h2>';
}


let jedi = document.getElementById("jedi");
jedi.innerHTML = message;
