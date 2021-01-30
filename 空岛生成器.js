async function generate(){
    console.log('正在绘制地形')
    for(var i=0;i<1200;i++){
        let x = Math.random() * 256 // x坐标
        let z = Math.random() * 256 // z坐标
        let y = 20+Math.random()*20 // y坐标，推荐设置为6
        let h = 2 // 高 0~4
        let r = 2 + Math.random() * 10 //半径 2~7
        cylinder(x,y,z,'rock',r,h)
        await sleep(64)
    }
    sort_out()
    await sleep(64)
}
async function cylinder(cx,cy,cz,vox,radius,height){
    var xend = cx+radius;
    var yend = cy+height;
    var zend = cz+radius;
    for(var x=cx-radius;x<=xend;x++){
        for(var z=cz-radius;z<=zend;z++){
            var dx = x-cx;
            var dz = z-cz;
            if(Math.round(Math.sqrt(dx*dx+dz*dz))<=radius){
                for(var y=cy;y<yend;y++){
                    if(y+3>yend){
                        if(voxels.getVoxel(x,y,z)==voxels.id('air')){
                            if(x>10&&z>10){
                                voxels.setVoxel(x,y,z,vox);
                            }
                        }
                    }
                }
            }
        }
    }
}

//需要在地图放置以下模型：树.vb，花.vb，茂盛的草.vb
async function sort_out(){
    for(var y=20;y<64;y++){//扫描20~64层的格子
        for(var x=0;x<256;x++){
            for(var z=0;z<256;z++){
                if(voxels.getVoxel(x,y,z)!=voxels.id('stone_wall')&&voxels.getVoxel(x,y,z)!=voxels.id('glass')&&voxels.getVoxel(x,y,z)!=voxels.id('lantern_02')){
                // 如果当前格子不为空而它上面那格是空的, 则表示它是复杂地形的表面 
                if(voxels.getVoxel(x,y,z)!=0 && voxels.getVoxel(x,y+1,z)==0){
                    voxels.setVoxel(x,y,z,'grass')// 土块替换成草地
                    if(Math.random()>=0.5){
                        voxels.setVoxel(x,y,z,'dark_grass')
                        if(Math.random()>=0.975){
                            voxels.setVoxel(x,y,z,'green_light')
                        }
                    }
                var rnd = Math.random()
                var cx = x+0.5 // 修正到方块中心的x坐标
                var cz = z+0.5 // 修正到方块中心的z坐标
                if(rnd<0.001){
                    spawn(cx,y+1,cz,'mesh/树.vb',3+2.5*Math.random())
                }else if(rnd<0.002){
                    spawn(cx,y+1,cz,'mesh/花.vb',0.8)
                }else if(rnd<0.005){
                    spawn(cx,y+1,cz,'mesh/茂盛的草.vb',0.8)
                }
            }else if(voxels.getVoxel(x,y,z)!=0&&voxels.getVoxel(x,y-1,z)!=0){
                voxels.setVoxel(x,y,z,'dirt')
            }
            }
        }
    }
}
await sleep(64)

async function correctY(entity){
  await sleep(1)//entity.bounds需要等到下一个tick才会变成真正的值
  entity.position.y += entity.bounds.y//bounds.y是中心点到模型顶部或底部的距离
}

function spawn(x,y,z,meshName,scale){
  const meshScale = scale/16 //默认模型方块大小倍数为地图方块的1/16
  const entity = world.createEntity({
    mesh:meshName,//模型名
    collides:false,//能碰撞
    fixed:true,//固定
    gravity:false,// 受重力影响
    meshScale:[meshScale,meshScale,meshScale],//xyz放大倍数
    position:[x,y,z],//位置坐标
  })
  if(meshName=='mesh/树.vb'){
    entity.addTag('树')
  }
  correctY(entity)
  return entity
}
}
generate();
