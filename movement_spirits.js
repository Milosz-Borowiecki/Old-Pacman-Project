var speedSpirits = 450;
function moveSpirits()
{
    if(BlueSpirit.isDeath == false){
    if(BlueSpirit.facingdir == null){
        BlueSpirit.facingdir = Math.floor(Math.random()*4);
        CheckDriections(BlueSpirit);
    }
    if(checkSpirit(BlueSpirit))
    {
        moveSpirit(BlueSpirit);
    }
    }
    if(RedSpirit.isDeath == false){
    if(RedSpirit.facingdir == null){
        RedSpirit.facingdir = Math.floor(Math.random()*4);
        CheckDriections(RedSpirit);
    }
    if(checkSpirit(RedSpirit))
    {
        moveSpirit(RedSpirit);
    }
    }
    if(PinkSpirit.isDeath == false){
    if(PinkSpirit.facingdir == null){
        PinkSpirit.facingdir = Math.floor(Math.random()*4);
        CheckDriections(PinkSpirit);
    }
    if(checkSpirit(PinkSpirit))
    {
        moveSpirit(PinkSpirit);
    }
    }
    if(GreenSpirit.isDeath == false){
    if(GreenSpirit.facingdir == null){
        GreenSpirit.facingdir = Math.floor(Math.random()*4);
        CheckDriections(GreenSpirit);
    }
    if(checkSpirit(GreenSpirit))
    {
        moveSpirit(GreenSpirit);
    }
    }
}

function moveSpirit(thisSpirit)
{
    var indexSpirit = (thisSpirit.posY * 19) + thisSpirit.posX;
    var SpiritNow = document.getElementsByClassName("box")[indexSpirit];
    mapDynamic[thisSpirit.posY][thisSpirit.posX] = thisSpirit.standingtablevalue;
    thisSpirit.posX += thisSpirit.goX;
    thisSpirit.posY += thisSpirit.goY;
    thisSpirit.standingtablevalue = mapDynamic[thisSpirit.posY][thisSpirit.posX];
    mapDynamic[thisSpirit.posY][thisSpirit.posX] = thisSpirit.number;
    switch(thisSpirit.facingdir){
        case 0:
            SpiritNow.classList.remove(SpiritNow.classList.item(SpiritNow.classList.length-1));
            SpiritNow.classList.add(thisSpirit.standingclass);
            var SpiritFuture = document.getElementsByClassName("box")[indexSpirit-19];
            thisSpirit.standingclass = SpiritFuture.classList.item(SpiritFuture.classList.length-1);
            SpiritFuture.classList.remove(SpiritFuture.classList.item(SpiritFuture.classList.length-1));
            SpiritFuture.classList.add(thisSpirit.myclass);
            break;
        case 1:
            SpiritNow.classList.remove(SpiritNow.classList.item(SpiritNow.classList.length-1));
            SpiritNow.classList.add(thisSpirit.standingclass);
            var SpiritFuture = document.getElementsByClassName("box")[indexSpirit+1];
            thisSpirit.standingclass = SpiritFuture.classList.item(SpiritFuture.classList.length-1);
            SpiritFuture.classList.remove(SpiritFuture.classList.item(SpiritFuture.classList.length-1));
            SpiritFuture.classList.add(thisSpirit.myclass);
            break;
        case 2:
            SpiritNow.classList.remove(SpiritNow.classList.item(SpiritNow.classList.length-1));
            SpiritNow.classList.add(thisSpirit.standingclass);
            var SpiritFuture = document.getElementsByClassName("box")[indexSpirit+19];
            thisSpirit.standingclass = SpiritFuture.classList.item(SpiritFuture.classList.length-1);
            SpiritFuture.classList.remove(SpiritFuture.classList.item(SpiritFuture.classList.length-1));
            SpiritFuture.classList.add(thisSpirit.myclass);
            break;
        case 3:
            SpiritNow.classList.remove(SpiritNow.classList.item(SpiritNow.classList.length-1));
            SpiritNow.classList.add(thisSpirit.standingclass);
            var SpiritFuture = document.getElementsByClassName("box")[indexSpirit-1];
            thisSpirit.standingclass = SpiritFuture.classList.item(SpiritFuture.classList.length-1);
            SpiritFuture.classList.remove(SpiritFuture.classList.item(SpiritFuture.classList.length-1));
            SpiritFuture.classList.add(thisSpirit.myclass);
            break;
    }
}

function CheckDriections(thisSpirit)
{
    switch(thisSpirit.facingdir)
    {
        case 0: 
                thisSpirit.goY = -1;
                thisSpirit.goX = 0;
                break;
        case 1: 
                thisSpirit.goY = 0;
                thisSpirit.goX = 1;
                break;
        case 2: 
                thisSpirit.goY = 1;
                thisSpirit.goX = 0;
                break;
        case 3: 
                thisSpirit.goY = 0;
                thisSpirit.goX = -1;
                break;
    }
}

function checkSpirit(thisSpirit)
{
    if ((mapDynamic[thisSpirit.posY+thisSpirit.goY][thisSpirit.posX+thisSpirit.goX]) != 1 && (mapDynamic[thisSpirit.posY+thisSpirit.goY][thisSpirit.posX+thisSpirit.goX]) != 19 && (mapDynamic[thisSpirit.posY+thisSpirit.goY][thisSpirit.posX+thisSpirit.goX]) != 20){
        thisSpirit.facingdir = null;
        return false;
    }
    return true;
}
