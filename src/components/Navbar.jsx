import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/items"}>Items</Link>
            </li>
            <li>
                <Link to={"/basket"}>Basket</Link>
            </li>
        </ul>
     );
}
 
export default Navbar;