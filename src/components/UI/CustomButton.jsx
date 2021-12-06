import "./CustomButton.css"
const CustomButton = (props) => {
    let btnClass = props.class;
    return (
        <button className={'custom-btn ' + btnClass} type={props.type}>
            {props.text}
        </button>
    )
}
export default CustomButton;