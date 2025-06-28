console.log('Start')

class MainMenu {
    constructor(triggerSelector, containerSelector){
        this.trigger = document.querySelector(triggerSelector)
        this.container = document.querySelector(containerSelector)
        this.Init()
    }
    Init(){
        this.trigger.addEventListener('click', (e) => {
            this.container.classList.toggle('mainMenuOpened')
        })
    }
}

class PhotoGallery{
    constructor (){
        this.allComments = [
        'Цей кадр нереально крутий! :)',
        'Ти вмієш дивувати! Кожен кадр - поєднання життєлюбності і краси',
        'Спинися мить, прекрасна ти!',
        'Просто супер! Як тобі це вдається?',
        'Це просто шедевр мистецтва',
        'В цьому штучному світі так приємно знайти щось натуральне))',
        'Клас!!!))',
        'Нереально чудово!',
        'А ти вмієш дивувати ;)',
        'Це фото так і проситься в рамочку на стіну'
        ];
        this.allDescriptions = [
            'Коли радості немає меж',
            'Любов в кожному пікселі',
            'Фото заряджене позитивом',
            'Зловив дзен',
            'Як мало потрібно для щастя',
            'Знали б ви що в мене на умі! ;)',
            'Show must go on',
            'Good vibes only',
            'My inspiration',
            'On my way to paradise',
            'Що це, якщо не любов? Х)'
        ];

        this.picturesDB = this.generatePicturesDB(25)
        console.log(this.picturesDB)
        this.pictureContainer = document.querySelector('.picturesContainer')
    }
    randomElement(array){
        return array[Math.floor(Math.random() * array.length)]
    }
    generatePicturesDB(number){
        const pictures = []

        for (let i = 0; i < number; i++) {
            const comments = [];
            const commentCount = Math.random(Math.random() * 5)
            
            for (let j = 0; j < commentCount; j++)
                comments.push(this.randomElement(this.allComments))

            
            pictures.push({
                src: `../static/img/photos/${i}.jpg`,
                likes: Math.floor(Math.random() * 100),
                effect: 'none',
                description: this.randomElement(this.allDescriptions),
                comments: ['коментар1', 'коментар2'],
                commentsNumber: comments.length
                });
            }

            return pictures;

    }
    showPictures() {
        const pictureTemplate = document.getElementById('templatePictureExample')
        const pictureExample = pictureTemplate.content.querySelector('.pictureExample')
        this.pictureContainer.innerHtml = '';

        this.picturesDB.forEach( (photo) => {
            const photoBlock = pictureExample.cloneNode(true)
            photoBlock.querySelector('.pictureImg').src = photo.src;
            photoBlock.querySelector('.pictureImg').style.filter = photo.effect
            photoBlock.querySelector('.pictureComments').innerText = photo.commentsNumber
            photoBlock.querySelector('.pictureStars').innerText = photo.likes

            this.pictureContainer.append(photoBlock)
        })

        //console.log(pictureExample)//
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    new MainMenu('.menuTrigger', '.mainMenuContainer')
    const gallery = new PhotoGallery();
    gallery.showPictures();


})