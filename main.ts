input.onButtonPressed(Button.A, function () {
    if (מהירות_סיבוב <= 40) {
        מהירות_סיבוב += 5
    } else {
        מהירות_סיבוב += 1
    }
})
input.onButtonPressed(Button.AB, function () {
    if (הפעלה == 1) {
        הפעלה = 0
    } else {
        הפעלה = 1
    }
    מהירות_סיבוב = 0
})
input.onButtonPressed(Button.B, function () {
    if (מהירות_סיבוב <= 40) {
        מהירות_סיבוב += -5
    } else {
        מהירות_סיבוב += -1
    }
})
input.onGesture(Gesture.Shake, function () {
    מהירות_סיבוב = 0
    הפעלה = 0
})
let עילרוד = 0
let מהירות_סיבוב = 0
let הפעלה = 0
let גילגול = 0
let קבוצת_רדיו = 7
radio.setGroup(קבוצת_רדיו)
radio.sendValue("ג", גילגול)
radio.sendValue("ה", הפעלה)
radio.sendValue("מ.ס", מהירות_סיבוב)
radio.sendValue("ע", עילרוד)
basic.forever(function () {
    גילגול = input.rotation(Rotation.Roll)
    עילרוד = input.rotation(Rotation.Pitch)
    basic.clearScreen()
    if (הפעלה == 1) {
        led.plot(0, 4)
    }
    led.plot(0, 4 - מהירות_סיבוב / 25)
    led.plot(45 + גילגול / 18, 45 + עילרוד / 18)
})
