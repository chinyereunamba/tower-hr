import React from "react"
import style from "./Header.module.css"

function Header() {
    return (
        <header className={`${style.header} flex justify-between items-center h-24 px-6`}>
            <div
                className={`${style.search} flex gap-2 px-2.5 py-3 rounded-md w-96 text-sm items-center`}
            >
                <img src="search.svg" alt="" className={style.search_icon} />
                <input
                    type="text"
                    className=""
                    placeholder="Search for something"
                />
            </div>
            <div className={`${style.profile} flex gap-11 items-center`}>
                <span className={`${style.notify} p-1.5 bg-[lemon] rounded-md`}>
                    <img src="notification-bing.svg" alt="" />
                </span>
                <span className="flex items-center gap-3.5">
                    <div>
                        <h3 className={`${style.name} font-bold`}>
                            Victor Chiemerie
                        </h3>
                        <small className={style.job_title}>HR - Manager</small>
                    </div>
                    <div className={style.profile_img}>
                        <img src="profile_img.svg" alt="" />
                    </div>
                </span>
            </div>
        </header>
    )
}

export default Header
