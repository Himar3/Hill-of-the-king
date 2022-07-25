function KingGame() {
    //Atributos
    let self = this
    this.canvas = document.getElementById("canvas")
    this.hero = new Hero()
    this.monster = new Enemy()
    this.potion = new Item()
    this.autoTrackingInterval
    this.gameOverInterval
    this.score = document.getElementById('points')
    this.finalScore = document.getElementById('finalPoints')
    this.points = 0
    this.bossCounter = 0
    this.killCounter = 0
    this.kills = document.getElementById('killCounter')
    this.start = document.getElementById('start')
    this.gameOver = document.getElementById('gameover')
    this.title = document.getElementById('title')
    //this.statsButton = document.getElementById('statsButton')
    


    //musica
    this.music = {
        startScreenMusic: new Audio ('assets/music/music_pantalla_de_inicio.mp3'),
        gamePlayMusic: new Audio ('assets/music/music_game_play.mp3'),
        gameOverMusic: new Audio ('assets/music/music_game_over.mp3'),
        soundDeath: new Audio ('assets/music/hero_diying.wav'),
        soundDeathEnemy: new Audio ('assets/music/sound_death_enemy.mp3'),
        soundHit: new Audio ('assets/music/sound_hit.mp3'),
        soundAttack: new Audio ('assets/music/sound_attack_enemy.mp3'),
        soundNoAttack: new Audio ('assets/music/sound_attack.wav'),
        bossSpawn: new Audio ('assets/music/boss_spawn.wav'),
        drinkPot: new Audio ('assets/music/drink_potion.wav')
    }

    self.kills.innerText = self.killCounter

    //Métodos
    this.startGame = function() {
        this.title.style.display = 'block'
        game.music.gamePlayMusic.play ()
        game.music.gamePlayMusic.loop = true
        game.music.gamePlayMusic.volume = 0.02
        this.mapKeys()
        this.hero.generateHero(this.canvas) 
        this.monster.generateEnemy(this.canvas)
        this.monster.autoTracking(this.hero)
        this.potion.generateRedPotion(this.canvas)  
    }
    //no funciona
    
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
                if (this.killCounter >= 3) {
                    self.points += 75
                }
                self.points += 25
                self.bossCounter +=1
                self.killCounter += 1
                self.kills.innerText = self.killCounter
                self.hero.experience += 35
                self.hero.levelUp()
                self.finalScore.innerText = self.points
                self.score.innerText = self.points
                canvas.removeChild(self.monster.sprite)
                clearInterval(this.autoTrackingInterval)
                if (self.bossCounter >= 3){
                    self.bossCounter = 0
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
        this.pos = - 1200
        self.gameOver.style.display = 'block'
        this.waitGameover = setInterval(function() {
            if (self.pos < 0) {
                self.pos += 2
                self.gameOver.style.top = self.pos + 'px'
            }
        }, 5)
    }


}



let game = new KingGame()
let startButton = document.getElementById('startButton')
let retryButton = document.getElementById('retryButton')
let statsButton = document.getElementById('statsButton')
let stats = document.getElementById('stats')
let statsHidden = true 

startButton.addEventListener('click', function() {   
    game.start.style.display = 'none'
    game.startGame()
})

retryButton.addEventListener('click', function() {
    //game.gameOver.style.display = 'none'
    location.reload()
    //game.startGame()
})

statsButton.addEventListener('click', function() {
    if (statsHidden) {
        statsHidden = false
        stats.classList.add('showStats')
    } else {
        statsHidden = true
        stats.classList.remove('showStats')
    }
    
})
