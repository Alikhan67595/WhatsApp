import {io} from "socket.io-client";

const socket = io('https://whats-app-backend-roan.vercel.app',{withCredentials:true})   

export default socket;