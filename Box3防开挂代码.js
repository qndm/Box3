world.onTick(() => {
    world.querySelectorAll('player').forEach(entity => {
        if (entity.player.moveState == Box3PlayerMoveState.FLYING && !entity.player.canFly) {
            entity.player.directMessage('检测到用户开挂行为');//这个可以自己改，下面那个同理
        }
        var _0 = false, y = Math.floor(entity.position.y - 2);
        for (let x = Math.floor(entity.position.x - 1); x < Math.ceil(entity.position.x + 1); x++) {
            for (let z = Math.floor(entity.position.z - 1); z < Math.ceil(entity.position.z + 1); z++) {
                if (voxels.getVoxelId(x, y, z) != 0) _0 = true;
            }
        }
        if (!_0 && entity.player.moveState != Box3PlayerMoveState.FALL && entity.player.moveState != Box3PlayerMoveState.JUMP && entity.player.moveState != Box3PlayerMoveState.DOUBLE_JUMP && entity.player.moveState != Box3PlayerMoveState.GROUND && entity.player.moveState != Box3PlayerMoveState.FLYING) {
            entity.player.directMessage('检测到用户开挂行为');
        }
    });
});
//吐槽一句：box3plus的飞行做的真的364（water）
