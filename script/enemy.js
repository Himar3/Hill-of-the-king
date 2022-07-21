function Enemy() {
    let self = this
    this.sprite
    this.posX = 450 
    this.posY = 220
    this.strength = 20
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
    
    this.isDead = function() {
        this.life >= 1 ? this.die = false : this.die = true

    }

    this.generateRandomEnemy = function(canvas) {
        this.die = false
        this.life = 100
        let randomEnemy = document.createElement('div')
        randomEnemy.setAttribute('id', 'enemy')
        //ajustar coordenadas al tamaño final del sprite
        this.posX = Math.floor(Math.random() * 450)
        this.posY = Math.floor(Math.random() * 450)
        randomEnemy.style.top = this.posY + 'px'
        randomEnemy.style.left = this.posX + 'px'
        canvas.appendChild(randomEnemy)
        this.sprite = document.getElementById('enemy')
    }


    this.autoTracking = function(hero) {
        this.autoTrackingInterval = setInterval(function() {                
            if (!self.die /*&& !self.collideHero(hero)*/) {
                if (self.posX < hero.posX) {
                    self.direction = 'right'
                    self.posX += 10
                    self.sprite.style.left = self.posX + 'px'
                }
                if (self.posX > hero.posX) {
                    self.direction = 'left'
                    self.posX -= 10
                    self.sprite.style.left = self.posX + 'px'
                }
                if (self.posY < hero.posY) {
                    self.direction = 'down'
                    self.posY += 10
                    self.sprite.style.top = self.posY + 'px'
                }
                if (self.posY > hero.posY) {
                    self.direction = 'up'
                    self.posY -= 10
                    self.sprite.style.top = self.posY + 'px'
                }
            }
        }, 300);
        
    }

    //this.collideHero = function(hero) {
        //if(this.posX < hero.posX +)
    //}
}