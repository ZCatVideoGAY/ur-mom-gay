sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    info.startCountdown(1.5)
    Pizza.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
})
let Pizza: Sprite = null
scene.setBackgroundColor(8)
let mySprite = sprites.create(img`
5 5 5 5 5 5 5 5 5 5 5 . . . . . 
5 5 d d d d d d d d d d . . . . 
5 d d d d d 8 8 d d d d . . . . 
d d d d d d 8 1 d d d f . . . . 
d d d d d d d d d d . . . . . . 
d d d d d d d 2 2 2 . . . . . . 
d d d d d d 2 2 1 1 . . . . . . 
d d d d d 2 2 1 . . . . . . . . 
d d d d d 2 1 . 3 3 3 . . . . . 
d d d d d 2 1 3 3 3 3 3 . . . . 
d d d d d 2 2 1 3 . . . . . . . 
d d d d d d 2 2 1 1 . . . . . . 
. d d d d d d 2 2 2 . . . . . . 
. . d d d d d d d d . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
Pizza = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f f f . 
. . . . . . . . . . 5 5 5 f f . 
. . . . . . . . 5 5 5 5 5 5 5 . 
. . . . . 5 5 5 5 5 5 5 5 5 . . 
. . . . 5 5 5 5 5 5 5 5 . . . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
. . . 5 5 5 5 5 5 5 . . . . . . 
. . . 5 5 5 5 5 5 5 . . . . . . 
. . 5 5 5 5 5 5 . . . . . . . . 
. . 5 5 5 5 5 5 . . . . . . . . 
. . 5 5 5 5 5 . . . . . . . . . 
. . 5 5 5 5 . . . . . . . . . . 
. . f f 5 5 . . . . . . . . . . 
. f f f 5 . . . . . . . . . . . 
. f f f . . . . . . . . . . . . 
`, SpriteKind.Food)
