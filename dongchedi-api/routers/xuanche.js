const router = require('koa-router')()
const carbrandData = require("../data/carbrand")
const hotcatData = require("../data/xuanche_hotcar")


router.get("/carbrand",async(ctx)=>{
       ctx.body={
        data:carbrandData
    }
})

router.get("/hotcar",async(ctx)=>{
    ctx.body={
     data:hotcatData
 }
})




module.exports=router.routes();