import React from "react"
import style from "./Style.module.css"
import Title from "./Title"
import Performance from "./Performance"

function Department() {
    return (
        <div className={`${style.department} rounded-md p-5`}>
            <Title content={"Departments"} />
            <small className="text-sm">
                List of top performing departments of 24 departments in this
                organization
            </small>
            <div className="my-5">
                <table className={`${style.table} table`}>
                    <thead>
                        <tr>
                            <th className="">Rank</th>
                            <th className="">Performance</th>
                            <th className="">Current Project</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1. UX/UI </td>
                            <td>
                                <Performance percentage={85} />
                            </td>
                            <td className="flex flex-col">
                                Life changing organizational project{" "}
                                <small className="text-sm text-gray-400">
                                    Duration: 10 weeks
                                </small>
                            </td>
                        </tr>
                        <tr>
                            <td>2. IT </td>
                            <td>
                                <Performance percentage={75} />
                            </td>
                            <td className="flex flex-col">
                                Life changing organizational project{" "}
                                <small className="text-sm text-gray-400">
                                    Duration: 10 weeks
                                </small>
                            </td>
                        </tr>
                        <tr>
                            <td>3. Development</td>
                            <td>
                                <Performance percentage={60} />
                            </td>
                            <td className="flex flex-col">
                                Life changing organizational project{" "}
                                <small className="text-sm text-gray-400">
                                    Duration: 10 weeks
                                </small>
                            </td>
                        </tr>
                        <tr>
                            <td>4. Accounting</td>
                            <td>
                                <Performance percentage={100} />
                            </td>
                            <td className="flex flex-col">
                                Life changing organizational project{" "}
                                <small className="text-sm text-gray-400">
                                    Duration: 10 weeks
                                </small>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Department
