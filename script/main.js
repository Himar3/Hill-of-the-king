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
    this.start = document.getElementById('start')
    this.gameOver = document.getElementById('gameover')
    this.title = document.getElementById('title')
    //this.statsButton = document.getElementById('statsButton')
    //this.stats = document.getElementById('stats')
    //musica
    this.music = {
        startScreenMusic: new Audio ('assets/music/music_pantalla_de_inicio.mp3'),
        gamePlayMusic: new Audio ('assets/music/music_game_play.mp3'),
        gameOverMusic: new Audio ('assets/music/music_game_over.mp3'),
        soundDeath: new Audio ('assets/music/sound_death.mp3'),
        soundDeathEnemy: new Audio ('assets/music/sound_death_enemy.mp3'),
        soundHit: new Audio ('assets/music/sound_hit.mp3'),
        soundAttack: new Audio ('assets/music/sound_attack_enemy.mp3'),
        soundNoAttack: new Audio ('assets/music/sound_attack.wav'),
    }


    //Métodos
    this.startGame = function() {
        this.mapKeys()
        this.title.style.display = 'block'
        game.music.gamePlayMusic.play ()
        game.music.gamePlayMusic.loop = true
        game.music.gamePlayMusic.volume = 0.01
        this.hero.generateHero(this.canvas) 
        this.monster.generateEnemy(this.canvas)
        this.monster.autoTracking(this.hero)    
    }

    /*statsButton.addEventListener('click', function() {
        if (this.stats.style.visibility === hidden) {
            this.stats.style.visibility === collapse
        }
        if (this.stats.style.visibility === collapse) {
            this.stats.style.visibility === hidden
        }
    })*/

    this.knockBackToEnemy = function() {
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
                this.monster.posX -= 50
                this.monster.sprite.style.left = this.monster.posX + 'px'
                break
            case 'right':
                this.monster.posX += 50
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
            game.music.soundAttack.play ()
            this.knockBackToEnemy()
            self.monster.isDead()
            if (self.monster.die === true) {
                game.music.soundDeathEnemy.play ()
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
                self.waitCounter = setTimeout(self.monster.autoTracking(self.hero), 2000)           
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

    this.gameOverAnimation = function () {
        //canvas.querySelectorAll('canvas > *').removeChild
        game.music.gamePlayMusic.pause()
        game.music.gameOverMusic.play()
        this.pos = - 1500
        self.gameOver.style.display = 'block'
        this.waitGameover = setInterval(function() {
            if (self.pos < 0) {
                self.pos += 2
                self.gameOver.style.top = self.pos + 'px'
            }
        }, 8)
    }


}



let game = new KingGame()
let startButton = document.getElementById('startButton')
let retryButton = document.getElementById('retryButton')

this.startButton.addEventListener('click', function() {   
    game.start.style.display = 'none'
    game.startGame()
})

this.retryButton.addEventListener('click', function() {
    //game.gameOver.style.display = 'none'
    location.reload()
    //game.startGame()
})
//HAY QUE HACER DESPARECER LA PANTALLA DE INICIO Y GAMEOVER AL PULSAR EL BOTON!!!
//PROBAR A AÑADIR CLASE EN CSS UNA CON DISPLAY: BLOCK Y OTRA CON DIPLAY: NONE Y
//CAMBIAR LA CLASE EN JS AL APRETAR EL BOTÓN

