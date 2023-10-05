"use client"

import React, { useState } from "react"
import moment from "moment"
import Title from "./Title"
import style from "./Style.module.css"

function Calendar() {
    const state = {
        allMonths: moment.monthsShort(),
        displayMonth: moment.months(),
    }
    const [dateObject, setDatObject] = useState(moment())
    const [month, setMonth] = useState("")
    const [monthIndex, setMonthIndex] = useState(dateObject.get("month"))
    const [showMonths, setShowMonths] = useState(false)

    const weekdayshort = moment.weekdaysShort()

    const days = weekdayshort.map((day) => {
        return <div key={day}>{day}</div>
    })

    const firstDayOfMonth = () => {
        let firstDay = moment(dateObject).startOf("month").format("d")
        return firstDay
    }

    let blanks = []
    for (let i = 0; i < firstDayOfMonth(); i++) {
        blanks.push(
            <div key={i} className={style.empty}></div>
        )
    }

    let daysInMonth = []
    for (let d = 1; d <= dateObject.daysInMonth(); d++) {
        const day = d == dateObject.format("D") ? style.today : ""
        daysInMonth.push(
            <div key={d} className={`${day}`}>
                {d}
            </div>
        )
    }

    const totalSlots = [...blanks, ...daysInMonth]

    let rows = []
    let cells = []

    totalSlots.forEach((row, index) => {
        if (index % 7 !== 0) {
            cells.push(row)
        } else {
            rows.push(cells)
            cells = []
            cells.push(row)
        }
        if (index === totalSlots.length - 1) {
            rows.push(cells)
        }
    })

    rows.shift(0)

    const daysinmonth = rows.map((d, i) => {
        return (
            <div className={style.date} key={i}>
                {d}
            </div>
        )
    })

    function monthFnc() {
        const year = dateObject.year()
        const currentMonth =
            month == "" ? setMonth(dateObject.format("MMMM")) : month

        return (
            <div
                className="flex flex-col items-start justify-start"
                onClick={(e) => {
                    setShowMonths(!showMonths)
                }}
            >
                <span
                    className={`${style.picker} rounded-md font-bold py-1.5 px-3`}
                >
                    {currentMonth} {year}
                </span>
            </div>
        )
    }

    function setMonthFnc(month) {
        setDatObject(moment(dateObject).set("month", month))
        setMonth(state.displayMonth[month])
        setMonthIndex(month)
        setShowMonths(!showMonths)
    }

    const monthList = (props) => {
        let months = []
        props.map((data, index) => {
            const currentMonth = index === monthIndex ? style.currentMonth : ""
            months.push(
                <div
                    key={index}
                    onClick={(e) => setMonthFnc(index)}
                    className={`${currentMonth} ${style.month}`}
                >
                    {data}
                </div>
            )
        })

        let rows = []
        let cells = []

        months.forEach((row, i) => {
            if (i % 3 !== 0 || i == 0) {
                cells.push(row)
            } else {
                rows.push(cells)
                cells = []
                cells.push(row)
            }
        })
        rows.push(cells)

        const monthList = rows.map((row, i) => {
            return <div key={i}>{row}</div>
        })
        return monthList
    }

    return (
        <div className={`${style.calendar} rounded-md p-5`}>
            <div className={`flex justify-between items-start`}>
                <Title content={"Calendar"} />
                {monthFnc()}
            </div>
            {showMonths ? (
                <div className={`${style.months} mt-4`}>
                    {monthList(state.allMonths)}
                </div>
            ) : (
                <div className={`${style.grid} mt-4`}>
                    <div className={style.day}>{days}</div>
                    {daysinmonth}
                </div>
            )}
        </div>
    )
}

export default Calendar
