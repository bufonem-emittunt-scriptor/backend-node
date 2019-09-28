require("dotenv").config();
const Koa = require("koa");
const bodyParser = require("koa-bodyparser");

const router = require("./routes");
const mongoose = require("mongoose");
const PORT = 3000;

// authentication
require("./utils/auth");
const passport = require("koa-passport");

app = new Koa();

mongoose.set('useCreateIndex', true);
//'mongodb+srv://mongodb:mongodb@cluster0-yhow8.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }).then((res) => {
    console.log('Connection is successful');
}).catch((e) => {
    throw new Error(e);
});

// sessions
const session = require("koa-session");
app.keys = [process.env.SESSION_SECRET];

app
  .use(session({}, app))
  .use(bodyParser())
  .use(passport.initialize())
  .use(passport.session())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port: ${process.env.PORT}`);
});
