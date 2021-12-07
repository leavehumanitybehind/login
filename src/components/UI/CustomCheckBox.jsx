import { useState } from "react";
import classes from "./CustomCheckbox.module.css"
const CustomCheckbox = (props) => {
    const [check, checked] = useState(!!props.value)


    return (
        <div className={classes.switch}>
            <div className={classes.switchDiv}>
                <input type="checkbox" id={props.id} name={props.name}  checked={check} onChange={(e) => checked(e.target.checked) }/>
                <label htmlFor={props.id}></label>
            </div>
    </div>
    )

}
export default CustomCheckbox;