//GHOST:    Green Blue Red Pink
//X:           9    8   9   10
//Y:           8    9   9    9
//Nr on map:   18   21  22   23

var PinkSpirit = {
    goX:0,
    goY:-1,
    posX: 10,
    posY: 9,
    facingdir: 0,
    standingclass: "move-area",
    myclass: "PinkSpirit",
    standingtablevalue: 1,
    number:23,
    isDeath: false
}
var RedSpirit = {
    goX:0,
    goY:1,
    posX: 9,
    posY: 9,
    facingdir: 2,
    standingclass: "move-area",
    myclass: "RedSpirit",
    standingtablevalue: 1,
    number:22,
    isDeath: false  
}
var BlueSpirit = {
    goX:0,
    goY:-1,
    posX: 8,
    posY: 9,
    facingdir: 0,
    standingclass: "move-area",
    myclass: "BlueSpirit",
    standingtablevalue: 1,
    number:21,
    isDeath: false
}
var GreenSpirit = {
    goX:0,
    goY:-1,
    posX: 9,
    posY: 8,
    facingdir: 0,
    standingclass: "move-area",
    myclass: "GreenSpirit",
    standingtablevalue: 1,
    number:18,
    isDeath: false
}