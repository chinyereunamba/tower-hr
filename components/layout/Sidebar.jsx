import Link from "next/link"
import style from "./Sidebar.module.css"
import React from "react"
import NavLink from "./Links"

function Sidebar() {
    return (
        <nav className={`${style.sidebar} min-h-screen`}>
            <div className="grid place-content-center my-4">
                <img className="w-40" src="logo.svg" alt="Logo" />
            </div>
            <div className="flex-column mt-7">
                <ul className="mt-3 mb-7">
                    <small className="px-8 my-4 text-base">Menu</small>
                    <NavLink
                        to={"/"}
                        linkName={"Dashboard"}
                        svg={"layers.svg"}
                    />

                    <NavLink
                        to={"/employees"}
                        linkName={"Employees"}
                        svg={"profile-2user.svg"}
                    />

                    <NavLink
                        to={"/messages"}
                        linkName={"Messages"}
                        svg={"message-notif-2.svg"}
                    />

                    <NavLink
                        to={"/schedule"}
                        linkName={"Schedule"}
                        svg={"calendar.svg"}
                    />

                    <NavLink
                        to={"/payroll"}
                        linkName={"Payroll"}
                        svg={"wallet.svg"}
                    />
                </ul>
                <ul className="mt-3 mb-6">
                    <small className={`px-8 py-5 mb-3 text-base`}>
                        Recruitment
                    </small>

                    <NavLink to={"/jobs"} linkName={"Jobs"} svg={"work.svg"} />

                    <NavLink
                        to={""}
                        linkName={"Interviews"}
                        svg={"profile-add.svg"}
                    />
                </ul>
                <ul className="mt-3 mb-6">
                    <small className="px-8 py-5 mb-3 text-base">Other</small>
                    <NavLink
                        to={""}
                        linkName={"Settings"}
                        svg={"setting.svg"}
                    />

                    <NavLink to={""} linkName={"Report"} svg={"activity.svg"} />
                </ul>
            </div>
        </nav>
    )
}

export default Sidebar
