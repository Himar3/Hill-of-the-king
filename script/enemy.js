function Enemy() {
    //self = this
    this.sprite
    this.posX = 450 
    this.posY = 220
    this.strength = 25
    this.life = 100
    this.direction = 'down'
    this.die = false

    this.generateEnemy = function(canvas) {
        let enemy = document.createElement('div')
        enemy.setAttribute('id', 'enemy')
        enemy.style.top = this.posY + 'px'
        enemy.style.left = this.posX + 'px'
        canvas.appendChild(enemy)
        this.sprite = document.getElementById('enemy')
    }
    
    this.deadOrNot = function() {
        this.life >= 1 ? this.die = false : this.die = true
    }

    /*this.generateRandomEnemy = function(canvas) {
        let randomEnemy = document.createElement('div')
        randomEnemy.setAttribute('id', 'enemy')
        randomEnemy.style.top = math.random() * 450
        randomEnemy.style.left = math.random() * 450
        canvas.appendChild(randomEnemy)
        this.sprite = document.getElementById('enemy')
    }


    this.autoTracking = function() {
        let autoTrackingInterval = setInterval(function() {
            if (self.die === true) {
                clearInterval(autoTrackingInterval)
                self.generateEnemy()
            } else {
                if (self.posX < Hero.posX && self.posY < Hero.posY) {
                    this.direction = 'right'
                    self.posX += 6
                    self.posY += 6
                    self.sprite.style.left = this.posX + 'px'
                    self.sprite.style.top = this.posY + 'px'
                }
                if (self.posX > Hero.posX && self.posY > Hero.posY) {
                    this.direction = 'left'
                    self.posX -= 6
                    self.posY -= 6
                    self.sprite.style.left = this.posX + 'px'
                    self.sprite.style.top = this.posY + 'px'
                }
                if (self.posX < Hero.posX) {
                    this.direction = 'right'
                    self.posX += 10
                    self.sprite.style.left = this.posX + 'px'
                }
                if (self.posX > Hero.posX) {
                    this.direction = 'left'
                    self.posX -= 10
                    self.sprite.style.left = this.posX + 'px'
                }
                if (self.posY < Hero.posY) {
                    this.direction = 'down'
                    self.posY += 10
                    self.sprite.style.top = this.posY + 'px'
                }
                if (self.posY > Hero.posY) {
                    this.direction = 'up'
                    self.posY -= 10
                    self.sprite.style.top = this.posY + 'px'
                }
            }
        }, 300);
        
    }*/
}