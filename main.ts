input.onButtonPressed(Button.A, function () {
    b = 0
})
input.onButtonPressed(Button.B, function () {
    a = 0
})
let a = 0
let b = 0
b = 1
basic.forever(function () {
    while (b == 1) {
        a = 10
        for (let index = 0; index < 10; index++) {
            a += -1
            basic.showNumber(a)
        }
        basic.pause(2000)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.showLeds(`
            . # . # .
            # . . . #
            . . . . .
            # . . . #
            . # . # .
            `)
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    }
})
