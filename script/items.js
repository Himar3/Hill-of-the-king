function Item() {
    let self = this
    this.timerIdGeneratePotion
    this.spriteRed = null
    this.posX
    this.posY
    //this.red = this.redPotion()
    //this.blue = this.bluePotion()
    //this.yellow = this.yellowPotion()



    this.redPotion = function(hero) {
        hero.life = 100
    }

    this.bluePotion =  function(hero) {
        hero.defense += 1 
    }

    this.yellowPotion = function(hero) {
        hero.points += 100
    }

    //this.dispensary = [red, blue, yellow]

    this.generateRedPotion = function(canvas) {
        this.timerIdGeneratePotion = setInterval(function() {
            if (self.spriteRed !== null) {
                canvas.removeChild(self.spriteRed)
            }
            self.spriteRed = document.createElement('div')
            self.spriteRed.setAttribute('id', 'redPotion')
            self.posX = Math.floor(Math.random() * 490)
            self.posY = Math.floor(Math.random() * 490)
        //error al leer style
            self.spriteRed.style.top = self.posX + 'px'
            self.spriteRed.style.left = self.posY + 'px'
            console.log(self.spriteRed)
            canvas.appendChild(self.spriteRed)
        }, 10000)
    }

    this.drinkPotion = function(hero) {
        if (this.posX <= hero.posX + 60 && this.posX >= hero.posX 
            && this.posY <= hero.posY + 60 && this.posY >= hero.posY 
            &&this.posX + 60 <= hero.posX + 60 && this.posY + 60 <= hero.posY + 60) {
                this.redPotion(hero)
                game.music.drinkPot.play()
                canvas.removeChild(this.spriteRed)
        }
    }

}
