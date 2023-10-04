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
            <div className="mt-5">
                <table className={`${style.table}`}>
                    <thead>
                        <tr>
                            <th className="">Rank</th>
                            <th className="">Performance</th>
                            <th className="">Current Project</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <Performance
                                rank={"1. UI/UX"}
                                percentage={85}
                                project={"Life changing organizational project"}
                                duration={"10 weeks"}
                            />
                        </tr>
                        <tr>
                            <Performance
                                rank={"2. IT"}
                                percentage={50}
                                project={"Life changing organizational project"}
                                duration={"10 weeks"}
                            />
                        </tr>
                        <tr>
                            <Performance
                                rank={"3. Development"}
                                percentage={95}
                                project={"Life changing organizational project"}
                                duration={"10 weeks"}
                            />
                        </tr>
                        <tr>
                            <Performance
                                rank={"4. Accounting"}
                                percentage={79}
                                project={"Life changing organizational project"}
                                duration={"10 weeks"}
                            />
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Department
