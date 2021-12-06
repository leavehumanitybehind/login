import { useState } from "react"
import classes from "./NavBar.module.css"
import Navigation from "./Navigation"
import "../../App.css"
const NavBar = (props) => {

    return (
        <div  className={`sidebar ${props.sideBar ? "withSideBar" : "withoutSideBar"}`} >
            <div className={classes.navbar__header}>
                {props.sideBar && <h2>Logo</h2>}
                <button onClick={() => props.onChangeSideBar()}>hide</button>
            </div>

            {props.sideBar && <><Navigation />
                <button className={classes.btnExit}>Exit</button> </>}

        </div>
    )
}

export default NavBar;