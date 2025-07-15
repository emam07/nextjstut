import {revalidatePath} from "next/cache";
type MockUser = {
id: number;
name: string;
};

export default async function UserServer() {
    await new Promise ((resolve)=> setTimeout(resolve, 2000))
    const res= await fetch ("https://687534dfdd06792b9c972c2a.mockapi.io/users");
    const User =await res.json();
    async function addUser(formData: FormData){
        "use server";
        const name = formData.get("name");
        const res= await fetch("https://687534dfdd06792b9c972c2a.mockapi.io/users",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",

            },
            body:JSON.stringify({name}),
        })
        const newUser= await res.json();
        revalidatePath("/mock-user")
        console.log(newUser)

    }

    return (
        <div className="py-10">
            <form action={addUser} className="mb-4">
                <input type="text" name="name" required className="text-center ml-2 text-black bg-white rounded-md p-4"></input>
                <button className="bg-zinc-600 text-center text-white p-4 ml-4 rounded-md hover:bg-purple-700 hover:scale-105 hover:shadow-lg
                    transition-all duration-2000" type="submit"> Add User </button>
            </form>
    
        <div className="grid grid-cols-5 gap-4 py-10">
            {User.map((user : MockUser)=>(
                <div
                    key={user.id}
                    className="p-4 bg-white shadow-md rounded-lg text-zinc-800">
                        {user.name}
            </div>))}
        </div>
        </div>

    );


    
}