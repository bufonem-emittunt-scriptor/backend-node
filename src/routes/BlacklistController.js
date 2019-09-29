const dataModel = require("../models/BlackListSchema");
const BLRouter = require("koa-router");
const { isAuthenticated } = require("../utils");
const router = new BLRouter();

router.get("/", async (ctx, next) => {
  const model = await dataModel.find({});
  ctx.body = model;
});

router.get("/:id", async (ctx, next) => {
  const id = ctx.params.id;
  const model = await dataModel.findById(id);
  ctx.body = model;
});

router.get("/findByVolunteer/:id", async (ctx, next) => {
  const id = ctx.params.id;
  const model = await dataModel.find({
    voluenteerId: { id }
  });
  ctx.body = model;
});

router.post("/", isAuthenticated(), async (ctx, next) => {
  // Create New Todo from payload sent and save to database
  const newTodo = new dataModel(ctx.request.body);
  const savedTodo = await newTodo.save();
  ctx.body = savedTodo;
});

router.delete("/:id", isAuthenticated(), async (ctx, next) => {
  const id = ctx.params.id;
  const model = await dataModel.findById(id);

  const deletedTodo = await dataModel.remove();
  ctx.body = deletedTodo;
});

router.put("/:id", isAuthenticated(), async (ctx, next) => {
  const id = ctx.params.id;
  const todo = await dataModel.findById(id);

  const updatedTodo = await todo.save();
  ctx.body = updatedTodo;
});

module.exports = router;
