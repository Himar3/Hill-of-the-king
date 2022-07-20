function Enemy() {
    this.sprite
    this.posX = 450 
    this.posY = 220
    this.strength = 25
    this.life = 100
    this.direction = 'down'

    this.generateEnemy = function(canvas) {
        let enemy = document.createElement("div")
        enemy.setAttribute('id', 'enemy')
        enemy.style.top = this.posY + 'px'
        enemy.style.left = this.posX + 'px'
        canvas.appendChild(enemy)
        this.sprite = document.getElementById('enemy')
    }

    /*this.autoTracking = function() {
        if (this.posX)
    }*/
}