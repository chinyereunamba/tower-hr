import React from "react"
import style from "./Layout.module.css"
import Header from "./Header"

function Layout({ children }) {
    return (
        <section className={`${style.layout}`}>
            <Header />
            <main className="px-9 py-11">{children}</main>
        </section>
    )
}

export default Layout
