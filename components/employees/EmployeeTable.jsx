"use client"
import React, { useState } from "react"
import style from "./Style.module.css"

function EmployeeTable() {
    const [checked, setChecked] = useState(false)

    const bg =
        "Desgin" || "Engineering"
            ? style.blue
            : "Development"
            ? style.pink
            : "Management"
            ? style.lemon
            : "Networking"
            ? style.red
                        : style.green
    if (checked) {
        
    }

    return (
        <>
            <table className={`${style.table}`}>
                <thead>
                    <tr>
                        <th className="flex gap-3 items-center">
                            <input onClick={() => {
                                setChecked(!checked)
                                console.log(checked)
                            }} type="checkbox" />
                            Name
                        </th>
                        <th>Location</th>
                        <th>Department</th>
                        <th>Hiring Type</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="flex gap-3 items-center">
                            <input type="checkbox" />
                            <div className="flex flex-col items-start justify-center">
                                Victor Chiemerie
                                <span className="text-xs text-zinc-500">
                                    Senior UI/UX Designer
                                </span>
                            </div>
                        </td>
                        <td>Ba Sing Se</td>
                        <td>
                            <span className={`${style.blue} text-xs py-2 px-4`}>
                                Design
                            </span>
                        </td>
                        <td>Fulltime</td>
                        <td
                            className={`${style.action} flex gap-7 items-center`}
                        >
                            <span>
                                <img src="trash.svg" alt="" />
                            </span>
                            <button className="px-3 py-2 rounded-md text-sm">
                                See Details
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="flex gap-3 items-center">
                            <input type="checkbox" />
                            <div className="flex flex-col items-start justify-center">
                                John Doe
                                <span className="text-xs text-zinc-500">
                                    Backend Developer
                                </span>
                            </div>
                        </td>
                        <td>DR Congo</td>
                        <td>
                            <span
                                className={`${style.lemon} text-xs py-2 px-4`}
                            >
                                Management
                            </span>
                        </td>
                        <td>Contractor</td>
                        <td
                            className={`${style.action} flex gap-7 items-center`}
                        >
                            <span>
                                <img src="trash.svg" alt="" />
                            </span>
                            <button className="px-3 py-2 rounded-md text-sm">
                                See Details
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="flex gap-3 items-center">
                            <input type="checkbox" />
                            <div className="flex flex-col items-start justify-center">
                                John Doe
                                <span className="text-xs text-zinc-500">
                                    Backend Developer
                                </span>
                            </div>
                        </td>
                        <td>DR Congo</td>
                        <td>
                            <span
                                className={`${style.lemon} text-xs py-2 px-4`}
                            >
                                Management
                            </span>
                        </td>
                        <td>Contractor</td>
                        <td
                            className={`${style.action} flex gap-7 items-center`}
                        >
                            <span>
                                <img src="trash.svg" alt="" />
                            </span>
                            <button className="px-3 py-2 rounded-md text-sm">
                                See Details
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="flex gap-3 items-center">
                            <input type="checkbox" />
                            <div className="flex flex-col items-start justify-center">
                                John Doe
                                <span className="text-xs text-zinc-500">
                                    Backend Developer
                                </span>
                            </div>
                        </td>
                        <td>DR Congo</td>
                        <td>
                            <span
                                className={`${style.lemon} text-xs py-2 px-4`}
                            >
                                Management
                            </span>
                        </td>
                        <td>Contractor</td>
                        <td
                            className={`${style.action} flex gap-7 items-center`}
                        >
                            <span>
                                <img src="trash.svg" alt="" />
                            </span>
                            <button className="px-3 py-2 rounded-md text-sm">
                                See Details
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="flex gap-3 items-center">
                            <input type="checkbox" />
                            <div className="flex flex-col items-start justify-center">
                                John Doe
                                <span className="text-xs text-zinc-500">
                                    Backend Developer
                                </span>
                            </div>
                        </td>
                        <td>DR Congo</td>
                        <td>
                            <span
                                className={`${style.green} text-xs py-2 px-4`}
                            >
                                DevOps
                            </span>
                        </td>
                        <td>Contractor</td>
                        <td
                            className={`${style.action} flex gap-7 items-center`}
                        >
                            <span>
                                <img src="trash.svg" alt="" />
                            </span>
                            <button className="px-3 py-2 rounded-md text-sm">
                                See Details
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="flex gap-3 items-center">
                            <input type="checkbox" />
                            <div className="flex flex-col items-start justify-center">
                                John Doe
                                <span className="text-xs text-zinc-500">
                                    Backend Developer
                                </span>
                            </div>
                        </td>
                        <td>Kenya</td>
                        <td>
                            <span className={`${style.red} text-xs py-2 px-4`}>
                                Networking
                            </span>
                        </td>
                        <td>Contractor</td>
                        <td
                            className={`${style.action} flex gap-7 items-center`}
                        >
                            <span>
                                <img src="trash.svg" alt="" />
                            </span>
                            <button className="px-3 py-2 rounded-md text-sm">
                                See Details
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="flex gap-3 items-center">
                            <input type="checkbox" />
                            <div className="flex flex-col items-start justify-center">
                                John Doe
                                <span className="text-xs text-zinc-500">
                                    Backend Developer
                                </span>
                            </div>
                        </td>
                        <td>Kenya</td>
                        <td>
                            <span className={`${style.red} text-xs py-2 px-4`}>
                                Networking
                            </span>
                        </td>
                        <td>Contractor</td>
                        <td
                            className={`${style.action} flex gap-7 items-center`}
                        >
                            <span>
                                <img src="trash.svg" alt="" />
                            </span>
                            <button className="px-3 py-2 rounded-md text-sm">
                                See Details
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="flex gap-3 items-center">
                            <input type="checkbox" />
                            <div className="flex flex-col items-start justify-center">
                                John Doe
                                <span className="text-xs text-zinc-500">
                                    Backend Developer
                                </span>
                            </div>
                        </td>
                        <td>Kenya</td>
                        <td>
                            <span className={`${style.red} text-xs py-2 px-4`}>
                                Networking
                            </span>
                        </td>
                        <td>Contractor</td>
                        <td
                            className={`${style.action} flex gap-7 items-center`}
                        >
                            <span>
                                <img src="trash.svg" alt="" />
                            </span>
                            <button className="px-3 py-2 rounded-md text-sm">
                                See Details
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default EmployeeTable
