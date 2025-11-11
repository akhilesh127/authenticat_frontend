import { useState } from "react"
import axios from "axios"
import toast from 'react-hot-toast';

function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [password, setPassword] = useState("")
    async function signup(e) {
        e.preventDefault()
        const user ={

            name:name,
            email:email,
            number:number,
            password:password
        }
        try {
            const res = await axios.post("https://authenticate-backend-ayo8.onrender.com/signup",user)
            toast.success(res.data.message)

        } catch (e) {
            toast.error(e.response.data.error)

        }

    }

    return(
        <div className=" flex justify-center items-center h-[100vh] ">

        <form action="" className="border border-black rounded md p-10 bg-blue-100 flex flex-col justify-center items-center w-[30vw] " onSubmit={signup} >
           
            <label htmlFor="" className="m-4 ">name:</label>
            <input type="text"name="name" id="" onChange={(e) => setName(e.target.value)} />
            <br />
            <br />
            <label htmlFor="" className="m-4">email:</label>
            <input type="email"name="email" id="" onChange={(e) => setEmail(e.target.value)} />
            <br />
            <br />
            <label htmlFor="" className="m-4"> number:</label>
            <input type="number" name="number" id="" onChange={(e) => setNumber(e.target.value)} />
            <br />
            <br />
            <label htmlFor="" className="m-4">password:</label>
            <input type="password" name="password" id="" onChange={(e) => setPassword(e.target.value)} />
            <br />
            <br />
            <button className="bg-blue-500 text-white rounded p-2 " type="submit">Sign Up</button>
        </form>
        

        </div>
    )

  

}
export default Signup;