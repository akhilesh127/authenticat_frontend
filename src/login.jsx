import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    async function login(e) {
        e.preventDefault()
        const user = {
            email: email,
            password: password
        }
        try {
            const res = await axios.post("https://authenticate-backend-ayo8.onrender.com/login", user)
            toast.success(res.data.message)
            navigate("/Home");
        } catch (e) {
            toast.error(e.response.data.message)
        }
    }

    return(
        <div className="flex justify-center items-center h-[100vh]">
            
        <form action="" className="border border-black rounded md p-10 bg-blue-100 flex flex-col justify-center items-center w-[30vw]" onSubmit={login}>
            <label htmlFor="" className="m-4">Email:</label>
            <input type="email"name=""id="" onChange={(e) => setEmail(e.target.value)} />
            <br />
            <label htmlFor="" className="m-4">Password:</label>
            <input type="password" name="" id="" onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button className="bg-blue-500 text-white rounded p-2" type="submit">Log In</button>
        </form>
        </div>
    )
}
export default Login;
