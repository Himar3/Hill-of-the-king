function Hero() {
    this.sprite
    this.posX = 30 
    this.posY = 30

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
            this.posY += 10
            this.sprite.style.top = this.posY + 'px'
        }
    }
    
    this.moveUp = function() {
        if (this.posY > 0) {
            this.posY -= 10
            this.sprite.style.top = this.posY + 'px'
        }
    }

    this.moveLeft = function() {
        if (this.posX > 0) {
            this.posX -= 10
            this.sprite.style.left = this.posX + 'px'
        }
    }

    this.moveRight = function() {
        if (this.posX < 460) {
            this.posX += 10
            this.sprite.style.left = this.posX + 'px'
        }
    }

    this.attack = function() {
        
    }
}
