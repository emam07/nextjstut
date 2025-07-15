import { json } from "stream/consumers";

export const User=[
    {id:1 , name:"Jhon Doe"},
    {id:2, name:"Jane Doe"},
    {id:3,name:"Mini Boo"}
]
export async function GET() {
    return Response.json(User);
    
}

export async function POST(request: Request) {
    const user = await request.json();
    const Newuser = {
        id:User.length +1,
        name: user.name
    }
    User.push(Newuser);
    return new Response(JSON.stringify(Newuser),{
        headers:{
            "Content-Type":"application/json"
        },
        status:201, 
    })
    
}

