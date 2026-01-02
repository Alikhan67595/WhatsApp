import {io} from "socket.io-client";
import { api_server_key } from "./server";

const socket = io(`${api_server_key}`,{withCredentials:true})   

export default socket;