import React from "react"
import style from "./Style.module.css"

function Card() {
    return (
        <div className={`${style.card} rounded-md flex flex-col gap-6`}>
            <div className="flex flex-col gap-4 p-3 ">
                <div className="flex flex-col gap-2.5">
                    <h1 className="text-xl">Total Employees</h1>
                    <h1 className="font-bold">330</h1>
                </div>
                <span className="flex gap-2">
                    <small className={`${style.percent} py-0.5 px-1 rounded-sm`}>+13%</small>
                    <small className="p-0.5">increase last year</small>
                </span>
            </div>
            <button className="p-3 rounded-b-md font-medium">View Details</button>
        </div>
    )
}

export default Card
