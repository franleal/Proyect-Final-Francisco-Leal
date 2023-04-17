const {Router} = require('express')
const router = Router()

const{renderUserRegister,renderloginUser,logOut,loginUser,addUser} = require('../controllers/usersController')

router.get('/register',renderUserRegister)

router.post('/register',addUser)

router.get('/login',renderloginUser)

router.post('/login',loginUser)

router.get('/logout',logOut)

module.exports = router