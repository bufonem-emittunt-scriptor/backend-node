require("dotenv").config();
const Router = require("koa-router");
const router = new Router();
const passport = require("koa-passport");
const { isAuthenticated } = require("../utils");
const User = require("./../models/GeneralUser");
const jwt = require("jsonwebtoken");

const saltRounds = 10;

// User routes

/**
 * Login user.
 *
 * @param object				Object containing username and password
 * @returns array 			Array of users
 */
router.post("/login", async (ctx, next) => {
  return passport.authenticate("local", (err, user) => {
    // ctx.body = user;
    if (user === false) {
      ctx.body = { success: false };
      ctx.throw(401);
    } else {
      ctx.body = { success: true };
      return ctx.login(user);
    }
  })(ctx);
  await next();
});

/**
 * Login user.
 *
 * @param object				Object containing username and password
 * @returns array 			Array of users
 */
router.get("/logout", isAuthenticated(), ctx => {
  ctx.logout();
  ctx.redirect("/");
});

/**
 * Get all users.
 *
 * @param
 * @returns array 			Array of users
 */
router.get("/", isAuthenticated(), async (ctx, next) => {
  const allUsers = await User.find();
  ctx.body = allUsers;
  await next();
});

/**
 * Get single user
 *
 * @param integer
 * @returns object|null 	User object or null
 */
router.get("/:id", isAuthenticated(), async (ctx, next) => {
  const user = await User.findById(ctx.params.id);
  if (user) {
    ctx.body = user;
  } else {
    ctx.status = 404;
    ctx.body = `User with id ${ctx.params.id} was not found.`;
  }
});

/**
 * Authentication required
 *
 * @param integer
 * @returns object|null 	User object or null
 */

router.get("/auth/authenticated", async (ctx, next) => {
  const token = jwt.sign(
    {
      _id: ctx.state.user.id,
      role: "user"
    },
    process.env.SECRET_CODE,
    {
      expiresIn: 60000 * 60000 * 500000
    }
  );
  ctx.cookies.set("access_token", `Bearer ${token}`, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 7
  });
  ctx.redirect("/");
});

/**
 * Google authentication route
 *
 * @param
 * @returns
 */
router.get("/auth/google", passport.authenticate("google"));

/**
 * Google authentication callback
 *
 * @param
 * @returns
 */
router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/users/auth/authenticated",
    failureRedirect: "/"
  })
);

/**
 * Facebook authentication route
 *
 * @param
 * @returns
 */
router.get("/auth/facebook", passport.authenticate("facebook"));

/**
 * Facebook authentication callback
 *
 * @param
 * @returns
 */
router.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "/users/auth/authenticated",
    failureRedirect: "/"
  })
);

/**
 * Twitter authentication route
 *
 * @param
 * @returns
 */
router.get("/auth/twitter", passport.authenticate("twitter"));

/**
 * Twitter authentication callback
 *
 * @param
 * @returns
 */
router.get(
  "/auth/twitter/callback",
  passport.authenticate("twitter", {
    successRedirect: "/users/auth/authenticated",
    failureRedirect: "/"
  })
);

/**
 * LinkedIn authentication route
 *
 * @param
 * @returns
 */
router.get("/auth/linkedin", passport.authenticate("linkedin"));

/**
 * LinkedIn authentication callback
 *
 * @param
 * @returns
 */
router.get(
  "/auth/linkedin/callback",
  passport.authenticate("linkedin", {
    successRedirect: "/users/auth/authenticated",
    failureRedirect: "/"
  })
);

/**
 * Create new user
 *
 * @param object 					User object to be created
 * @returns object|exception 				Newly created user object or exception
 */
router.post("/", async (ctx) => {
  // console.log(User, 'user');
  // console.log(ctx.request.body, 'ctx.request.body');
  // ctx.body = ctx.request.body;
  let userName = ctx.request.body.userName;
  let password = ctx.request.body.password;
  let role = ctx.request.body.role;

  if(!userName || !password || !role){
    ctx.body = "Заполните обязательные поля 'userName, password, role'";
    ctx.response.status = 403;
    return;
  }

  try{
    const user = await User.create(ctx.request.body);
    ctx.body = "Пользователь успешно сохранен";
    ctx.response.status = 200;
  }catch (e) {
    console.log(e);
  }
});

/**
 * Update a user
 *
 * @param object					New user data
 * @returns object 				Updated user object
 */
router.patch("/:id", isAuthenticated(), async (ctx, next) => {
  try {
    const updatedUser = await User.update(ctx.params.id, ctx.request.body);
    ctx.body = updatedUser;
  } catch (error) {
    ctx.body = `There have been some errors: ${error}`;
  }
  await next();
});

/**
 * Delete user
 *
 * @param integer					User id
 * @returns object|null 	Deleted user object
 */
router.delete("/:id", isAuthenticated(), async (ctx, next) => {
  try {
    await User.deleteById(ctx.params.id); //should be just disabled
    ctx.body = deleted;
  } catch (error) {
    ctx.body = `There have been some errors: ${error}`;
  }
  await next();
});

module.exports = router;
