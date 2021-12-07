import { useState } from "react";
import { NavLink } from "react-router-dom";
import Card from "../UI/Card";
import CustomButton from "../UI/CustomButton";
import APISettings from "./APISettings";
import APITable from "./APITable";


const API = () => {
    const [settings, showSettings] = useState(false)
    const [selectedItem, selectItem] = useState({})
    const openSettings = (element) => {
        console.log(element)
        showSettings(true)
        selectItem(element)

    }
    const closeSettings = (element) => {

        showSettings(false)


    }

    return (
        <div className="content__wrapper">
            {!settings &&
                <NavLink to="/create-api" className="create-api-btn"><CustomButton class={"prime"} text={"Create API"} /></NavLink>}

            {!settings && <APITable onOpenSettings={openSettings} />}
              {settings && <Card><APISettings onCloseSettings={closeSettings} item={selectedItem}  /></Card>}

            

        </div>

    )
}

export default API;