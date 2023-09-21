import React from 'react'
import style from './Style.module.css'
import Title from './Title'

function Department() {
    return (
        <div className={`${style.department} rounded-md p-5`}>
            <Title content={"Departments"} />
            <small>
                List of top performing departments of 24 departments in this
                organization
            </small>
            <div className="border border-sky-200">
                <table className='table-row'>
                    <thead className='text-xl'>
                        <tr>
                            <th>Rank</th>
                            <th>Performance</th>
                            <th>Current Project</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}

export default Department