import axios from "axios";


export const handelLogout = async()=>{
try {
    let logout = await axios.post("https://welcome-charmine-alikhan67595-a5ec3999.koyeb.app/auth/logout",{},{withCredentials:true});
    console.log(logout);
    
} catch (error) {
    console.log(error)
}
return

}