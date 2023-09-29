import React from "react"
import style from './Style.module.css'

function Jobs() {
    return (
        <>
            <div className={`${style.header} mb-9 gap-5`}>
                <h1 className="text-4xl font-bold">Jobs</h1>
                <div className="flex justify-between items-center gap-5">
                    <div
                        className={`${style.search} flex gap-2 px-3 w-80 py-2 rounded-md text-sm items-center`}
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
                            className={`flex items-center gap-2.5 px-3 py-2 rounded-md`}
                        >
                            <img src="add.svg" alt="" />
                            Create job opening
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Jobs
