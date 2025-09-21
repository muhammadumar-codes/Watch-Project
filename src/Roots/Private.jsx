import {Outlet} from "react-router-dom"
import { Navigate } from "react-router-dom"


export  default function Private (){


const user=localStorage.getItem("currentUser")
return user?<Outlet/>:<Navigate to="/login"/>;
  
}