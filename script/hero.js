function Hero() {
    //Atributos
    let self = this
    this.sprite 
    this.posX = 10 
    this.posY = 220
    this.strength = 25
    this.defense = 10
    this.life = 100
    this.lifeAnimation = document.getElementById('life')
    this.direction = 'down'
    this.level = 1
    this.experience = 0
    this.die = false

    
    //Métodos
    this.generateHero = function(canvas) {
        let hero = document.createElement("div")
        hero.setAttribute('id', 'hero')
        hero.style.top = this.posY + 'px'
        hero.style.left = this.posX + 'px'
        canvas.appendChild(hero)
        this.sprite = document.getElementById('hero')
    }

    this.levelUp = function() {
        if (this.experience > 100) {
            this.level += 1
            //this.sprite.style.backgroundImage = url()
            this.experience = 0
            this.growByLevel()
        }
        //añadir ifs por cada seccion de la barra de exp para meter el png correspondiente
    }

    this.growByLevel = function() {
        if (this.level === 2) {
            this.strength += 5
            this.defense += 2
            this.life = 100
        }
        if (this.level === 3) {
            this.strength += 5
            this.defense += 2
            this.life = 100
        }
        if (this.level === 4) {
            this.strength += 5
            this.defense += 2
            this.life = 100
        }
        if (this.level === 5) {
            this.strength += 5
            this.defense += 2
            this.life = 100
        }
        if (this.level === 5) {
            this.strength += 5
            this.defense += 2
            this.life = 100
        }
    }

    this.moveDown = function() {
        this.direction = 'down'
        if (this.posY < 440) {                        
            this.sprite.style.backgroundImage = "url(../assets/images/hero_iddle/hero_idle_down_72.gif)"
            this.posY += 10
            this.sprite.style.top = this.posY + 'px'
        }
    }
    
    this.moveUp = function() {
        this.direction = 'up'
        if (this.posY > - 20) {            
            this.sprite.style.backgroundImage = "url(assets/images/hero_mov/hero_up.png)"
            this.posY -= 10
            this.sprite.style.top = this.posY + 'px'
        }
    }

    this.moveLeft = function() {
        this.direction = 'left'
        if (this.posX > - 20) {            
            this.sprite.style.backgroundImage = "url(assets/images/hero_mov/hero_left.png)"
            this.posX -= 10
            this.sprite.style.left = this.posX + 'px'
        }
    }

    this.moveRight = function() {
        this.direction = 'right'
        if (this.posX < 450) {                       
            this.sprite.style.backgroundImage = "url(assets/images/hero_mov/hero_right.png)"
            this.posX += 10
            this.sprite.style.left = this.posX + 'px'
        }
    }

    this.attack = function() {
        if (this.direction === 'down') {
            this.sprite.style.backgroundImage = "url(assets/images/hero_attack/hero_attack_down.gif)"   
        }
        if (this.direction === 'up') {
            this.sprite.style.backgroundImage = "url(assets/images/hero_attack/hero_attack_up.gif)"
            }
        if (this.direction === 'left') {
            this.sprite.style.backgroundImage = "url(assets/images/hero_attack/hero_attack_left_72.gif)"
        }
        if (this.direction === 'right') {
            this.sprite.style.backgroundImage = "url(assets/images/hero_attack/hero_attack_right_72.gif)"
        }
    }

    this.stopAtk = function(iddleSprite) {
        self.sprite.style.backgroundImage = iddleSprite
    }

    this.knockbackToHero = function (monster) {
        switch(monster.direction) {
            case 'up':
                this.posY -= 100
                this.sprite.style.top = this.posY + 'px'
                break
            case 'down':
                this.posY += 100
                this.sprite.style.top = this.posY + 'px'
                break
            case 'left':
                this.posX += 100
                this.sprite.style.left = this.posX + 'px'
                break
            case 'right':
                this.posX -= 100
                this.sprite.style.left = this.posX + 'px'
                break
        }
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
