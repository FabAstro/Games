input.onButtonPressed(Button.A, function () {
    if (IconGame == 0) {
        IconGame = 1
    } else {
        IconGame = 0
    }
})
input.onButtonPressed(Button.B, function () {
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
