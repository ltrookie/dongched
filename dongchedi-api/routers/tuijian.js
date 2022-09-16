const router = require('koa-router')()
const bannersData = require("../data/banners")
const jiaocheData = require("../data/tuijian_jiaoche")

router.get("/banners",async(ctx)=>{
       ctx.body={
        data:bannersData
    }
})

router.get("/jiaoche",async(ctx)=>{
    ctx.body={
     data:jiaocheData
 }
})


module.exports=router.routes();