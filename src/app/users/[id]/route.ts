import { userAgent } from "next/server";
import {User} from "../route"

export async function GET(request: Request, {params}:{params:{id:string}}) {
    const {id}=await params;
    const user= User.find((user)=> user.id===parseInt(id));

    return Response.json(user);
    
}