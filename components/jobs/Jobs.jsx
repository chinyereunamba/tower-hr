import React from "react"
import style from "./Style.module.css"
import JobCard from "./JobCard"

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
            <p className={`text-2xl font-medium`}>Available Job Openings (12)</p>
            <div className="mt-9 flex flex-wrap gap-8">
                <JobCard title={"Senior Product Designer"}country={'Nigeria'} />
                <JobCard title={"Frontend Developer"} country={'Japan'}/>
                <JobCard title={"UX/UI Designer"} country={'Ghana'}/>
                <JobCard title={"Full Stack Developer"} country={'Canada'}/>
                <JobCard title={"UX/UI Designer"} country={'Japan'}/>
                <JobCard title={"Marketing Researcher"} country={'Nigeria'}/>
                <JobCard title={"UX/UI Designer"} country={'Nigeria'}/>
                <JobCard title={"UX/UI Designer"} country={'USA'}/>
                <JobCard title={"Junior UX/UI Designer"} country={'Japan'}/>
            </div>
        </>
    )
}

export default Jobs
