import React from "react"
import CompileCard from "./CompileCard"
import Activity from "./Activity"
import Schedule from "./Schedule"
import Department from "./Department"
import Calendar from "./Calendar"
import style from './Style.module.css'

function Dashboard() {
    return (
        <div className={`${style.dashboard}`}>
            <h1 className="text-4xl mb-9 font-semibold">Dashboard</h1>
            <div className="flex flex-col gap-6">
                <CompileCard />
                <section className="flex justify-between flex-wrap gap-6">
                    <Activity />
                    <Schedule />
                </section>
                <section className="flex justify-between gap-6 flex-wrap">
                    <Department />
                    <Calendar />
                </section>
            </div>
        </div>
    )
}

export default Dashboard
