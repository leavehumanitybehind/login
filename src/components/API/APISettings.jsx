import { useState } from "react";
import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import CustomButton from "../UI/CustomButton";
import CustomCheckbox from "../UI/CustomCheckBox";
import "./API.css"
const APISettings = (props) => {
    const [nameVal, setName] = useState(props.item.name)
    const [turnoverVal, setTurnover] = useState(props.item.turnover)
    const [date, setDate] = useState(props.item.date)
    const dispatch = useDispatch()
    const updateData = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        let data = [...formData];
        let newItem = {}
        data.forEach(el => {
            let key = el[0]
            newItem[key] = el[1]
        })
        if (newItem.name && newItem.turnover) {
            dispatch({ type: "UPDATE_DATA", payload: { ...newItem, id: props.item.id } })
            props.onCloseSettings()

        } else {
            console.log('no data')
        }


    }
    return (
        <div className="content__wrapper">
            <Card>
                <form className="settings__form " onSubmit={updateData}>
                    <div className="settings__form-wrapper form">
                        <div className="form__input-wrapper">
                            <label htmlFor="id">ID</label>
                            <input name="id" disabled value={props.item.id} />
                        </div>
                        <div className="form__input-wrapper form__input-wrapper--width">
                            <label htmlFor="name">Name</label>
                            <input name="name" value={nameVal} onChange={(event) => setName(event.target.value)} />
                        </div>
                        <div className="form__input-wrapper form__input-wrapper--width" >
                            <label htmlFor="id">Turnover</label>
                            <input name="turnover" value={turnoverVal} onChange={(event) => setTurnover(event.target.value)} />
                        </div>
                        <div className="form__input-wrapper">
                            <label htmlFor="id">Date</label>
                            <input name="date" type="date" value={date} onChange={(event) => setDate(event.target.value)} />
                        </div>
                        <div className="form__input-wrapper-checkbox">
                            <label htmlFor="available">Available</label>
                            <CustomCheckbox id={'available'} name={'available'} value={props.item.available} />
                        </div>
                        <div className="form__input-wrapper-checkbox">
                            <label htmlFor="invoice">Invoice</label>
                            <CustomCheckbox id={'invoice'} name={'invoice'} value={props.item.invoice} />
                        </div>
                        <div className="form__input-wrapper-checkbox">
                            <label htmlFor="withdraw">
                                Withdraw</label>
                            <CustomCheckbox id={'withdraw'} name={'withdraw'} value={props.item.withdraw} />
                        </div>
                        <div className="form__input-wrapper-checkbox">
                            <label htmlFor="deleted">Deleted</label>
                            <CustomCheckbox id={'deleted'} name={"deleted"} value={props.item.deleted} />
                        </div>
                    </div>


                    <div className="form__btn-wrapper">
                        <CustomButton class={"prime"} text={"Save"} />
                        <CustomButton class={"delete"} text={"Delete API"} type={'button'} />
                        <CustomButton class={"success"} text={"Refresh Accesses"} type={'button'} />
                    </div>
                </form>

            </Card>
        </div>

    )
}

export default APISettings;