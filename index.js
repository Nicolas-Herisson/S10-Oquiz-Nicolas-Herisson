import 'dotenv/config';
import express from 'express';
import path from "node:path";
import mainRouter from './app/routers/mainRouter.js';
import errors from './app/middleware/errors.js';
import session from 'express-session';
import adminRouter from './app/routers/adminRouter.js';

const app = express();

app.set("views", path.join(import.meta.dirname, "app", "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}))
app.use(
    session({
      secret: "Les Skadi sont des fifous", // String qui permet de créer un token
      resave: true, // Ajout d'une sauvegarde automatique
      saveUninitialized: true, // Une sauvegarde automatique de la session au lancement
      cookie: {
        secure: false, // nous sommes en HTTP, donc pas le choix
        maxAge: 1000 * 60 * 60, // 1000 millisecondes = 1 seconde * 60 * 60 = 1 heure
      },
    })
  );

app.use(mainRouter);
app.use(adminRouter)
app.use((req, res, next) => {
    errors[404](res);
});

app.listen(process.env.PORT, (req, res) => {
    console.log(`Connected on : http://localhost:${process.env.PORT}`);
});
