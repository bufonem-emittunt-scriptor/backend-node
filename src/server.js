require("dotenv").config();
const Koa = require("koa");
const bodyParser = require("koa-bodyparser");

const router = require("./routes");
const mongoose = require("mongoose");
const MongoStore = require("mongoose");
const PORT = 3000;

// authentication
require("./utils/auth");
const passport = require("koa-passport");

const cors = require("koa-cors");

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

app.use(cors({}));
app.use(session({}, app));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());


app.listen(process.env.PORT, () => {
  console.log(`Server listening on port: ${process.env.PORT}`);
});
