var angle = {angle:0,angle_white:0}

function setup(){
    createCanvas(100, 100)
    gsap.to(angle,{
        duration: 1.5,
        angle: 360,
        repeat: -1
    })
}

function draw(){
    background(255)
    push()
    angleMode(DEGREES)
    translate(50,50)
    rotate(angle.angle)
    fill(0)
    rect(-10,-10, 20, 20)
    angleMode(RADIANS)
    pop()
    push()
    angleMode(DEGREES)
    translate(50,50)
    rotate(angle.angle)
    fill(255)
    rect(-5,-5, 10, 10)
    angleMode(RADIANS)
    pop()
}
