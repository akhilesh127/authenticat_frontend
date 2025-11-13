import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    async function signup(e) {
        e.preventDefault();

        if (!name || !email || !number || !password) {
            toast.error("Please fill in all fields");
            return;
        }

        const user = { name, email, number, password };

        setLoading(true);
        try {
            const res = await axios.post(
                "https://authenticate-backend-1.onrender.com/signup",
                user
            );
            toast.success(res.data.message);

        } catch (e) {
            toast.error(e.response?.data?.error || "Signup failed");
            navigate ("/login");
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className="flex justify-center items-center min-h-screen bg-blue-50 px-4">
            <form
                onSubmit={signup}
                className=" border border-gray-300 rounded-2xl shadow-lg bg-white flex flex-col justify-center items-centerp-6 sm:p-8 md:p-10  w-full max-w-sm sm:max-w-md md:max-w-lg">
                <h1 className="text-2xl font-semibold mb-6 text-blue-600">Sign Up</h1>
                <label className="self-start mb-1 text-gray-700">Name:</label>
                <input type="text" className="border border-gray-400 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 " onChange={(e) => setName(e.target.value)} />
                <label className="self-start mt-4 mb-1 text-gray-700">Email:</label>
                <input  type="email" className=" border border-gray-400 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 " onChange={(e) => setEmail(e.target.value)} />
                <label className="self-start mt-4 mb-1 text-gray-700">Phone Number:</label>
                <input
                    type="tel"className="border border-gray-400 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"onChange={(e) => setNumber(e.target.value)}  />
                <label className="self-start mt-4 mb-1 text-gray-700">Password:</label>
                <input
                    type="password"
                    className="  border border-gray-400 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 " onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit" disabled={loading} className=" bg-blue-500 hover:bg-blue-600 text-white font-mediumrounded w-full py-2 mt-6 transitiondisabled:opacity-50 ">
                    {loading ? "Signing up..." : "Sign Up"}
                </button>
            </form>
        </div>
    );
}
export default Signup;
