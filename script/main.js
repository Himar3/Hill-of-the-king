function KingGame() {
    //Atributos
    let self = this
    this.canvas = document.getElementById("canvas")
    this.hero = new Hero()
    this.monster = new Enemy()
    this.autoTrackingInterval
    this.gameOverInterval
    this.score = document.getElementById('points')
    this.points = 0
    this.killCounter = 0

    //Métodos
    this.startGame = function() {
        this.hero.generateHero(this.canvas) 
        this.monster.generateEnemy(this.canvas)
        this.monster.autoTracking(this.hero)
    }

    this.knockBackToEnemy = function() {
        switch(this.hero.direction) {
            case 'up':
                this.monster.posY -= 100
                this.monster.sprite.style.top = this.monster.posY + 'px'
                break
            case 'down':
                this.monster.posY += 100
                this.monster.sprite.style.top = this.monster.posY + 'px'
                break
            case 'left':
                this.monster.posX += 100
                this.monster.sprite.style.left = this.monster.posX + 'px'
                break
            case 'right':
                this.monster.posX -= 100
                this.monster.sprite.style.left = this.monster.posX + 'px'
                break
        }
    }

    this.attack = function() {
        let iddleSprite = self.hero.sprite.style.backgroundImage
        self.hero.attack()
        setTimeout(self.hero.stopAtk, 500, iddleSprite) 
        //ajustar el tamaño del div del enemigo en la función según tamaño final
        if (self.hero.posX + 70 >= self.monster.posX && self.hero.posX <= self.monster.posX + 50 
            && self.hero.posY + 70 >= self.monster.posY && self.hero.posY <= self.monster.posY + 50) {
            self.monster.life -= self.hero.strength
            this.knockBackToEnemy()
            self.monster.isDead()
            if (self.monster.die === true) {
                self.points += 25
                self.killCounter += 1
                self.hero.experience += 25
                self.hero.levelUp()
                self.score.innerText = self.points
                canvas.removeChild(self.monster.sprite)
                clearInterval(this.autoTrackingInterval)
                if (self.killCounter >= 3){
                    self.killCounter = 0
                    self.monster.generateBossEnemy(canvas)
                } else {
                    self.monster.generateRandomEnemy(canvas)
                }
                setTimeout(self.monster.autoTracking(self.hero), 1500)           
            }
        }
    }

    this.mapKeys = function() {
        document.addEventListener('keydown', function(e) {
            console.log(e.key)
            if (e.key === 'ArrowDown' || e.key === 's') {
                self.hero.moveDown()
            }
            if (e.key === 'ArrowUp' || e.key === 'w') {                
                self.hero.moveUp()
            }
            if (e.key === 'ArrowLeft' || e.key === 'a') {                
                self.hero.moveLeft()
            }
            if (e.key === 'ArrowRight' || e.key === 'd') {
                self.hero.moveRight()
            }
            if (e.key === ' ' || e.key === '+') {
                self.attack()
            }
        })    
    }

}



let game = new KingGame()
game.startGame()
game.mapKeys()

