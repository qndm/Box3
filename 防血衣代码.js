world.addZone({
    selector: '.血衣',
    bounds: {
        lo: [0, 0, 0],
        hi: [128, 128, 128],
    },
    fogEnabled: true,
    fogColor: new Box3RGBColor(0, 0, 0),
    fogDensity: 0.05,
});
world.onPlayerJoin(async({entity})=>{
    if(entity.player.name%1==0){
        entity.player.muted = true;
        entity.addTag('血衣')
        entity.player.dialog({
            type: Box3DialogType.TEXT,
            title: "防血衣系统",
            content: `哈哈哈，看你还敢不敢毁图`,
        });
        world.onTick(async({tick})=>{
            entity.player.sound('audio/hurt.mp3');
            console.error('Error: internal script error');
            world.maxFog = 0;
            entity.player.muted = true;
            entity.position = new Box3Vector3(64,64,64);
        });
    }
});
world.onChat(({message})=>{
    if(message.includes('血衣木马')){
        world.say('已清除游戏中的血衣木马');
    }
});
