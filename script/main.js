function KingGame() {
    //Atributos
    let self = this
    this.canvas = document.getElementById("canvas")
    this.hero = new Hero()
    this.monster = new Enemy()
    this.autoTrackingInterval
    this.score = document.getElementById('points')
    this.points = 0
    this.enemysQuantity = 2

    //Métodos
    this.startGame = function() {
        this.hero.generateHero(this.canvas) 
        this.monster.generateEnemy(this.canvas)
        this.monster.autoTracking(this.hero)
    }

    this.knockBack = function() {
        switch(this.hero.direction) {
            case 'up':
                this.monster.posY -= 50
                this.monster.sprite.style.top = this.monster.posY + 'px'
                break
            case 'down':
                this.monster.posY += 50
                this.monster.sprite.style.top = this.monster.posY + 'px'
                break
            case 'left':
                this.monster.posX += 50
                this.monster.sprite.style.left = this.monster.posX + 'px'
                break
            case 'right':
                this.monster.posX -= 50
                this.monster.sprite.style.left = this.monster.posX + 'px'
                break
        }
    }

    /*this.moreEnemys = function() {
        this.enemysQuantity += 1
        this.index = 1
        while (index < enemysQuantity) {
            self.monster.generateRandomEnemy(canvas)
        }
    }*/

    this.attack = function() {
        let iddleSprite = self.hero.sprite.style.backgroundImage
        self.hero.attack()
        setTimeout(self.hero.stopAtk, 500, iddleSprite) 
        //ajustar el tamaño del div del enemigo en la función según tamaño final
        if (self.hero.posX + 70 >= self.monster.posX && self.hero.posX <= self.monster.posX + 40 
            && self.hero.posY + 70 >= self.monster.posY && self.hero.posY <= self.monster.posY + 40) {
            self.monster.life -= self.hero.strength
            this.knockBack()
            self.monster.isDead()
            if (self.monster.die === true) {
                self.points += 25
                self.hero.experience += 10
                self.score.innerText = self.points
                canvas.removeChild(self.monster.sprite)
                clearInterval(this.autoTrackingInterval)
                //self.moreEnemys()
                self.monster.generateRandomEnemy(canvas)
                self.monster.autoTracking(this.hero)
                }
        }
    }

    /*this.autoTracking = function() {
        this.autoTrackingInterval = setInterval(function() {                
            if (!self.monster.die) {
                if (self.monster.posX < self.hero.posX) {
                    self.monster.direction = 'right'
                    self.monster.posX += 10
                    self.monster.sprite.style.left = self.monster.posX + 'px'
                }
                if (self.monster.posX > self.hero.posX) {
                    self.monster.direction = 'left'
                    self.monster.posX -= 10
                    self.monster.sprite.style.left = self.monster.posX + 'px'
                }
                if (self.monster.posY < self.hero.posY) {
                    self.monster.direction = 'down'
                    self.monster.posY += 10
                    self.monster.sprite.style.top = self.monster.posY + 'px'
                }
                if (self.monster.posY > self.hero.posY) {
                    self.monster.direction = 'up'
                    self.monster.posY -= 10
                    self.monster.sprite.style.top = self.monster.posY + 'px'
                }
            }
        }, 300);
        
    }*/

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

