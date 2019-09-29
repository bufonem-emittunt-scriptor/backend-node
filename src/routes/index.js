const Router = require("koa-router");
const router = new Router();

const auth = require("./AuthCheckController");
const users = require("./UsersController");
const products = require("./ProductsController");
const events = require("./EventsController");
const posts = require("./PostsController");
// const blackList = require("./BlacklistController");

router.use("/auth", auth.routes());
router.use("/users", users.routes());
router.use("/products", products.routes());
router.use("/events", events.routes());
router.use("/posts", posts.routes());
// router.use("/blackList", blackList.routes());

module.exports = router;
