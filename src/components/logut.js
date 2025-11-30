import axios from "axios";


export const handelLogout = async()=>{
try {
    let logout = await axios.post("https://whats-app-backend-roan.vercel.app/api/auth/logout",{},{withCredentials:true});
    console.log(logout);
    
} catch (error) {
    console.log(error)
}
return

}