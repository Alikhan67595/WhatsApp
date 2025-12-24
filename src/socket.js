import {io} from "socket.io-client";

const socket = io('https://welcome-charmine-alikhan67595-a5ec3999.koyeb.app',{withCredentials:true})   

export default socket;