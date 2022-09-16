const router = require('koa-router')();

const {
    fetchCardataById
} = require('../api/cardetail')
//向api服务添加排行榜路由模块
//排行榜菜单

// /ranking/1  params  query ?
router.get('/:id',async(ctx,next)=>{
    const {id} = ctx.params;
    try {
        const data = await fetchCardataById(id)
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