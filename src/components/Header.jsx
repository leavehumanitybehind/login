import CustomButton from "./UI/CustomButton";
import "../App.css"

const Header = (props) => {
    return (
        <div  className={`header ${props.sideBar ? "" : "headerWithoutSideBar"}`}>
        <h2>Title </h2>
        <nav>
            <button>Balance</button>
            <button>Notifications</button>
            <CustomButton name={"login"} class={"prime"} text={"Login"}></CustomButton>
        </nav>
        </div>
    )
}
export default Header;