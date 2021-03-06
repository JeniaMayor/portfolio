import Users from '../models/usersModel'
import JWT from 'jwt-simple'
const secret = process.env.JWT_SECRET

export const getUsers = async (req, res) => {
  try {
    const users = await Users.find({});




    res.send({ ok: true, users });
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }

}

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
   
    if (typeof username === "string" && typeof password === "string") {
      const user = await Users.findOne({ username })
      if (user) {
       
        if (user.password === password) {
          const payload = { username, id: user._id, loggedInUser: true }
          const token = JWT.encode(payload, secret)
        
          res.cookie('userInfo', token, { httpOnly: true })
          res.send({ ok: true, login: true, user })
          return
        }
      }
      throw new Error("username or password are incorrect")
    } else {
      throw new Error("username or password is missing")
    }

  } catch (error) {
    console.error(error.message);
    res.send({ error: error.message });
  }

}



export const getUsersProfile = async (req, res) => {
  try {
    const { userProfile } = req.query;
    const { userInfo } = req.cookies;
    const decoded = JWT.decode(userInfo, secret);
    if (decoded && decoded.id === userProfile) {
      const profileId = await Users.findOne({ _id: userProfile })


      res.send({ profileId, ok: true, cookieLoggedIn: true })

    } else {
      const profileId = await Users.findOne({ _id: userProfile })
      res.send({ profileId, ok: true, cookieLoggedIn: false })
    }
   



  }
  catch (error) {
    console.log(error.error);
    res.send({ error: error.message });
  }

}

export const updateUser = async (req, res) => {
  try {

    const { userProfile, obj } = req.body;
    if (userProfile && obj) {
      const users = await Users.updateOne({ _id: userProfile }, obj)
      

      res.send({ ok: true, users });
    } else {
      throw new Error("profiles/id is missing");
    }
  } catch (error) {
    console.log(error.error);
    res.send({ error: error.message });
  }
}

export const showLoggedInCookie = async (req, res) => {
  try {

    const { userInfo } = req.cookies;
    const decoded = JWT.decode(userInfo, secret);
   
    if (decoded) {
      const loggedInUserObj = await Users.findOne({ _id: decoded.id })


      res.send({ loggedInUserObj, ok: true })

    } else {

      res.send({ error: "can't find user logged in cookie" })
    }

    



  }
  catch (error) {
    console.log(error.error);
    res.send({ error: error.message });
  }

}
export const addUser = async (req, res) => {
  try {

    const { user } = req.body;


    let newUser = new Users(user);
    const result = await newUser.save();
    console.log(newUser);
    const payload = { username: user.username, id: user._id, loggedInUser: true }
    const token = JWT.encode(payload, secret)
    res.cookie('userInfo', token, { httpOnly: true })
    res.send({ ok: true, result });

  } catch (error) {

    console.log(error.error);
    res.send({ error: error.message });

  }

}