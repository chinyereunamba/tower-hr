import React from "react"
import moment from "moment"
import Title from "./Title"
import style from "./Style.module.css"

function Calendar() {
    const weekdayshort = moment.weekdaysShort()
    return (
        <div className={`${style.calendar} rounded-md p-5`}>
            <div>
                <Title content={"Calendar"} />
            </div>
            {weekdayshort}
            <table>
                <thead>
                    <tr>
                        {weekdayshort.forEach((el) => {
                            ;<td>{el}</td>
                        })}
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default Calendar
