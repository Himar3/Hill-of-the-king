/*let canvas = document.getElementById("canvas")
let score = document.getElementById("score")
let life = document.getElementById("life")
let direction = 'down'
 
function GameStart() {
    this.score = 0,
    this.life = 100,
    this.HeroGen(),
    this.Enemy = new EnemyGen(),
}

function Hero() {
    this.life = 100,
    this.attack = 25,
    this.movement = new HeroMov,
    this.range = 10,
    this.posX =
    this.posY =
}

function HeroGen() {
    this.hero = document.createElement("div"),
    this.hero.setAttribute(id, 'hero'),
    this.hero.setAttribute(top, 0 + 'px'),
    this.hero.setAttribute(left, 0 + 'px'),
    canvas.appendChild(hero)
    
    this.survivor = new Hero(),
    
}

function HeroMov(survivor) {
    
    this.moveUp = function(e) {
        e.addEventListener(keydown)
        direction = 'up'
        this.Hero.posY--
    }
}
function score() {
     
}

HeroGen()
*/

function KingGame() {
    self = this
    this.canvas = document.getElementById("canvas")
    this.hero = new Hero()
    this.monster = new Enemy()
    

    this.startGame = function() {
        this.hero.generateHero(this.canvas) 
        this.monster.generateEnemy(this.canvas)
    }

    this.damage = function() {
        self.hero.attack()
        //ajustar el tamaño del div del enemigo en la función según tamaño final
        if (self.hero.posX + 70 <= self.monster.posX && self.hero.posX >= self.monster.posX + 40 
            || self.hero.posY + 70 <= self.monster.posY && self.hero.posY >= self.monster.posY + 40) {
            console.log (self.monster.life)
            self.monster.life -= self.hero.strength
            console.log (self.monster.life)
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
                self.damage()
            }
        })    
    }

}

let game = new KingGame()
game.startGame()
game.mapKeys()

