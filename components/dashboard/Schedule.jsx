import React from "react"
import style from "./Style.module.css"
import ScheduleChild from "./ScheduleChild"
import Title from "./Title"
function Schedule() {
    return (
        <div className={`${style.schedule} rounded-md p-5`}>
            <Title content={'Schedule'} />
            <div>
                <ScheduleChild
                    date={"10"}
                    des={"Tech Event with microsoft"}
                    time={"9am - 3:30pm"}
                    day={"Mon"}
                />
                <ScheduleChild
                    date={"11"}
                    des={"Weekly Organizational meeting"}
                    time={"11am - 1:30pm"}
                    day={"Tue"}
                />
                <ScheduleChild
                    date={"11"}
                    des={"Interview with frontend interns"}
                    time={"2:30pm - 5pm"}
                    day={"Tue"}
                />
                <ScheduleChild
                    date={"12"}
                    des={"Sprint for the next big project"}
                    time={"9am - 11:30pm"}
                    day={"Wed"}
                />
                <ScheduleChild
                    date={"14"}
                    des={"Online social media sensitization"}
                    time={"12pm - 1pm"}
                    day={"Fri"}
                />
            </div>
        </div>
    )
}

export default Schedule
