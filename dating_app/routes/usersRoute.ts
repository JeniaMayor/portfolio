import express from 'express'

const router=express.Router()



import {getUsers,login, getUsersProfile, updateUser,showLoggedInCookie,addUser} from '../controller/usersController'

router
.get('/users',getUsers)
.post('/login',login)
.get('/:ProfilesId', getUsersProfile)
.patch('/updateUsers', updateUser)
.post('/loggedInUser',showLoggedInCookie)
.post('/addUser',addUser)
export default router
