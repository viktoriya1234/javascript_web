console.log('Start')

class MainMenu {
    constructor(triggerSelector, containerSelector){
        this.trigger = document.querySelector(triggerSelector)
        this.container = document.querySelector(containerSelector)
        this.Init()
    }
    Init(){
        this.trigger.addEventListener('click', (e) => {
            this.container.classList.toggle('menuOpened')
        })
    }
}

new MainMenu('.menuTrigger', '.menuContainer')