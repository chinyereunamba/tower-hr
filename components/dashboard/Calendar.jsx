import React from "react"
import moment from "moment"
import Title from "./Title"
import style from "./Style.module.css"

function Calendar() {
    const weekdayshort = moment.weekdaysShort()

    const days = weekdayshort.map((day) => {
        return <div key={day}>{day}</div>
    })

    const state = {
        dateObject: moment(),
    }

    const firstDayOfMonth = () => {
        let dateObject = state.dateObject
        let firstDay = moment(dateObject).startOf("month").format("d")

        let blanks = []
        for (let i = 0; i < firstDay; i++) {
            blanks.push("")
        }

        return blanks
    }

    const numberOfDaysInMonth = () => {
        let dateObject = state.dateObject
        let number = moment(dateObject).daysInMonth()

        let daysInMonth = []

        for (let d = 1; d <= number; d++) {
            daysInMonth.push(d)
        }

        return daysInMonth
    }

    const totalSlots = numberOfDaysInMonth()

    let rows = []
    let cells = []

    // totalSlots.forEach((i, index) => {
    //     if (index % 7 !== 0) {
    //         cells.push(i)
    //     } else {
    //         rows.push(cells)
    //         cells = []
    //         cells.push(i)
    //     }
    //     if (i === totalSlots.length - 1) {
    //         rows.push(cells)
    //     }
    // })
    totalSlots.forEach((day, index) => {
        if (index % 7 !== 0) {
            cells.push(<div key={index}>{day}</div>)
        } else {
            rows.push(cells)
            cells = []
            cells.push(<div key={index}>{day}</div>)
        }
        if (index === totalSlots.length - 1) {
            rows.push(cells)
        }
    })

    const daysinmonth = rows.map((d, i) => {
        return <div className={style.date} key={i}>{d}</div>
    })

    return (
        <div className={`${style.calendar} rounded-md p-5`}>
            <div>
                <Title content={"Calendar"} />
            </div>
            <div className={`${style.grid} mt-4`}>
                <div className={style.day}>{days}</div>
                {daysinmonth}
            </div>
        </div>
    )
}

export default Calendar
