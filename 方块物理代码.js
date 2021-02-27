var x;
var y;
var z;
world.onTick(({ tick }) => {
if(tick%1==0){
    for (x = 0; x <= 128; x++){    
        for (y = 0; y <= 128; y++){    
            for (z = 0; z <= 128; z++){
                if(voxels.getVoxelId(x,y,z)==voxels.id('sand')&&voxels.getVoxelId(x,y-1,z)==voxels.id('air')&&y>0){
                    voxels.setVoxel(x,y-1,z,voxels.id('sand'));
                    voxels.setVoxel(x,y,z,0);
                }
                if(voxels.getVoxelId(x,y,z)==voxels.id('dirt')&&voxels.getVoxelId(x,y-1,z)==voxels.id('air')&&y>0){
                    voxels.setVoxel(x,y-1,z,voxels.id('dirt'));
                    voxels.setVoxel(x,y,z,0);
                }
                if(voxels.getVoxelId(x,y,z)==voxels.id('grass')&&voxels.getVoxelId(x,y-1,z)==voxels.id('air')&&y>0){
                    voxels.setVoxel(x,y-1,z,voxels.id('grass'));
                    voxels.setVoxel(x,y,z,0);
                }
                if(voxels.getVoxelId(x,y,z)==voxels.id('white_grass')&&voxels.getVoxelId(x,y-1,z)==voxels.id('air')&&y>0){
                    voxels.setVoxel(x,y-1,z,voxels.id('white_grass'));
                    voxels.setVoxel(x,y,z,0);
                }
                if(voxels.getVoxelId(x,y,z)==voxels.id('dirt')&&voxels.getVoxelId(x,y+1,z)==voxels.id('air')){
                    voxels.setVoxel(x,y,z,voxels.id('grass'));
                }
                if(voxels.getVoxelId(x,y,z)==voxels.id('grass')&&voxels.getVoxelId(x,y+1,z)!=voxels.id('air')){
                    voxels.setVoxel(x,y,z,voxels.id('dirt'));
                }
                if(voxels.getVoxelId(x,y,z)==voxels.id('blue_surface_01')&&voxels.getVoxelId(x,y+1,z)==voxels.id('air')){
                    voxels.setVoxel(x,y,z,voxels.id('snowland'));
                }
                if(voxels.getVoxelId(x,y,z)==voxels.id('snowland')&&voxels.getVoxelId(x,y+1,z)!=voxels.id('air')){
                    voxels.setVoxel(x,y,z,voxels.id('blue_surface_01'));
                }
                if(voxels.getVoxelId(x,y,z)==voxels.id('water')&&voxels.getVoxelId(x,y-1,z)==voxels.id('air')){
                    voxels.setVoxel(x,y-1,z,voxels.id('water'));
                }else if(voxels.getVoxelId(x,y,z)==voxels.id('water')&&voxels.getVoxelId(x,y-1,z)!=voxels.id('water')){
                if(voxels.getVoxelId(x,y,z)==voxels.id('water')&&voxels.getVoxelId(x-1,y,z)==voxels.id('air')){
                    voxels.setVoxel(x-1,y,z,voxels.id('water'));
                }
                if(voxels.getVoxelId(x,y,z)==voxels.id('water')&&voxels.getVoxelId(x+1,y,z)==voxels.id('air')){
                    voxels.setVoxel(x+1,y,z,voxels.id('water'));
                }
                if(voxels.getVoxelId(x,y,z)==voxels.id('water')&&voxels.getVoxelId(x,y,z-1)==voxels.id('air')){
                    voxels.setVoxel(x,y,z-1,voxels.id('water'));
                }
                if(voxels.getVoxelId(x,y,z)==voxels.id('water')&&voxels.getVoxelId(x,y,z+1)==voxels.id('air')){
                    voxels.setVoxel(x,y,z+1,voxels.id('water'));
                }}
            }
        }
    }
}
});
