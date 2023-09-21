import React from "react"
import CompileCard from "./CompileCard"
import Activity from "./Activity"
import Schedule from "./Schedule"
import Department from "./Department"

function Dashboard() {
    return (
        <>
            <h1 className="text-3xl mb-9 font-semibold">Dashboard</h1>
            <div className="flex flex-col gap-6">
                <CompileCard />
                <section className="flex justify-between">
                    <Activity />
                    <Schedule />
                </section>
                <section>
                    <Department />
                </section>
            </div>
        </>
    )
}

export default Dashboard
