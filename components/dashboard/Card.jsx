import React from "react"
import style from "./Style.module.css"

function Card({title, number, percent, percentDes}) {
    return (
        <div className={`${style.card} rounded-md flex flex-col gap-6`}>
            <div className="flex flex-col gap-4 p-3 ">
                <div className="flex flex-col gap-2.5">
                    <h1 className="text-xl font-medium">{title}</h1>
                    <h1 className="font-bold">{number}</h1>
                </div>
                <span className="flex gap-2">
                    {percent == null ? (
                        ""
                    ) : (
                        <small
                            className={`${style.percent} py-0.5 px-1 rounded-sm`}
                        >
                            {percent}
                        </small>
                    )}

                    <small className={`${style.percent_des} p-0.5`}>{percentDes}</small>
                </span>
            </div>
            <button className="p-3 rounded-b-md font-medium">
                View Details
            </button>
        </div>
    )
}

export default Card
