let number_of_tests = 0;
let qualified_number = 0;
world.onTick(async({tick,prevTick,elapsedTimeMS,skip})=>{
    number_of_tests ++;
    if(!skip){
        qualified_number ++;
    }
    if(skip){
        console.error(`时刻${tick}\n上一时刻${prevTick}\n间隔${elapsedTimeMS/1000}秒\n延迟${skip}\n延迟数${number_of_tests-qualified_number}\n--------------------`);
    }else{
        console.log(`时刻${tick}\n上一时刻${prevTick}\n间隔${elapsedTimeMS/1000}秒\n延迟${skip}\n延迟数${number_of_tests-qualified_number}\n--------------------`);
    }
});
