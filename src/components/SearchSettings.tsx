import { FC } from "react"
import DashboardContentHeader from "./DashboardContentHeader"

interface SearchSettingsProps {

}

const SearchSettings:FC<SearchSettingsProps> = (props) => {
    return (
    <>
        <DashboardContentHeader title="SearchBar Settings"></DashboardContentHeader>
        <p>SearchBar Settings</p>
    </>)
}


export default SearchSettings