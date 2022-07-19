let canvas = document.getElementById("canvas")
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


