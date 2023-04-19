let מהירות_סיבוב = 0
let גילגול = 0
let עילרוד = 0
input.onButtonPressed(Button.A, function () {
    if (מהירות_סיבוב <= 40) {
        מהירות_סיבוב += 5
    } else {
        מהירות_סיבוב += 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (מהירות_סיבוב <= 40) {
        מהירות_סיבוב += -5
    } else {
        מהירות_סיבוב += -1
    }
})
basic.forever(function () {
    גילגול = input.rotation(Rotation.Roll)
    עילרוד = input.rotation(Rotation.Pitch)
})
