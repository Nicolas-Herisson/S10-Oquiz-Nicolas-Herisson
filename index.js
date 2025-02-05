import 'dotenv/config';
import express from 'express';
import path from "node:path";
import mainRouter from './app/routers/mainRouter.js';
import errors from './app/middleware/errors.js';
import session from 'express-session';
import adminRouter from './app/routers/adminRouter.js';
import loginRouter from './app/routers/loginRouter.js';
import profileRouter from './app/routers/profileRouter.js';
import quizRouter from './app/routers/quizRouter.js';
import signupRouter from './app/routers/signupRouter.js';
import tagRouter from './app/routers/tagRouter.js';

const app = express();

app.set("views", path.join(import.meta.dirname, "app", "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

//setup session
app.use(session({ 
  secret: 'coucouCKi?', 
  resave: true, 
  saveUninitialized: true,
  cookie: { secure: false, maxAge: 3600000 }}));


app.use(mainRouter);
app.use(adminRouter);
app.use(loginRouter);
app.use(profileRouter);
app.use(quizRouter);
app.use(signupRouter);
app.use(tagRouter);

app.use((req, res, next) => {
    errors[404](req, res);
});

app.listen(process.env.PORT, (req, res) => {
    console.log(`Connected on : http://localhost:${process.env.PORT}`);
});
