 import { Link } from "react-router-dom";
function Nav() {

    return (
        <nav className="flex wrap display  justify-end  items-center p-4 bg-gray-800  ">
            <ul className="flex space-x-5">
                <li className=" bg-blue-300  rounded p-2 text-black">
                    <Link to="/">Sign Up</Link>
                </li>
                <li className=" bg-blue-300  rounded p-2 text-black">
                    <Link to="/login">Log In</Link>
                </li>
            </ul>
        </nav>
    );
}
export default Nav;
