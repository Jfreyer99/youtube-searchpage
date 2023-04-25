import { FC } from "react"
import DashboardContentHeader from "./DashboardContentHeader"

interface ScrapingProps {
    
}

const Scraping:FC<ScrapingProps> = (props) => {
    return (
    <>
        <DashboardContentHeader title="Scraping"></DashboardContentHeader>
        <p>Getting started with sending request to the web scraper</p>
    </>)
}

export default Scraping