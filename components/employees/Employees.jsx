import React from "react"
import style from "./Style.module.css"
import EmployeeTable from "./EmployeeTable"

function Employees() {
    return (
        <>
            <div className={`${style.header} mb-9`}>
                <h1 className="text-4xl font-bold">Employees</h1>
                <div className="flex justify-between items-center w-2/4">
                    <div
                        className={`${style.search} flex gap-2 px-3 w-72 py-2 rounded-md text-sm items-center`}
                    >
                        <img src="search.svg" alt="search" />
                        <input type="text" placeholder="Search for something" />
                    </div>
                    <div className={`${style.buttons} flex gap-5 items-center`}>
                        <button
                            className={`flex items-center gap-3 px-3 py-2 rounded-md`}
                        >
                            <img src="filter.svg" alt="" />
                            Filter
                        </button>
                        <button
                            className={`flex items-center gap-3 px-3 py-2 rounded-md`}
                        >
                            <img src="add.svg" alt="" />
                            Add new employee
                        </button>
                    </div>
                </div>
            </div>
            <EmployeeTable />
        </>
    )
}

export default Employees
