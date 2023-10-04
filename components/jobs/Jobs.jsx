import React from "react"
import JobCard from "./JobCard"
import SectionHeader from "../layout/SectionHeader"

function Jobs() {
    return (
        <>
            <SectionHeader title={'Job'} button={'Create new job'} />
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
