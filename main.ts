let מהירות_סיבוב = 0
input.onButtonPressed(Button.A, function () {
    if (מהירות_סיבוב <= 40) {
        מהירות_סיבוב += 5
    } else {
        מהירות_סיבוב += 1
    }
})
input.onButtonPressed(Button.B, function () {
    מהירות_סיבוב += -5
})
