import Employees from '@/components/employees/Employees'
import React from 'react'

export const metadata = {
    title: "Employees",
    description: "Generated by create next app",
}

function page() {
  return (
    <>
    <Employees />
    </>
  )
}

export default page