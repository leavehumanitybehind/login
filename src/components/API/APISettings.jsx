import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import Card from "../UI/Card";
import CustomButton from "../UI/CustomButton";
import CustomCheckbox from "../UI/CustomCheckBox";
import "./API.css"
const APISettings = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const api = useSelector(state => state.mainData.data)
    const updateData = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        let data = [...formData];
        let newItem = {}
        data.forEach(el => {
            let key = el[0]
            newItem[key] = el[1]

        })
        let arr = []

        if (newItem.name && newItem.turnover) {
            arr.push(newItem)
            dispatch({ type: "UPDATE_DATA", payload: arr, id:props.item.id })
            history.replace("/api")
        } else {
            console.log('no data')
        }
        console.log(api)


    }
    return (
        <div className="content__wrapper">
            <Card>
                <form className="settings__form " onSubmit={updateData}>
                    <div className="settings__form-wrapper form">
                        <div className="form__input-wrapper">
                            <label htmlFor="id">
                                ID
                      </label>
                            <input name="id" disabled value={props.item.id} />
                        </div>
                        <div className="form__input-wrapper form__input-wrapper--width">
                            <label htmlFor="name">
                                Name

                      </label>
                            <input name="name" />
                        </div>
                        <div className="form__input-wrapper form__input-wrapper--width" >
                            <label htmlFor="id">
                                Turnover

                      </label>
                            <input name="turnover" />
                        </div>
                        <div className="form__input-wrapper">
                            <label htmlFor="id">
                                Date

                      </label>
                            <input name="date" type="date" />
                        </div>
                        <div className="form__input-wrapper-checkbox">
                            <label htmlFor="available">
                                Available</label>
                            <CustomCheckbox id={'available'} name={'available'} />
                        </div>
                        <div className="form__input-wrapper-checkbox">
                            <label htmlFor="invoice">
                                Invoice</label>
                            <CustomCheckbox id={'invoice'} name={'invoice'} />
                        </div>
                        <div className="form__input-wrapper-checkbox">
                            <label htmlFor="withdraw">
                                Withdraw</label>
                            <CustomCheckbox id={'withdraw'} name={'withdraw'} />
                        </div>
                        <div className="form__input-wrapper-checkbox">
                            <label htmlFor="deleted">
                                Deleted</label>
                            <CustomCheckbox id={'deleted'} name={"deleted"} />
                        </div>
                    </div>


                    <div className="form__btn-wrapper">

                        <CustomButton class={"prime"} text={"Save"} />
                        <CustomButton class={"delete"} text={"Delete API"} />
                        <NavLink to='/refresh-accesses'><CustomButton class={"success"} text={"Refresh Accesses"} type={'button'} /></NavLink>
                    </div>
                </form>

            </Card>
        </div>

    )
}

export default APISettings;