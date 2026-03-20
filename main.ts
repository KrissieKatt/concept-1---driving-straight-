let driveTime = 1000
let turnTime = 400
let speed = 50
for (let index = 0; index < 4; index++) {
    cuteBot.motors(0, 0)
    basic.pause(driveTime)
    cuteBot.motors(0, 0)
    basic.pause(200)
    cuteBot.motors(speed, 0 - speed)
    basic.pause(turnTime)
    cuteBot.motors(0, 0)
    basic.pause(200)
}
cuteBot.motors(0, 0)
basic.forever(function () {
	
})
