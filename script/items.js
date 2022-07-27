function Item() {
    let self = this
    this.timerIdGeneratePotion
    this.spriteRed = null
    this.posX
    this.posY



    this.redPotion = function(hero) {
        hero.life = 100
        hero.lifeHud()
    }

    //future implementation
    // this.bluePotion =  function(hero) {
    //     hero.defense += 1 
    // }

    // this.yellowPotion = function(hero) {
    //     hero.points += 100
    // }

    this.generateRedPotion = function(canvas) {
        this.timerIdGeneratePotion = setInterval(function() {
            if (self.spriteRed !== null) {
                canvas.removeChild(self.spriteRed)
            }
            self.spriteRed = document.createElement('div')
            self.spriteRed.setAttribute('id', 'redPotion')
            self.posX = Math.floor(Math.random() * 460)
            self.posY = Math.floor(Math.random() * 460)
            self.spriteRed.style.top = self.posY + 'px'
            self.spriteRed.style.left = self.posX + 'px'
            canvas.appendChild(self.spriteRed)
        }, 10000)
    }

    this.drinkPotion = function(hero, canvas) {
        if (this.posX >= hero.posX && this.posX + 25 <= hero.posX + 60 &&
            this.posY >= hero.posY && this.posY + 25 <= hero.posY + 60) { 
            this.redPotion(hero)
            game.music.drinkPot.play()
            canvas.removeChild(this.spriteRed)
            this.spriteRed = null
        }
    }
}
