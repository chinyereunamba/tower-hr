import React from "react"
import moment from "moment"
import Title from "./Title"
import style from "./Style.module.css"
import MonthPicker from "./MonthPicker"

function Calendar() {
    const weekdayshort = moment.weekdaysShort()

    const days = weekdayshort.map((day) => {
        return <div key={day}>{day}</div>
    })

    const state = {
        dateObject: moment(),
        allMonths: moment.monthsShort(),
    }

    const firstDayOfMonth = () => {
        let dateObject = state.dateObject
        let firstDay = moment(dateObject).startOf("month").format("d")
        return firstDay
    }

    let blanks = []
    for (let i = 0; i < firstDayOfMonth(); i++) {
        blanks.push(
            <div key={i} className={style.empty}>
                {""}
            </div>
        )
    }

    let daysInMonth = []
    for (let d = 1; d <= state.dateObject.daysInMonth(); d++) {
        const day = d == state.dateObject.format("D") ? style.today : ""
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

    const month = () => {
        const year = state.dateObject.year()
        const currentMonth = state.dateObject.format("MMMM")
        return <MonthPicker content={`${currentMonth} ${year}`} />
    }

    const monthList = (props) => {
        let months = []
        props.map((data, index) => {
            const currentMonth = index === state.dateObject.get('month') ? style.currentMonth : ""
             months.push(
                 <div key={index} className={`${currentMonth} ${style.month}`}>
                     {data}
                 </div>
             )
        })
        let rows = []
        let cells = []

        months.forEach((row, i) => {
            if (i % 3 !== 0 || i == 0) {
                // except zero index
                cells.push(row)
            } else {
                rows.push(cells)
                cells = []
                cells.push(row)
            }
        })
        rows.push(cells)
        
        const monthT = rows.map((row, i) => {
            return <div key={i}>{row}</div>
        })
        return monthT
        
    }

    return (
        <div className={`${style.calendar} rounded-md p-5`}>
            <div className={`flex justify-between items-start`}>
                <Title content={"Calendar"} />
                {month()}
            </div>

            <div className={`${style.months}`}>
                {monthList(state.allMonths)}
            </div>

            <div className={`${style.grid} mt-4`}>
                <div className={style.day}>{days}</div>
                {daysinmonth}
            </div>
        </div>
    )
}

export default Calendar
