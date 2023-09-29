import React from "react"
import moment from "moment"
import Title from "./Title"
import style from "./Style.module.css"

function Calendar() {
    const weekdayshort = moment.weekdaysShort()
    return (
        <section className={`${style.calendar} rounded-md p-5`}>
            <div>
                <Title content={"Calendar"} />
            </div>
            {weekdayshort}
        </section>
    )
}

export default Calendar
