input.onButtonPressed(Button.A, function () {
    if (IconGame == 0) {
        basic.showLeds(`
            # # . . .
            # # # . .
            . # # # .
            . . # # .
            . . . . .
            `)
    }
    if (IconGame == 1) {
        basic.showString("d'autres jeux sont à venir dans les prochaines version")
    }
})
input.onGesture(Gesture.TiltRight, function () {
    if (Ecran1Serpant == 1) {
        basic.showLeds(`
            . # # . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
        Ecran1Serpant = 2
    }
    if (Ecran1Serpant == 2) {
        basic.showLeds(`
            . . # # .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
        Ecran1Serpant = 3
    }
    if (Ecran1Serpant == 3) {
        basic.showLeds(`
            . . . # #
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
        Ecran1Serpant = 4
    }
})
input.onButtonPressed(Button.B, function () {
    if (IconGame == 0) {
        IconGame = 1
    } else {
        IconGame = 0
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (IconGame == 0) {
        basic.showLeds(`
            # # . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
        Ecran1Serpant = 1
    }
})
input.onGesture(Gesture.LogoDown, function () {
    if (Ecran1Serpant == 4) {
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . .
            . . . . .
            . . . . #
            `)
        Ecran1Serpant = 5
    }
    if (Ecran1Serpant == 5) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . . #
            . . . . .
            . . . . #
            `)
        Ecran1Serpant = 6
    }
    if (Ecran1Serpant == 6) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . . . . #
            . . . . #
            `)
        Ecran1Serpant = 7
    }
    if (Ecran1Serpant == 8) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # . . #
            . . . . #
            `)
    }
})
let Ecran1Serpant = 0
let IconGame = 0
basic.showLeds(`
    . # # # .
    # . . . #
    # . . . #
    # . . . .
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    # . . . #
    # . . . #
    # . . . #
    . # # . .
    `)
basic.showLeds(`
    . # # # .
    # . . . #
    # . . . #
    # . . . #
    . # . # .
    `)
basic.showLeds(`
    . # # # .
    # . . . #
    # . . . #
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    # . . . #
    # . . . #
    . . . . #
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    # . . . #
    . . . . #
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    . . . . #
    # . . . #
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    . . # # .
    # . . . #
    # . . . #
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    . # . # .
    # . . . #
    # . . . #
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    . # # . .
    # . . . #
    # . . . #
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    # . . . .
    # . . . #
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    # . . . #
    # . . . .
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    # . . . #
    # . . . #
    # . . . .
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    # . . . #
    # . . . #
    # . . . #
    . # # . .
    `)
basic.showLeds(`
    . # # # .
    # . . . #
    # . . . #
    # . . . #
    . # . # .
    `)
basic.showLeds(`
    . # # # .
    # . . . #
    # . . . #
    # . . . #
    . . # # .
    `)
basic.showLeds(`
    . # # # .
    # . . . #
    # . . . #
    . . . . #
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    # . . . #
    . . . . #
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    . . . . #
    # . . . #
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    . . # # .
    # . . . #
    # . . . #
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    . # . # .
    # . . . #
    # . . . #
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    . # # . .
    # . . . #
    # . . . #
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    # . . . .
    # . . . #
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    # . . . #
    # . . . .
    # . . . #
    . # # # .
    `)
basic.showIcon(IconNames.Happy)
music.playMelody("C5 C5 B B - - - - ", 500)
