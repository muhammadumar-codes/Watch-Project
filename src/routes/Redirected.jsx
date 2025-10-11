

import {Outlet,Navigate} from  "react-router-dom"
// if the user is already login it  goes to home page else outlet the pages of registration or login 
export default function Redirect (){
const user=localStorage.getItem("currentUser")
return user? <Navigate to={"/"} /> :<Outlet/>
}