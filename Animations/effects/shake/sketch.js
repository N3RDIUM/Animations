var shake = {shake:-10}
var tween;

function setup(){
    createCanvas(100, 100)
    tween = gsap.to(shake,{
        duration: 0.05,
        shake: 10,
        repeat: -1,
        yoyo: true,
    })
}

function draw(){
    background(255)
    push()
    translate(50,50)
    fill(0)
    noStroke()
    rect(-10+shake.shake,-10, 20, 20)
    pop()
    if(frameCount % 120 == 0){
        tween.pause()
        shake.shake = -10
        tween = gsap.to(shake,{
            duration: 0.05,
            shake: 10,
            repeat: 100,
            yoyo: true,
            delay: 1
        })
    }
}
