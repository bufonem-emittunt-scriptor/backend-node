const Router = require("koa-router");
const router = new Router();
const EventSchema = require("./../models/EventSchema");

// User routes


router.post("/create", async (ctx, next) => {
  let platformId = ctx.request.body.platformId
  let description = ctx.request.body.description
  let startDate = ctx.request.body.startDate
  let endDate = ctx.request.body.endDate

  if(!platformId || !startDate){
    ctx.body = "Не введены обязательные поля 'platformId, startDate'" ;
    ctx.response.status = 403;
  }

});


module.exports = router;
