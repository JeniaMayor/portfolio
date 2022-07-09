import React from 'react'
import { Link } from "react-router-dom";

interface LikedProfileProps{   
 
   likedUser:likedUser
  
    

    
 
}
interface likedUser{

  userProfile:string, 
  _id: string,
    name:string,
    age:string,
    gender:string,
    profileImg:string,
    description:string,
    password:string,
    username:string,
    img1:string,
    img2:string,
   
}
const LikedProfile = (props:LikedProfileProps) => {
   
    const {likedUser} = props;
    console.log(likedUser)
    
  return (
    
    <div className="likedProfile" style={{backgroundImage:`url(${likedUser.profileImg})`}} >
       

   <Link to={`/Home/${likedUser.userProfile}`} className="likedProfile__linkToPage">{likedUser.username}</Link>
  
  <p className="likedProfile__name">{likedUser.name}</p>
  <div className="likedProfile__age">{likedUser.age}</div>
  <div className="likedProfile__gender">{likedUser.gender}</div>

  
 
   </div>
  )
}

export default LikedProfile