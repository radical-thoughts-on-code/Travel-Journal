import React from "react"
import Travel from "./components/Travel"
import Header from "./components/header"
import data from "./data"

export default function App(){
    console.log(data)
    return (
        <div>
            <Header/>
            <Travel/>
        </div>
    )
}