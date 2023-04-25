import { FC } from "react"
import style from './dashboardListItem.module.css'

interface DashboardItemProps {
    itemName: string,
    handleClick: (e: React.MouseEvent, element: string) => void
}


const DashboardListItem:FC<DashboardItemProps> = (props) => {


    const handleOnClick = (e: React.MouseEvent) => {
        props.handleClick(e, props.itemName);
    }

    return(
        <div className={style.text} onClick={handleOnClick}>
            {props.itemName}
        </div>
    )
}

export default DashboardListItem