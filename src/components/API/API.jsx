import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { ApiContextWrapper } from "../../store";
import Card from "../UI/Card";
import CustomButton from "../UI/CustomButton";
import APISettings from "./APISettings";
import APITable from "./APITable";


const API = () => {
    const api = useSelector(state => state.mainData.data)
    const crossImg = '<img src={checkMark} width="20" height="20"/>'
    const checkMarkImg = '<img src={cross} width="20" height="20"/>'
    const [settings, showSettings] = useState(false)
    const [selectedItem, selectItem ] = useState({})
    const openSettings = (element) => {
        console.log(element)
        showSettings(true)
        selectItem(element)

    }

    return (
        <div className="content__wrapper">
            {!settings &&
                <NavLink to="/create-api" className="create-api-btn"><CustomButton class={"prime"} text={"Create API"} /></NavLink>}
            <Card>
                {!settings && <APITable onOpenSettings={openSettings} />}
                {settings && <APISettings item={selectedItem} />}


            </Card>
        </div>

    )
}

export default API;