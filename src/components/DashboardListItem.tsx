import { FC } from "react"

interface DashboardItemProps {
    itemName: string,
    handleClick: (e: React.MouseEvent, element: string) => void
}


const DashboardListItem:FC<DashboardItemProps> = (props) => {


    const handleOnClick = (e: React.MouseEvent) => {
        props.handleClick(e, props.itemName);
    }

    return(
        <div onClick={handleOnClick}>
            <h1>{props.itemName}</h1>
        </div>
    )
}

export default DashboardListItem