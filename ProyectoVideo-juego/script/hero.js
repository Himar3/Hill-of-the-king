function Hero() {
    this.sprite
    this.posX = 30 
    this.posY = 30
    this.strength = 25
    this.direction = 'down'

    this.generateHero = function(canvas) {
        let hero = document.createElement("div")
        hero.setAttribute('id', 'hero')
        hero.style.top = this.posY + 'px'
        hero.style.left = this.posX + 'px'
        canvas.appendChild(hero)
        this.sprite = document.getElementById('hero')
    }

    this.moveDown = function() {
        if (this.posY < 460) {
            this.direction = 'down'            
            this.sprite.style.backgroundImage = "url(assets/images/hero_down.png)"
            this.posY += 10
            this.sprite.style.top = this.posY + 'px'
        }
    }
    
    this.moveUp = function() {
        if (this.posY > 0) {
            this.direction = 'up'
            this.sprite.style.backgroundImage = "url(assets/images/hero_up.png)"
            this.posY -= 10
            this.sprite.style.top = this.posY + 'px'
        }
    }

    this.moveLeft = function() {
        if (this.posX > 0) {
            this.direction = 'left'
            this.sprite.style.backgroundImage = "url(assets/images/hero_left.png)"
            this.posX -= 10
            this.sprite.style.left = this.posX + 'px'
        }
    }

    this.moveRight = function() {
        if (this.posX < 460) { 
            this.direction = 'right'           
            this.sprite.style.backgroundImage = "url(assets/images/hero_right.png)"
            this.posX += 10
            this.sprite.style.left = this.posX + 'px'
        }
    }

    this.attack = function() {
        if(this.direction === 'down') {
            this.sprite.style.width = '70px'
            this.sprite.style.height = '70px'
            this.sprite.style.backgroundImage = "url(assets/images/hero_attack_***.png)"
        }
        if(this.direction === 'up') {
            this.sprite.style.width = '70px'
            this.sprite.style.height = '70px'
            this.sprite.style.backgroundImage = "url(assets/images/hero_attack_***.png)"
        }
        if(this.direction === 'left') {
            this.sprite.style.width = '70px'
            this.sprite.style.height = '70px'
            this.sprite.style.backgroundImage = "url(assets/images/hero_attack/char_attack_left_anim.gif)"
        }
        if(this.direction === 'right') {
            this.sprite.style.width = '70px'
            this.sprite.style.height = '70px'
            this.sprite.style.backgroundImage = "url(assets/images/char_attack_right_anim.gif)"
        }

    }
}
