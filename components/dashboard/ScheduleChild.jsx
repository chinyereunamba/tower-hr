import React from "react"
import style from "./Style.module.css"

function ScheduleChild({date, des, day, time}) {
    return (
        <div className={`${style.event} flex justify justify-between items-center mt-5`}>
            <div className="flex items-center gap-3.5">
                <div
                    className={`${style.date} font-bold px-3.5 py-1 flex flex-col justify-center items-center rounded-md`}
                >
                    <p>{ day }</p>
                    <p>{ date }</p>
                </div>
                <div className={`${style.des}`}>
                    <p className="font-medium text-lg">{ des }</p>
                    <small>{ time }</small>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <span className="cursor-pointer">
                    <img src="check.svg" alt="" />
                </span>
                <span className="cursor-pointer">
                    <img src="options.svg" alt="" />
                </span>
            </div>
        </div>
    )
}

export default ScheduleChild
