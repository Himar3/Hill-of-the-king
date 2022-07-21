function Hero() {
    let self = this
    this.sprite 
    this.posX = 30 
    this.posY = 220
    this.strength = 25
    this.defense = 10
    this.life = 100
    this.lifeAnimation = document.getElementById('life')
    this.direction = 'down'
    this.level = 0
    this.experience = 0

    

    this.generateHero = function(canvas) {
        let hero = document.createElement("div")
        hero.setAttribute('id', 'hero')
        hero.style.top = this.posY + 'px'
        hero.style.left = this.posX + 'px'
        canvas.appendChild(hero)
        this.sprite = document.getElementById('hero')
    }

    /*this.levelUp = function() {
        if (this.experience > 100) {
            this.level += 1
            this.experience = 0
            this.growByLevel()
        }
        //añadir ifs por cada seccion de la barra de exp para meter el png correspondiente
    }*/

    /*this.growByLevel = function() {
        if (this.level === 1) {
            this.strength += 5
            this.defense += 2
            this.life = 110
        }
        if (this.level === 2) {
            this.strength += 5
            this.defense += 2
            this.life = 120
        }
        if (this.level === 3) {
            this.strength += 5
            this.defense += 2
            this.life = 130
        }
        if (this.level === 4) {
            this.strength += 5
            this.defense += 2
            this.life = 140
        }
        if (this.level === 5) {
            this.strength += 5
            this.defense += 2
            this.life = 150
        }
    }*/

    this.moveDown = function() {
        this.direction = 'down'
        if (this.posY < 455) {                        
            this.sprite.style.backgroundImage = "url(assets/images/hero_mov/hero_down.png)"
            this.posY += 7
            this.sprite.style.top = this.posY + 'px'
        }
    }
    
    this.moveUp = function() {
        this.direction = 'up'
        if (this.posY > 2) {            
            this.sprite.style.backgroundImage = "url(assets/images/hero_mov/hero_up.png)"
            this.posY -= 7
            this.sprite.style.top = this.posY + 'px'
        }
    }

    this.moveLeft = function() {
        this.direction = 'left'
        if (this.posX > 1) {            
            this.sprite.style.backgroundImage = "url(assets/images/hero_mov/hero_left.png)"
            this.posX -= 7
            this.sprite.style.left = this.posX + 'px'
        }
    }

    this.moveRight = function() {
        this.direction = 'right'
        if (this.posX < 460) {                       
            this.sprite.style.backgroundImage = "url(assets/images/hero_mov/hero_right.png)"
            this.posX += 7
            this.sprite.style.left = this.posX + 'px'
        }
    }

    this.attack = function() {
        if (this.direction === 'down') {
            if (this.posX > 60 && this.posY > 60) {
                this.sprite.style.left = this.posX - 25 + 'px'
                this.sprite.style.top = this.posY - 25 + 'px'
            }
            this.sprite.style.width = '70px'
            this.sprite.style.height = '70px'
            this.sprite.style.backgroundImage = "url(assets/images/hero_attack/hero_attack_down.gif)"
        }
        if (this.direction === 'up') {
            if (this.posX > 60 && this.posY > 60) {
                this.sprite.style.left = this.posX - 25 + 'px'
                this.sprite.style.top = this.posY - 25 + 'px'
                }
            this.sprite.style.width = '70px'
            this.sprite.style.height = '70px'
            this.sprite.style.backgroundImage = "url(assets/images/hero_attack/hero_attack_up.gif)"
            }
        if (this.direction === 'left') {
            if (this.posX > 60 && this.posY > 60) {
                this.sprite.style.left = this.posX - 25 + 'px'
                this.sprite.style.top = this.posY - 25 + 'px'
            }
            this.sprite.style.width = '70px'
            this.sprite.style.height = '70px'
            this.sprite.style.backgroundImage = "url(assets/images/hero_attack/hero_attack_left.gif)"
        }
        if (this.direction === 'right') {
            this.sprite.style.width = '70px'
            this.sprite.style.height = '70px'
            this.sprite.style.top = this.posY - 20 + 'px'
            this.sprite.style.backgroundImage = "url(assets/images/hero_attack/hero_attack_right.gif)"
            if (this.posX > 60 && this.posY > 60) {
                this.sprite.style.left = this.posX + 25 + 'px'
                this.sprite.style.top = this.posY + 25 + 'px'
            }
        }
    }

    this.stopAtk = function(iddleSprite) {
        self.sprite.style.width = '32px'
        self.sprite.style.height = '40px'
        self.sprite.style.backgroundImage = iddleSprite
    }

    this.lifeHud = function() {
        if (this.life > 90) {
            this.lifeAnimation.style.backgroundImage = "url(../assets/images/hud/life100.png)"
        }
        else if (this.life > 80) {
        this.lifeAnimation.style.backgroundImage = "url(../assets/images/hud/life90.png)"
        }
        else if (this.life > 70) {
            this.lifeAnimation.style.backgroundImage = "url(../assets/images/hud/life80.png)"
        }
        else if (this.life > 60) {
            this.lifeAnimation.style.backgroundImage = "url(../assets/images/hud/life70.png)"
        }
        else if (this.life > 50) {
            this.lifeAnimation.style.backgroundImage = "url(../assets/images/hud/life60.png)"
        }
        else if (this.life > 40) {
            this.lifeAnimation.style.backgroundImage = "url(../assets/images/hud/life50.png)"
        }
        else if (this.life > 30) {
            this.lifeAnimation.style.backgroundImage = "url(../assets/images/hud/life40.png)"
        }
        else if (this.life > 20) {
            this.lifeAnimation.style.backgroundImage = "url(../assets/images/hud/life30.png)"
        }
        else if (this.life > 10) {
            this.lifeAnimation.style.backgroundImage = "url(../assets/images/hud/life20.png)"
        }
        else if (this.life > 0) {
            this.lifeAnimation.style.backgroundImage = "url(../assets/images/hud/life10.png)"
        }
        else if (this.life <= 0) {
            this.lifeAnimation.style.backgroundImage = "url(../assets/images/hud/life0.png)"
        }
    }
}
