import React from "react"
import style from "./Style.module.css"

function JobCard({ title, country }) {
    return (
        <div className={`${style.card} rounded-md flex flex-col gap-6`}>
            <div className="flex flex-col gap-4 pt-4 px-4 ">
                <div className="flex flex-col gap-2.5">
                    <h1 className="font-bold">{title}</h1>
                </div>
                <div className={`${style.about} flex gap-5 mb-7 font-medium`}>
                    <span className="flex gap-2 items-center">
                        <img className="w-5" src="clock.svg" alt="clock" />
                        Freelancer
                    </span>
                    <span className="flex gap-2 items-center">
                        <img className="w-5" src="global.svg" alt="globe" />
                        {country}
                    </span>
                    <span className="flex gap-2 items-center">
                        <img className="w-5" src="work.svg" alt="work" />
                        Design
                    </span>
                </div>
                <div className={`flex gap-8 font-medium`}>
                    <div
                        className={`${style.status} flex flex-col gap-2 font-medium`}
                    >
                        <span>Applied</span>
                        <span className={``}>43</span>
                    </div>
                    <div
                        className={`${style.status} flex flex-col gap-2 font-medium`}
                    >
                        <span>Hireable</span>
                        <span className={``}>3</span>
                    </div>
                    <div
                        className={`${style.status} flex flex-col gap-2 font-medium`}
                    >
                        <span>Experience</span>
                        <span className={``}>4yrs +</span>
                    </div>
                </div>
            </div>
            <button className="p-3 rounded-b-md font-medium">
                View Details
            </button>
        </div>
    )
}

export default JobCard
