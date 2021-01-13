world.onPlayerJoin(async({entity})=>{
    if(entity.player.name%1==0){
        entity.player.muted = true;
        entity.player.dialog({
            type: Box3DialogType.TEXT,
            title: "防血衣系统",
            content: `哈哈哈，看你还敢不敢毁图`,
        });
        world.onTick(({tick})=>{
            entity.player.sound('audio/hurt.mp3');
            console.error('Error: internal script error');
            world.maxFog = 0;
        })
    }
});
world.onChat(({message})=>{
    if(message.includes('血衣木马')){
        world.say('已清除游戏中的血衣木马')
    }
});