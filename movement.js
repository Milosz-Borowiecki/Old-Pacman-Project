window.addEventListener('keydown',changeDir);
var pacmanHTML = document.getElementsByClassName("pacman_class")[0];
var pointsVegan;
let side;
let key;
var x=0;
var y=0;
var walls = [0,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
var fearLevel = 0;
var istMoving = true;
var Spirits = [18,21,22,23];
var MovesAreas = [1,19,20,18,21,22,23,null];

function changeDir(side)
{
  key = side.keyCode;

      switch(key)
      {
        case 37:
           istMoving = true;
            for(var i=0;i<walls.length;i++)
            {if (mapDynamic[pacman.posY][pacman.posX-1] === walls[i]){
                    istMoving = false;
                    break;
                } 
            }
            if(istMoving===false)
            {
                break;
            }
            pacman.facingDir = 2;
            x=-1;
            y=0;
            break;
        case 38:
            istMoving = true;
            for(var i=0;i<walls.length;i++)
            {
                if (mapDynamic[pacman.posY-1][pacman.posX] === walls[i]){
                    istMoving = false;
                    break;
                } 
            }
            if(istMoving===false)
            {
                break;
            }
            pacman.facingDir = 3;
            x=0;
            y=-1;
            break;
        case 39:
            istMoving = true;
            for(var i=0;i<walls.length;i++)
            {
                if (mapDynamic[pacman.posY][pacman.posX+1] === walls[i]){
                    istMoving = false;
                    break;
                } 
            }
            if(istMoving===false)
            {
                break;
            }
            pacman.facingDir = 0;
            x=1;
            y=0;
            break;
        case 40:
            istMoving = true;
            for(var i=0;i<walls.length;i++)
            {
                if (mapDynamic[pacman.posY+1][pacman.posX] === walls[i]){
                    istMoving = false;
                    break;
                } 
            }
            if(istMoving===false)
            {
                break;
            }
            pacman.facingDir = 1;
            x=0;
            y=1;
            break;
    }
}

function PacmanRotation()
{
    switch(pacman.facingDir){
        case 0:document.getElementsByClassName("pacman_class")[0].style.transform = "rotate(0deg)";break;
        case 1:document.getElementsByClassName("pacman_class")[0].style.transform = "rotate(90deg)";break;
        case 2:document.getElementsByClassName("pacman_class")[0].style.transform = "rotate(180deg)";break;
        case 3:document.getElementsByClassName("pacman_class")[0].style.transform = "rotate(270deg)";break;
    }
}

function Teleportaion(thischaracter)
{
    if(thischaracter.posX===0 && thischaracter.posY===9 && thischaracter.facingDir===2)
    {
        mapDynamic[thischaracter.posY][thischaracter.posX] = 1;
        thischaracter.posX = 19;
        var characterNow = document.getElementsByClassName("box")[171];
        characterNow.classList.remove(thischaracter.myclass);
        characterNow.classList.add("move-area");
    }
    if(thischaracter.posX===18 && thischaracter.posY===9 && thischaracter.facingDir===0)
    {
        mapDynamic[thischaracter.posY][thischaracter.posX] = 1;
        thischaracter.posX = -1;
        var characterNow = document.getElementsByClassName("box")[189];
        characterNow.classList.remove(thischaracter.myclass);
        characterNow.classList.add("move-area");
    }
}

function move(){
    if(check()){
        Teleportaion(pacman);
        var index = (pacman.posY * 19) + pacman.posX;
        var pacmanNow = document.getElementsByClassName("box")[index];
        if(pacman.facingDir != null){
        switch(pacman.facingDir){
            case 0:
                pacmanNow.classList.remove("pacman_class");
                pacmanNow.classList.add("move-area");
                pacmanNow.style.transform = "rotate(0deg)";
                pacman.posX += x;
                pacman.posY += y;
                var pacmanFuture = document.getElementsByClassName("box")[index+1];
                pacmanFuture.classList.remove(pacmanFuture.classList.item([pacmanFuture.classList.length-1]));
                pacmanFuture.classList.add("pacman_class");
                break;
            case 1:
                pacmanNow.classList.remove("pacman_class");
                pacmanNow.classList.add("move-area");
                pacmanNow.style.transform = "rotate(0deg)";
                pacman.posX += x;
                pacman.posY += y;
                var pacmanFuture = document.getElementsByClassName("box")[index+19];
                pacmanFuture.classList.remove(pacmanFuture.classList.item([pacmanFuture.classList.length-1]));
                pacmanFuture.classList.add("pacman_class");
                break;
            case 2:
                pacmanNow.classList.remove("pacman_class");
                pacmanNow.classList.add("move-area");
                pacmanNow.style.transform = "rotate(0deg)";
                pacman.posX += x;
                pacman.posY += y;
                var pacmanFuture = document.getElementsByClassName("box")[index-1];
                pacmanFuture.classList.remove(pacmanFuture.classList.item([pacmanFuture.classList.length-1]));
                pacmanFuture.classList.add("pacman_class");
                break;
            case 3:
                pacmanNow.classList.remove("pacman_class");
                pacmanNow.classList.add("move-area");
                pacmanNow.style.transform = "rotate(0deg)";
                pacman.posX += x;
                pacman.posY += y;
                var pacmanFuture = document.getElementsByClassName("box")[index-19];
                pacmanFuture.classList.remove(pacmanFuture.classList.item([pacmanFuture.classList.length-1]));
                pacmanFuture.classList.add("pacman_class");
                break;
        }
        }
        mapDynamic[pacman.posY-y][pacman.posX-x] = 1;
        mapDynamic[pacman.posY][pacman.poXs] = 2;
        if(pointsVegan % 1780 == 0)
        {
            CreateMap();
        }
        PacmanRotation();
    }else{
        if(pointsVegan % 1780 == 0)
        {
            CreateMap();
        }
        PacmanRotation();
    }
}

function check(){


    if(fearLevel == 0){
        speedSpirits = 450;
        GreenSpirit.myclass = "GreenSpirit";
        BlueSpirit.myclass = "BlueSpirit";
        RedSpirit.myclass = "RedSpirit";
        PinkSpirit.myclass = "PinkSpirit";
        for(var i = 0;i<Spirits.length;i++){
        if (mapDynamic[pacman.posY+y][pacman.posX+x] == Spirits[i]){
                GameOver();
                return false;
        } 
    }
    }else{
        fearLevel--;
    }
    for(var i = 0;i<MovesAreas.length;i++){
        if (mapDynamic[pacman.posY+y][pacman.posX+x] == MovesAreas[i]){
            break;
        }
        if(i == 7)
        {
            return false;
        }
    }

    switch(mapDynamic[pacman.posY+y][pacman.posX+x])
    {
        case 19:pacman.score += 10;
                pointsVegan += 10;
                score.innerHTML = pacman.score;
                break;
        case 20:
                pacman.score += 100;
                pointsVegan += 100;
                fearLevel += 50;
                GreenSpirit.myclass = "GreenSpiritAfraid";
                BlueSpirit.myclass = "BlueSpiritAfraid";
                RedSpirit.myclass = "RedSpiritAfraid";
                PinkSpirit.myclass = "PinkSpiritAfraid";
                speedSpirits = 100;
                score.innerHTML = pacman.score;
                break;
        case 18:pacman.score += 100;
                var indexSpirit = (GreenSpirit.posY * 19) + GreenSpirit.posX;
                var SpiritNow = document.getElementsByClassName("box")[indexSpirit];
                mapDynamic[GreenSpirit.posY][GreenSpirit.posX] = GreenSpirit.standingtablevalue;
                SpiritNow.classList.remove(SpiritNow.classList.item(SpiritNow.classList.length-1));
                SpiritNow.classList.add(GreenSpirit.standingclass);
                GreenSpirit.isDeath = true;
                score.innerHTML = pacman.score;
                break;
        case 21:pacman.score += 100;
                var indexSpirit = (BlueSpirit.posY * 19) + BlueSpirit.posX;
                var SpiritNow = document.getElementsByClassName("box")[indexSpirit];
                mapDynamic[BlueSpirit.posY][BlueSpirit.posX] = BlueSpirit.standingtablevalue;
                SpiritNow.classList.remove(SpiritNow.classList.item(SpiritNow.classList.length-1));
                SpiritNow.classList.add(BlueSpirit.standingclass);
                BlueSpirit.isDeath = true;
                score.innerHTML = pacman.score;
                break;
        case 22:pacman.score += 100;
                var indexSpirit = (RedSpirit.posY * 19) + RedSpirit.posX;
                var SpiritNow = document.getElementsByClassName("box")[indexSpirit];
                mapDynamic[RedSpirit.posY][RedSpirit.posX] = RedSpirit.standingtablevalue;
                SpiritNow.classList.remove(SpiritNow.classList.item(SpiritNow.classList.length-1));
                SpiritNow.classList.add(RedSpirit.standingclass);
                RedSpirit.isDeath = true;
                score.innerHTML = pacman.score;
                break;
        case 23:pacman.score += 100;
                var indexSpirit = (PinkSpirit.posY * 19) + PinkSpirit.posX;
                var SpiritNow = document.getElementsByClassName("box")[indexSpirit];
                mapDynamic[PinkSpirit.posY][PinkSpirit.posX] = PinkSpirit.standingtablevalue;
                SpiritNow.classList.remove(SpiritNow.classList.item(SpiritNow.classList.length-1));
                SpiritNow.classList.add(PinkSpirit.standingclass);
                PinkSpirit.isDeath = true;
                score.innerHTML = pacman.score;
                break;
    }
    return true;
}

function GameOver()
{
    document.getElementsByClassName("game-over-class")[0].style.display = "flex";
    clearInterval(NewGameValue);
    clearInterval(NewGameValueSpirits);
}