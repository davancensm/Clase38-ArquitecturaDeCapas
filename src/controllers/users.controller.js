const { logConsole, logWarn } = require("../services/users.services.js")

const getHome = async(req, res) => {
    res.sendFile('login.html', {
        root: '../views'
      });
    logConsole.info(`${req.method} to ${req.get('host')}${req.originalUrl}`)
}
const getLogin = async(req, res) => {
    if (req.isAuthenticated()) return res.redirect('/profile')
    res.sendFile('login.html', {
        root: '../views'
      });
    logConsole.info(`${req.method} to ${req.get('host')}${req.originalUrl}`)
}
const getSignup = async(req, res) => {
    if (req.isAuthenticated()) return res.redirect('/profile')
    res.sendFile('signup.html', {
        root: '../views'
      });
    logConsole.info(`${req.method} to ${req.get('host')}${req.originalUrl}`)
}
const getProfile = async(req, res) => {
    res.sendFile('index.html', {
        root: '../views'
      });
    logConsole.info(`${req.method} to ${req.get('host')}${req.originalUrl}`)
}

const getLogout = async(req, res) => {
    if (req.isAuthenticated()) {
        req.logOut()
        res.sendFile('logout.html', {
            root: '../views'
          });
    } else {
        res.redirect('/')
    }
    logConsole.info(`${req.method} to ${req.get('host')}${req.originalUrl}`)
}

const getInvalidPassword = async(req, res) => {
    res.sendFile('wrongUser.html', {
        root: './views'
      });
    logConsole.info(`${req.method} to ${req.get('host')}${req.originalUrl}`)
}

const postSignup = async(req, res) => {
    res.redirect("/profile")
    req.session.isAuth = true
    req.session.user = req.body
    res.sendFile('index.html', {
        root: '../views'
      });
    logConsole.info(`${req.method} to ${req.get('host')}${req.originalUrl}`)
}
const postLogin = async(req, res) => {
    res.redirect('/profile')
    req.session.isAuth = true
    req.session.user = req.body
    res.sendFile('index.html', {
        root: '../views'
      });
    logConsole.info(`${req.method} to ${req.get('host')}${req.originalUrl}`)
}
const getWrong = async(req, res) => {
    logConsole.warn(`${req.method} to ${req.get('host')}${req.originalUrl}`)
    logWarn.warn(`${req.method} to ${req.get('host')}${req.originalUrl}`)
}

module.exports = { getHome, getInvalidPassword, getLogin, getLogout, getProfile, getSignup, getWrong, postLogin, postSignup }
