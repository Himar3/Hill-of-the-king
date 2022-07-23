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
        this.posX = Math.floor(Math.random() * 250 + 250)
        this.posY = Math.floor(Math.random() * 250 + 250)
        randomEnemy.style.top = this.posY + 'px'
        randomEnemy.style.left = this.posX + 'px'
        canvas.appendChild(randomEnemy)
        this.sprite = document.getElementById('enemy')
    }

    this.generateBossEnemy = function(canvas) {
        this.die = false
        this.life = 150
        this.strength = 40
        let bossEnemy = document.createElement('div')
        bossEnemy.setAttribute('id', 'bossEnemy')
        this.posX = 250
        this.posY = 0
        bossEnemy.style.top = this.posY + 'px'
        bossEnemy.style.left = this.posX + 'px'
        canvas.appendChild(bossEnemy)
        this.sprite = document.getElementById('bossEnemy')
        //setTimeout(this.sprite.style.backgroundImage = url(assets/images/enemys/***/.gif), 1000)        
    }

    /*this.randomMovement = function() {
        this.pickPositiveOrNegative = [-10, 10]
        this.pickXorY = [self.posX, self.posY]
        this.randomMovementInterval = setInterval(function() {
            this.pickXorY[Math.floor(Math.random() * 2)] += self.pickPositiveOrNegative[Math.floor(Math.random() * 2)]
            self.sprite.style.left = self.posX + 'px'
            self.sprite.style.top = self.posY + 'px'
        }, 1500)
    }*/

    this.autoTracking = function(hero) {
        this.autoTrackingInterval = setInterval(function() {  
            //if (hero.die === true) {
                //clearInterval(autoTrackingInterval)
                //self.randomMovement()              
            if (!self.die && !self.collideHero(hero)) {
                if (self.posX <= hero.posX) {
                    self.direction = 'right'
                    self.posX += 8
                    self.sprite.style.left = self.posX + 'px'
                }
                if (self.posX >= hero.posX + 40) {
                    self.direction = 'left'
                    self.posX -= 8
                    self.sprite.style.left = self.posX + 'px'
                }
                if (self.posY + 30 <= hero.posY) {
                    self.direction = 'down'
                    self.posY += 8
                    self.sprite.style.top = self.posY + 'px'
                }
                if (self.posY >= hero.posY + 40) {
                    self.direction = 'up'
                    self.posY -= 8
                    self.sprite.style.top = self.posY + 'px'
                }
            }
            if (!self.die && self.collideHero(hero)) {
                self.damageToHero(hero)
            }
            //}
        }, 200);
        
    }

    this.collideHero = function(hero) {
        let collide = false
        if (this.posX <= hero.posX + 40 && this.posX + 40>= hero.posX 
            && this.posY <= hero.posY + 40 && this.posY + 30 >= hero.posY) {
                collide = true
                console.log(collide)
                return collide
        }
        else if (this.posX <= hero.posX + 50 && this.posX >= hero.posX 
            && this.posY <= hero.posY + 40 && this.posY >= hero.posY 
            &&this.posX + 50 <= hero.posX + 50 && this.posY + 40 <= hero.posY + 50) {
                console.log(collide)
                self.posY += 10
                self.sprite.style.top = self.posY + 'px'
                collide = true
                return collide
        }
    }   

    /*this.knockbackToHero = function (hero) {
        if (this.direction === 'up') {
            hero.posY -= 60
            hero.sprite.style.top = hero.posY + 'px'
        }
        if (this.direction === 'down') {
            hero.posY += 60
            hero.sprite.style.top = hero.posY + 'px'
        }
        if (this.direction === 'left') {
            hero.posX -= 60
            hero.sprite.style.left = hero.posX + 'px'
        }
        if (this.direction === 'right') {
            hero.posX += 60
            hero.sprite.style.left = hero.posX + 'px'
        }

    }*/

    this.damageToHero = function(hero) {
        if (this.collideHero(hero) === true) {
            hero.life -= self.strength - hero.defense
            hero.lifeHud()
            if (this.direction === 'up') {
                if (hero.posY > 10) {
                    hero.posY -= 40
                    hero.sprite.style.top = hero.posY + 'px'
                    hero.sprite.style.backgroundImage = "url(../assets/images/hero_iddle/hero_hit_down_72.gif)"
                }
            }
            if (this.direction === 'down') {
                if (hero.posY < 440) {
                    hero.posY += 40
                    hero.sprite.style.top = hero.posY + 'px'
                    hero.sprite.style.backgroundImage = "url(../assets/images/hero_iddle/hero_hit_up_72.gif)"
                }
            }
            if (this.direction === 'left') {
                if (hero.posX > 10) {
                    hero.posX -= 40
                    hero.sprite.style.left = hero.posX + 'px'
                    hero.sprite.style.backgroundImage = "url(../assets/images/hero_iddle/hero_hit_right_72.gif)"
                }
            }
            if (this.direction === 'right') {
                if (hero.posX < 440) {
                    hero.posX += 40
                    hero.sprite.style.left = hero.posX + 'px'
                    hero.sprite.style.backgroundImage = "url(../assets/images/hero_iddle/hero_hit_left_72.gif)"
                }
            }
            //no se como llamar a la funcion. direction undefined
            //hero.knockbackToHero()
            if (hero.life <= 0) {
                hero.die = true
                //let contadorEspera = setTimeout(self.animacionMuerteHeroe(hero), 500)
                hero.sprite.style.backgroundImage = "url(assets/images/hero_iddle/hero_death.gif)"                
            }
        }
    }

    this.animacionMuerteHeroe = function(hero) {
        hero.posY -= 25
        hero.sprite.style.top = this.posY + 'px'
        hero.sprite.style.backgroundImage = "url(assets/images/hero_iddle/TornadoLoop_96x96.gif)"
    }

}