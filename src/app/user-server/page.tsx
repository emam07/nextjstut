import { resolve } from "path";

type User = {
id: number;
name: string;
username: string;
email: string;
phone: string;
};

export default async function UserServer() {
    await new Promise ((resolve)=> setTimeout(resolve, 2000))
    const res= await fetch ("https://jsonplaceholder.typicode.com/users");
    const User =await res.json();

    return (
        <ul className="space-y-4 p-8">
            {User.map((user : User)=>(
                <li
                    key={user.id}
                    className=" bg-purple-600 shadow-md rounded-lg">
                        {user.name} ({user.email})
            </li>))}
        </ul>

    );


    
}