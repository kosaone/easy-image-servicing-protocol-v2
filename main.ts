input.onGesture(Gesture.TiltRight, function () {
    if (Stav == 1) {
        Sprite.change(LedSpriteProperty.X, 1)
        SpriteCurrentX = Sprite.get(LedSpriteProperty.X)
    }
})
input.onGesture(Gesture.LogoDown, function () {
    if (Stav == 1) {
        Sprite.change(LedSpriteProperty.Y, -1)
        SpriteCurrentY = Sprite.get(LedSpriteProperty.Y)
    }
})
function OdesilaciMod () {
    if (Stav == 0) {
        Stav = 1
        Sprite = game.createSprite(0, 0)
    } else if (Stav == 1) {
        X_Cache = Sprite.get(LedSpriteProperty.X)
        Y_Cache = Sprite.get(LedSpriteProperty.Y)
    }
}
input.onButtonPressed(Button.A, function () {
    OdesilaciMod()
})
input.onGesture(Gesture.TiltLeft, function () {
    if (Stav == 1) {
        Sprite.change(LedSpriteProperty.X, -1)
        SpriteCurrentX = Sprite.get(LedSpriteProperty.X)
    }
})
input.onGesture(Gesture.LogoUp, function () {
    if (Stav == 1) {
        Sprite.change(LedSpriteProperty.Y, 1)
        SpriteCurrentY = Sprite.get(LedSpriteProperty.Y)
    }
})
input.onButtonPressed(Button.AB, function () {
    Zpet()
})
input.onButtonPressed(Button.B, function () {
    PrijmaciMod()
})
function Zpet () {
    if (Stav == 0) {
        Stav = 0
        Sprite.delete()
    } else if (Stav == 1) {
        Sprite.move(1)
    } else if (Stav == 2) {
        Stav = 0
    }
}
function PrijmaciMod () {
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
let Y_Cache = 0
let X_Cache = 0
let SpriteCurrentY = 0
let SpriteCurrentX = 0
let Sprite: game.LedSprite = null
let Stav = 0
Stav = 0
basic.forever(function () {
    if ((X_Cache && Y_Cache) != 50) {
        if ((X_Cache && Y_Cache) != (SpriteCurrentX && SpriteCurrentY)) {
            led.plot(X_Cache, Y_Cache)
            X_Cache = 50
            Y_Cache = 50
        }
    }
})
basic.forever(function () {
	
})
