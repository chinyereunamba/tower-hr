"use client"
import React from "react"
import style from "./Style.module.css"

function Performance({rank, percentage, project, duration }) {
    const borderRadius = percentage >= 96 ? "5px" : "5px 0 0 5px" 
    return (
        <>
            <td>{rank} </td>
            <td>
                <span
                    className={`${style.performance} w-16 rounded-md bg-white grid place-items-center`}
                >
                    <small>{percentage}%</small>
                </span>
            </td>
            <td className="flex flex-col">
                {project}
                <small className="text-sm text-gray-400">
                    Duration: {duration}
                </small>
            </td>

            <style jsx>
                {`
                    span::before {
                        content: "";
                        position: absolute;
                        width: ${percentage}%;
                        border-radius: ${borderRadius};
                        height: 100%;
                        top: 0;
                        left: 0;
                        background: #c2ff51;
                        z-index: 1;
                    }
                `}
            </style>
        </>
    )
}

export default Performance
