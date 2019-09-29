const Router = require("koa-router");
const router = new Router();
const EventSchema = require("./../models/NewsSchema");

// User routes

router.get("/", async (ctx, next) => {
  try{
    let res = await EventSchema.find({});
    ctx.body = res;
  }catch (e) {
    console.log(e);
  }
});

router.get("/:id", async (ctx, next) => {
  let id = ctx.params.id;
  try{
    let res = await EventSchema.find({id});
    ctx.body = res;
  }catch (e) {
    console.log(e);
  }
});

router.post("/create", async (ctx, next) => {
  let platformId = ctx.request.body.platformId;
  let content = ctx.request.body.description;

  let body = {
    ...ctx.request.body,
    id: new Date().getTime(),
    creationDate: new Date()
  };

  if(!platformId || !content){
    ctx.body = "Не введены обязательные поля 'platformId, content'" ;
    ctx.response.status = 403;
    return;
  }
  try{
    // console.log(EventSchema, 'event');
    let res = await EventSchema.create(body);
    ctx.body = "Пост создан"
  }catch (e) {
    console.log(e);
  }
});

router.delete("/:id", async (ctx, next) => {
  let id = ctx.params.id;
  try{
    let res = await EventSchema.findOneAndRemove({id});
    ctx.body = res;
  }catch (e) {
    console.log(e);
  }
});


module.exports = router;
