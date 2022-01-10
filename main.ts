input.onGesture(Gesture.TiltRight, function () {
    if (Stav == 1) {
        Sprite.change(LedSpriteProperty.X, 1)
    }
})
input.onGesture(Gesture.LogoDown, function () {
    if (Stav == 1) {
        Sprite.change(LedSpriteProperty.Y, -1)
    }
})
function OdesilaciMod () {
    if (Stav == 0) {
        Stav = 2
    } else if (Stav == 1) {
    	
    } else if (Stav == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
}
input.onButtonPressed(Button.A, function () {
    PrijmaciMod()
})
input.onGesture(Gesture.TiltLeft, function () {
    if (Stav == 1) {
        Sprite.change(LedSpriteProperty.X, -1)
    }
})
input.onGesture(Gesture.LogoUp, function () {
    if (Stav == 1) {
        Sprite.change(LedSpriteProperty.Y, 1)
    }
})
input.onButtonPressed(Button.AB, function () {
    Zpet()
})
input.onButtonPressed(Button.B, function () {
    OdesilaciMod()
})
function Zpet () {
    if (Stav == 0) {
        Stav = 0
        Sprite.delete()
    } else if (Stav == 1) {
        Stav = 0
        Sprite.delete()
    } else if (Stav == 2) {
        Stav = 0
    }
}
function PrijmaciMod () {
    if (Stav == 0) {
        Stav = 1
    } else if (Stav == 1) {
        Sprite = game.createSprite(2, 2)
    }
}
let Sprite: game.LedSprite = null
let Stav = 0
Stav = 0
basic.forever(function () {
	
})
