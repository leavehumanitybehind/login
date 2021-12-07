import { useSelector } from "react-redux"
import cross from "../../assets/img/cross.svg"
import checkMark from "../../assets/img/checkMark.svg"

const APITable = (props) => {
    const api = useSelector(state => state.mainData.data)
    const checkMarkImg = <img src={checkMark} width="20" height="20" alt="cross" />
    const crossImg = <img src={cross} width="20" height="20" alt="cross" />

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Available</th>
                    <th>Invoice</th>
                    <th>Withdraw</th>
                    <th>Turnover</th>
                    <th>Deleted</th>
                </tr>

            </thead>

            <tbody>
                {api.map(el => {
                    return (
                        <tr key={el.id} onClick={() => props.onOpenSettings(el)}>
                            <td>{el.id}</td>
                            <td>{el.date}</td>
                            <td>{el.name}</td>
                            <td>{el.available ? checkMarkImg : crossImg}</td>
                            <td>{el.invoice ? checkMarkImg : crossImg}</td>
                            <td>{el.withdraw ? checkMarkImg : crossImg}</td>
                            <td>{el.turnover} USD </td>
                            <td>{el.deleted ? checkMarkImg : crossImg}</td>
                        </tr>
                    )
                })}
            </tbody>

        </table>

    )
}

export default APITable;