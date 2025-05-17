import express from "express";
import dotenv from "dotenv";
import session from "express-session"
import { connectDB } from "./configs/db.js";
import routerPages from "./routers/router.page.js"
import routerAuction from "./routers/router.auction.js"
import routerUser from "./routers/router.user.js"

dotenv.config();


const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));



app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 },
}))

app.use((req, res, next) => {
    res.locals.user = req.session.user;
    next();
})


app.use("/", routerPages)
app.use("/auction", routerAuction)
app.use("/user", routerUser)




app.listen(process.env.PORT, () => {
    connectDB();
    console.log(`Server is running on port http://localhost:${process.env.PORT}`);
});





