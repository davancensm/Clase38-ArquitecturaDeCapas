const express = require("express")
const session = require("express-session")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const { logConsole } = require("./src/services/users.services.js")
const { router } = require("./src/router/users.routes.js")

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
    logConsole.info(`Listening on port ${PORT}`)
})

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if (err) throw new Error("Couldn't connect to db ")
    console.log('db connected ')
})

app.use(session({
    store: MongoStore.create({
        mongoUrl: process.env.SESSION,
        ttl: 10000
    }),
    secret: process.env.SESSIONSECRET,
    resave: false,
    saveUninitialized: false

}))

app.use(passport.initialize());
app.use(passport.session());

app.use("/", router)

