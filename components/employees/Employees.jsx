import React from "react"
import EmployeeTable from "./EmployeeTable"
import SectionHeader from "../layout/SectionHeader"

function Employees() {
    return (
        <>
           <SectionHeader title={'Employees'} button={'Add new employee'} />
            <EmployeeTable />
        </>
    )
}

export default Employees
