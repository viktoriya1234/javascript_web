let movies = [
    [    
         'Пірати Карибського моря: Прокляття Чорної Перлини',
         '1.jpg', 
         'Американський фантастичний пригодницький фільм 2003 року. Режисер — Гор Вербінскі. Перший із серії фільмів "Пірати Карибського моря". Фільм вийшов в український прокат 21 серпня 2003 року; для українського прокату тоді не було створено український дубляж і фільм демонструвався з російським дубляжем. Український дубляж цього фільму було створено на студії LeDoyen лише у 2017 році для релізу на home video .'
    ],
    ['Пірати Карибського моря: Скриня мерця', '2.jpg', 'Американський пригодницький фільм 2006 року компанії «Walt Disney Pictures», продовження стрічки «Пірати Карибського моря: Прокляття «Чорної перлини»» та пріквел картини «Пірати Карибського моря: На краю світу» від режисера Гора Вербінскі за сценарієм Террі Россіо і Тед Елліотт. Продюсером картини виступив Джері Брукгаймер. Світова прем\'єра відбулася 6 липня 2006 року, в Україні — 13 липня 2006 року.'],
    ['Пірати Карибського моря: На краю світу', '3.jpg', 'Американський пригодницький фільм 2007 року, третій із серії стрічок «Пірати Карибського моря». Перший фільм «Пірати Карибського моря» («Пірати Карибського моря: Прокляття «Чорної перлини»») (англ. Pirates of the Caribbean: The Curse of the Black Pearl) вийшов у 2003-му році; другий «Пірати Карибського моря 2: Скриня мерця» (англ. Pirates of the Caribbean: Dead Man`s Chest) — у 2006-му. Режисером «На краю Світу», як і попередніх серій фільму, став Ґор Вербінські. Прем\'єрний показ стрічки відбувся 19 травня 2007 року в каліфорнійському Діснейленді. В американський прокат фільм вийшов 25 травня 2007 року. В український прокат фільм вийшов 24 травня 2007 року.'],
    ['Пірати Карибського моря: На дивних берегах', '4.jpg', 'Американська пригодницька стрічка 2011 року, четвертий фільм із серій про Піратів Карибського моря компанії Walt Disney Pictures. Продюсером картини виступив Джері Брукхаймер, а у головних ролях знялися Джонні Депп, Пенелопа Круз, Іян Макшейн, Джефрі Раш. Про зйомки фільму було вперше оголошено у вересні 2008 року, проте фактично вони розпочалися у червні 2010. На противагу попереднім фільмам, які переважно були зняті на Карибах, На дивних берегах здебільшого знімалися на Гаваях.'],
    ['Пірати Карибського моря: Помста Салазара', '5.jpg', 'Американський пригодницький фільм-фентезі, знятий Гоакімом Роннінґом і Еспеном Сандберґом. Він є п\'ятим фільмом у серії «Пірати Карибського моря». Прем\'єра стрічки в Україні відбулася 25 травня 2017 року. Фільм розповідає про капітана Джека Спарроу, який виявляє, що за ним полює його старий ворог капітан Салазар разом із примарними піратами.']
];


// prompt - тимчасова
let userChise;
let notAnswer = true;
let selectedStyle = ''

while(notAnswer){
    userChise = prompt("виберіть тему:\n 1. темна\n 2. світла");
    switch (userChise) {
        case '1':
            notAnswer = false
            selectedStyle = 'dark'
            break
        case '2':
            notAnswer = false
            selectedStyle = 'light'
            break
        default:
            alert('Ви ввели неправильний варіант')
    }
}

let container = '<div class="'+selectedStyle+'">'
let header = "<header><h1>Пірати карибського моря</h1><hr>"

let moviesList = "<ul>"
let li = ''
let descriptionText = ''

for (let i = 0; i < movies.length; i++) {
    li += '<li><img src="images/' + movies[i][1] +'"><br><a href="#"> ' + movies[i][0] +'</a> </li>'
    descriptionText += "<article><h3> "+ movies[i][0] +" </h3><p> "+ movies[i][2] +" </p></article>"
}

moviesList += li + "</ul>"

let descriptionMovies = '<main><h2>Опис фільмів</h2><hr>' + descriptionText + '</main>'




header += moviesList + '</header>' + descriptionMovies
container = container + header + '</div>'

document.body.innerHTML = container;