import classes from './AllowedIP.module.css'
const AllowedIP = () => {
    let ipList = ['243.43.44', '343.455.55']
    return (
        <div className={classes.ip__wrapper}>
            {ipList.map((el) => {
                return (
                    <div className={classes.ip__item}>
                        <span key={el}>
                            {el}

                        </span>
                        <button className={classes.ip__deleteItem}>-</button>
                    </div>
                )
            })}
            <button className={classes.ip__addItem}></button>



        </div>)

}

export default AllowedIP