import { NavLink } from "react-router-dom"
import classes from "./NavBar.module.css"
const Navigation = () => {
return (
    <ul className={classes.navigation}>
        <li>
            <NavLink activeClassName={classes.selected} to="/transactions">Transactions</NavLink>
        </li>
        <li>
            <NavLink activeClassName={classes.selected} to="transactions-history">History of Transactions</NavLink>
        </li>
        <li>
            <NavLink activeClassName={classes.selected} to="/static">Static</NavLink>
        </li>
        <li>
            <NavLink activeClassName={classes.selected} to='/api'>API Doc</NavLink>
        </li>
        <li>
            <NavLink activeClassName={classes.selected} to="/settings">Settings</NavLink>
        </li>
        <li>
            <NavLink activeClassName={classes.selected} to="/support">Support</NavLink>
        </li>
        
    </ul>
)

}

export default Navigation;