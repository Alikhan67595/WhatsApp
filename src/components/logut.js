import axios from "axios";
import { api_server_key } from "../server.js";


export const handelLogout = async()=>{
try {
    let logout = await axios.post(`${api_server_key}/auth/logout`,{},{withCredentials:true});
    console.log(logout);
    
} catch (error) {
    console.log(error)
}
return

}