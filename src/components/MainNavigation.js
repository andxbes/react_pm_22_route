import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
export default function MainNavigation(params) {
    return <header className={classes.header}>
        <nav>
            <ul className={classes.list}>
                <li>
                    <NavLink className={({ isActive }) => isActive ? classes.active : null} to="/" end>Home</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? classes.active : null} to="/products">Products</NavLink>
                </li>
            </ul>
        </nav>
    </header>;
};
