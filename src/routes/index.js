const Router = require("koa-router");
const router = new Router();

const auth = require("./AuthCheckController");
const users = require("./UsersController");
const products = require("./ProductsController");
const events = require("./EventsController");
const blackList = require("./BlackListController");

router.use("/auth", auth.routes());
router.use("/users", users.routes());
router.use("/products", products.routes());
router.use("/events", products.routes());
router.use("/blackList", blackList.routes());

module.exports = router;
