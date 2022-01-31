const mapStatic = [[3,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,15],
            [4,19,19,19,19,19,19,19,19,4,20,19,19,19,19,19,19,19,4],
            [4,19,9,8,19,9,0,8,19,6,19,9,0,8,19,9,8,19,4],
            [4,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,4],
            [4,19,9,8,19,5,19,9,0,7,0,8,19,5,19,9,8,19,4],
            [4,19,19,19,19,4,19,19,19,4,19,19,19,4,19,19,19,19,4],
            [10,12,12,15,19,10,0,8,19,6,19,9,0,11,19,3,12,12,11],
            [10,17,17,11,19,4,1,1,1,1,1,1,1,4,19,10,17,17,11],
            [14,13,13,16,19,6,1,1,1,1,1,1,1,6,19,14,13,13,16],
            [19,19,19,19,19,1,1,1,1,1,1,1,1,1,19,19,19,19,19],
            [3,12,12,15,19,5,1,1,1,1,1,1,1,5,19,3,12,12,15],
            [10,13,13,16,19,6,19,9,0,12,0,8,19,6,19,14,13,13,11],
            [4,19,19,19,19,19,19,19,19,4,19,19,19,19,19,19,19,19,4],
            [4,19,9,15,19,9,0,8,19,6,19,9,0,8,19,3,8,19,4],
            [4,20,19,4,19,19,19,19,19,19,19,19,19,19,19,4,19,19,4],
            [10,8,19,6,19,5,19,9,0,12,0,8,19,5,19,6,19,9,11],
            [4,19,19,19,19,4,19,19,19,4,19,19,19,4,19,19,19,19,4],
            [4,19,9,0,0,0,0,8,19,6,19,9,0,0,0,0,8,19,4],
            [4,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,4],
            [14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16]];

var mapDynamic = [[3,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,15],
            [4,19,19,19,19,19,19,19,19,4,20,19,19,19,19,19,19,19,4],
            [4,19,9,8,19,9,0,8,19,6,19,9,0,8,19,9,8,19,4],
            [4,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,4],
            [4,19,9,8,19,5,19,9,0,7,0,8,19,5,19,9,8,19,4],
            [4,19,19,19,19,4,19,19,19,4,19,19,19,4,19,19,19,19,4],
            [10,12,12,15,19,10,0,8,19,6,19,9,0,11,19,3,12,12,11],
            [10,17,17,11,19,4,1,1,1,1,1,1,1,4,19,10,17,17,11],
            [14,13,13,16,19,6,1,1,1,1,1,1,1,6,19,14,13,13,16],
            [19,19,19,19,19,1,1,1,1,1,1,1,1,1,19,19,19,19,19],
            [3,12,12,15,19,5,1,1,1,1,1,1,1,5,19,3,12,12,15],
            [10,13,13,16,19,6,19,9,0,12,0,8,19,6,19,14,13,13,11],
            [4,19,19,19,19,19,19,19,19,4,19,19,19,19,19,19,19,19,4],
            [4,19,9,15,19,9,0,8,19,6,19,9,0,8,19,3,8,19,4],
            [4,20,19,4,19,19,19,19,19,19,19,19,19,19,19,4,19,19,4],
            [10,8,19,6,19,5,19,9,0,12,0,8,19,5,19,6,19,9,11],
            [4,19,19,19,19,4,19,19,19,4,19,19,19,4,19,19,19,19,4],
            [4,19,9,0,0,0,0,8,19,6,19,9,0,0,0,0,8,19,4],
            [4,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,4],
            [14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16]];

//resp point y = 18 AND x = 9
// map y 20 AND x = 19

window.onload = CreateMap;
var map_final = "";

function CreateMap(){
    pacman.score += 10;
    pointsVegan +=10;
    for(let a =0;a<20;a++){
    for(let b =0;b<19;b++){
    mapDynamic[a][b] = mapStatic[a][b];
    }
    }
    mapDynamic[pacman.posY][pacman.posX] = 2;
    mapDynamic[GreenSpirit.posY][GreenSpirit.posX] = 18;
    mapDynamic[BlueSpirit.posY][BlueSpirit.posX] = 21;
    mapDynamic[RedSpirit.posY][RedSpirit.posX] = 22;
    mapDynamic[PinkSpirit.posY][PinkSpirit.posX] = 23;
    GreenSpirit.standingtablevalue =mapStatic[GreenSpirit.posY][GreenSpirit.posX];
    BlueSpirit.standingtablevalue = mapStatic[BlueSpirit.posY][BlueSpirit.posX];
    PinkSpirit.standingtablevalue = mapStatic[PinkSpirit.posY][PinkSpirit.posX];
    RedSpirit.standingtablevalue = mapStatic[RedSpirit.posY][RedSpirit.posX];
    GreenSpirit.isDeath =false;
    BlueSpirit.isDeath =false;
    PinkSpirit.isDeath =false;
    RedSpirit.isDeath =false;
    for(let i=0; i<20;i++)
{
    let text_add ='<div class="row-map">';

    for(let j=0;j<19;j++)
    {
        switch(mapDynamic[i][j])
        {
            case 0:text_add +='<div class="box wall_1"></div>';break;
            case 1:text_add +='<div class="box move-area"></div>';break;
            case 2:text_add +='<div class="box pacman_class"></div>';break;
            case 3:text_add +='<div class="box wall_2"></div>';break;
            case 4:text_add +='<div class="box wall_3"></div>';break;
            case 5:text_add +='<div class="box wall_4"></div>';break;
            case 6:text_add +='<div class="box wall_5"></div>';break;
            case 7:text_add +='<div class="box wall_6"></div>';break;
            case 8:text_add +='<div class="box wall_7"></div>';break;
            case 9:text_add +='<div class="box wall_8"></div>';break;
            case 10:text_add +='<div class="box wall_9"></div>';break;
            case 11:text_add +='<div class="box wall_10"></div>';break;
            case 12:text_add +='<div class="box wall_11"></div>';break;
            case 13:text_add +='<div class="box wall_12"></div>';break;
            case 14:text_add +='<div class="box wall_13"></div>';break;
            case 15:text_add +='<div class="box wall_14"></div>';break;
            case 16:text_add +='<div class="box wall_15"></div>';break;
            case 17:text_add +='<div class="box non-wall"></div>';break;
            case 18:text_add +='<div class="box GreenSpirit"></div>';break;
            case 19:text_add +='<div class="box point"></div>';break;
            case 20:text_add +='<div class="box SpiritSlayerBall"></div>';break;
            case 21:text_add +='<div class="box BlueSpirit"></div>';break;
            case 22:text_add +='<div class="box RedSpirit"></div>';break;
            case 23:text_add +='<div class="box PinkSpirit"></div>';break;
        }
    }
    text_add += '</div>';
    map_final += text_add;
}   
    main_area.innerHTML = map_final;
    map_final = "";
}

