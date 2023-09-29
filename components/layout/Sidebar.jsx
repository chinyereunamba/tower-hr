import Link from "next/link"
import style from "./Sidebar.module.css"
import React from "react"

function Sidebar() {
    return (
        <nav className={`${style.sidebar} h-screen`}>
            <div className="grid place-content-center my-4">
                <img className="w-40" src="logo.svg" alt="Logo" />
            </div>
            <div className="flex-column mt-7">
                <ul className="mt-3 mb-7">
                    <small className="px-8 my-4 text-base">Menu</small>
                    <li className={`px-8 py-3 flex gap-3 items-center`}>
                        <img src="layers-color.svg" />
                        <Link href={"/"}>Dashboard</Link>
                    </li>
                    <li className={`${style.active} px-8 py-3 flex gap-3 items-center`}>
                        <img src="profile-2user.svg" />
                        <Link href={"employees"}>Employees</Link>
                    </li>
                    <li className="px-8 py-3 flex gap-3 items-center">
                        <img src="message-notif-2.svg" />
                        <Link href="">Messages</Link>
                    </li>
                    <li className="px-8 py-3 flex gap-3 items-center">
                        <img src="calendar.svg" />
                        <Link href="">Schedule</Link>
                    </li>
                    <li className="px-8 py-3 flex gap-3 items-center">
                        <img src="wallet.svg" />
                        <Link href="">Payroll</Link>
                    </li>
                </ul>
                <ul className="mt-3 mb-6">
                    <small className="px-8 py-5 mb-3 text-base">Recruitment</small>
                    <li className="px-8 py-3 flex gap-3 items-center">
                        <img src="work.svg" />
                        <Link href="">Jobs</Link>
                    </li>
                    <li className="px-8 py-3 flex gap-3 items-center">
                        <img src="profile-add.svg" />
                        <Link href="">Interviews</Link>
                    </li>
                </ul>
                <ul className="mt-3 mb-6">
                    <small className="px-8 py-5 mb-3 text-base">Other</small>
                    <li className="px-8 py-3 flex gap-3 items-center">
                        <img src="setting.svg" />
                        <Link href="">Settings</Link>
                    </li>
                    <li className="px-8 py-3 flex gap-3 items-center">
                        <img src="activity.svg" />
                        <Link href="">Report</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Sidebar
