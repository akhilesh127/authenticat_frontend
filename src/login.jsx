import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function login(e) {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post(
        "https://authenticate-backend-1.onrender.com/login",
        { email, password }
      );
      toast.success(res.data.message);
      navigate("/Home");
    } catch (e) {
      toast.error(e.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50 px-4">
      <form
        onSubmit={login}
        className="
          border border-gray-300 rounded-2xl shadow-lg bg-white 
          flex flex-col justify-center items-center 
          p-6 sm:p-8 md:p-10 
          w-full max-w-sm sm:max-w-md md:max-w-lg  ">
        <h1 className="text-2xl font-semibold mb-6 text-blue-600">Login</h1>
        <label className="self-start mb-1 text-gray-700">Email:</label>
        <input type="email"className=" border border-gray-400 rounded px-3 py-2 w-full  focus:outline-none focus:ring-2 focus:ring-blue-400 "onChange={(e) => setEmail(e.target.value)}/>
        <label className="self-start mt-4 mb-1 text-gray-700">Password:</label>
        <input
          type="password"
          className="border border-gray-400 rounded px-3 py-2 w-fullfocus:outline-none focus:ring-2 focus:ring-blue-400 " onChange={(e) => setPassword(e.target.value)}/>
        <button
          type="submit" disabled={loading}className="bg-blue-500 hover:bg-blue-600 text-white font-medium rounded w-full py-2 mt-6 transition  disabled:opacity-50 " >
          {loading ? "Logging in..." : "Log In"}
        </button>
      </form>
    </div>
  );
}

export default Login;
