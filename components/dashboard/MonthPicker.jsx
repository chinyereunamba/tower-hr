"use client"

import React, { useState } from "react"
import moment from "moment"
import style from "./Style.module.css"

function MonthPicker({ content }) {
    const [click, setClick] = useState(false)

    const state = {
        allMonths: moment.months(),
    }

    if (click) {
        console.log("Clicked set to true")
    }

    const monthList = (props) => {
        let months = []
        props.map((data) => {
            months.push(data)
        })
        return months
    }

    return (
        <div className="flex flex-col items-start justify-start">
            <span
                className={`${style.picker} rounded-md font-bold py-1.5 px-3`}
                onClick={() => {
                    setClick(!click)
                }}
            >
                {content}
            </span>
            {/* <div
                className={`flex flex-col gap-4 absolute max-w-fit bg-gray-50 py-1.5 px-3 rounded-md top-10`}
            >
                {monthList(state.allMonths).map((month, index) => (
                    <div
                        className="flex justify-between items-center gap-2 text-base font-medium uppercase -tracking-tighter"
                        key={index}
                    >
                        {month}
                    </div>
                ))}
            </div> */}
        </div>
    )
}

export default MonthPicker
