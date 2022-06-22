const passport = require("passport")
const express = require("express")
const router = express.Router()
const { isAuth } = require("../services/users.services.js")
const { getHome, getInvalidPassword, getLogin, getLogout, getProfile, getSignup, getWrong, postLogin, postSignup } = require("../controllers/users.controller.js")

router.get('/', getHome)

router.get('/signup', getSignup)

router.get('/login', getLogin)

router.get('/profile', isAuth, getProfile)

router.get('/logout', isAuth, getLogout)

router.get('/invalidPassword', getInvalidPassword)

router.get('*', getWrong)

router.post("/signup", passport.authenticate('signup', {
    failureRedirect: '/tryagain',
}), postSignup)
router.post("/", passport.authenticate("login", {
    failureRedirect: "/tryagain",
}), postLogin)

module.exports = { router }