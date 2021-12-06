import classes from "./CustomCheckbox.module.css"
const CustomCheckbox = (props) => {
    return (
        <div className={classes.switch}>
            <div className={classes.switchDiv}>
                <input type="checkbox" id={props.id} name={props.name} />
                <label htmlFor={props.id}></label>
            </div>
    </div>
    )

}
export default CustomCheckbox;