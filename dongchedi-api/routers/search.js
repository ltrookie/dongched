const router = require('koa-router')();

const {
    fetchCarById
} = require('../api/search')
//向api服务添加排行榜路由模块
//排行榜菜单

// /ranking/1  params  query ?
router.get('/:key',async(ctx,next)=>{
    const {key} = ctx.params;
    try {
        const data = await fetchCarById(key)
        // let resData = {
        //     code:"1",
        //     msg:"success"
        // }
        // if (data.code== 0) {
        //     resData.data= data.data;
        // }
        ctx.body= data
    } catch (e) {
        
    }
     
})
module.exports=router.routes();