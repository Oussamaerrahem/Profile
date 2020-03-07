import React  from 'react';
import Mybutton from "./Mybutton.js";
import Photo from "./Photo.js";
import image2 from "./image2.png";
import Profile from "./Profile.js"
import Name from "./Name.js";


function App () 
{
const user = 
{
  photo: image2,

	Name:{firstName:"Oussama", lastName:"Errahem"},

	profileLink:"https://www.facebook.com",

}
  
  return (
    <div>
      <p>{user.Name.firstName}</p>
      <p>{user.Name.lastName} </p>
      <img src={user.photo}></img>
      <div>
       <button onClick={()=>{window.location = user.profileLink}} style={{backgroundColor:"blue"}}>My Facebook</button>
 </div>
      

      
      
      </div>
    
    
   

  )
}

export default App;
