import React from "react"
import Card from "./Card"
import style from './Style.module.css'

function CompileCard() {
    return (
        <section className={`${style.compile_card} flex justify-between flex-wrap gap-5`}>
            <Card
                title={"Total Employees"}
                number={330}
                percent={"+13%"}
                percentDes={"increase last year"}
            />
            <Card
                title={"Remote Employees"}
                number={80}
                percent={"+44%"}
                percentDes={"increase in the last year"}
            />
            <Card
                title={"Onsite Employees"}
                number={250}
                percent={"+30%"}
                percentDes={"increase in the last year"}
            />
            <Card
                title={"Open Vacancies"}
                number={9}
                percentDes={"Open job positions"}
            />
        </section>
    )
}

export default CompileCard
