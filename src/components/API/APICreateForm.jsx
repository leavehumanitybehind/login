import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Card from "../UI/Card";
import CustomButton from "../UI/CustomButton";
import CustomCheckbox from "../UI/CustomCheckBox";
import "./API.css"
const APIcreateForm = () => {
    const api = useSelector(state => state.mainData.data)
    const dispatch = useDispatch()
    const history = useHistory()

    const submitData = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        let data = [...formData];
        let newItem = {}
        data.forEach(el => {
            let key = el[0]
            newItem[key] = el[1]

        })
        let arr = []
        newItem.id = Math.random(1, 10000000);
        let date = new Date();
        newItem.date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`


        if (newItem.id && newItem.name && newItem.turnover) {
            arr.push(newItem)
            dispatch({ type: "ADD_DATA", payload: arr })
            history.replace("/api")
        } else {
            console.log('no data')
        }
        console.log(newItem)


    }
    return (
        <div className="content__wrapper">
            <Card>
                <form className="settings__form form" onSubmit={submitData}>
                    <div>
                        <div className="settings__form-wrapper">
                            <div className="form__input-wrapper form__input-wrapper--width">
                                <label htmlFor="name">
                                    Name
                      </label>
                                <input name="name" />
                            </div>
                            <div className="form__input-wrapper form__input-wrapper--width">
                                <label htmlFor="id">
                                    Turnover
                      </label>
                                <input name="turnover" type="number" />
                            </div>
                        </div>
                        <div className="row">


                            <div className="form__input-wrapper form__input-wrapper--width">
                                <label htmlFor="id">
                                    List of allowed IPs
                      </label>
                                <input />
                            </div>


                            <div className="form__input-wrapper-checkbox">
                                <label htmlFor="invoice">
                                    Invoice

                      </label>
                                <CustomCheckbox id={'invoice'} name={'invoice'} />
                            </div>
                            <div className="form__input-wrapper-checkbox">
                                <label htmlFor="withdraw">
                                    Withdraw

                      </label>
                                <CustomCheckbox id={'withdraw'} name={'withdraw'} />
                            </div>
                        </div>
                        <div className="form-btn__wrappers">
                            <CustomButton class={"prime"} text={"Create"} />
                        </div>

                    </div>
                </form>

            </Card>
        </div>

    )
}

export default APIcreateForm;