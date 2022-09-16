const router = require('koa-router')()
const partitionData = require("../data/partition")

router.get("/partition",async(ctx)=>{
       ctx.body={
        data:partitionData
    }
})

module.exports=router.routes();