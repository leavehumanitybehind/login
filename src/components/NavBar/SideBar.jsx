import classes from "./SideBar.module.css"
import Navigation from "./Navigation"
const SideBar = (props) => {
    return (
        <div className={`${classes.sidebar} ${props.sideBar ? '' : classes.withoutSideBar}`} >
            <div className={classes.navbar__header}>
                {props.sideBar && <h2>Logo</h2>}
                <button onClick={() => props.onChangeSideBar()}>hide</button>
            </div>

            {props.sideBar && <><Navigation />
                <button className={classes.btnExit}>Exit</button> </>}

        </div>
    )
}

export default SideBar;