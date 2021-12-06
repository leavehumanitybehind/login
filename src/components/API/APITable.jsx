import { useSelector } from "react-redux"
import cross from "../../assets/img/cross.svg"
import checkMark from "../../assets/img/checkMark.svg"

const APITable = (props) => {
    const api = useSelector(state => state.mainData.data)
    return (
        <table>
            <thead>
                <th>ID</th>
                <th>Date</th>
                <th>Name</th>
                <th>Available</th>
                <th>Invoice</th>
                <th>Withdraw</th>
                <th>Turnover</th>
                <th>Deleted</th>
            </thead>

            <tbody>
                {api.map(el => {
                    return (
                        <tr onClick={() => props.onOpenSettings(el)}>
                            <td>{el.id}</td>
                            <td>{el.date}</td>
                            <td>{el.name}</td>
                            <td>{el.available ? <img src={checkMark} width="20" height="20" /> : <img src={cross} width="20" height="20" />}</td>
                            <td>{el.invoice ? <img src={checkMark} width="20" height="20" /> : <img src={cross} width="20" height="20" />}</td>
                            <td>{el.withdraw ? <img src={checkMark} width="20" height="20" /> : <img src={cross} width="20" height="20" />}</td>
                            <td>{el.turnover} USD </td>
                            <td>{el.deleted ? <img src={checkMark} width="20" height="20" /> : <img src={cross} width="20" height="20" />}</td>
                        </tr>
                    )
                })}
            </tbody>

        </table>

    )
}

export default APITable;