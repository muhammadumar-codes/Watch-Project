
import {Outlet,Navigate} from  "react-router-dom"

export default function Redirect (){

const user=localStorage.getItem("currentUser")
user?<Navigate to={"/"}/>:<Navigate to={"/login"}/>
}