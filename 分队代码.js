var blue = 0;
var red = 0;
world.onPlayerJoin(async({entity})=>{
    if(blue != red){
        entity.team = blue < red ? 'blue':'red';
    }else{
        entity.team = Math.random() <= 0.5 ? 'blue':'red';
    }
});
