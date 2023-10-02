'use client'
import Link from 'next/link'
import React from 'react'
import style from "./Sidebar.module.css"
import { usePathname } from "next/navigation"

function NavLink({ to, linkName, svg }) {
     const pathname = usePathname()
     const active = style.active
  return (
      <Link href={to}>
          <li
              className={`px-8 py-3 flex gap-3 items-center ${
                  pathname === to ? active : ""
              }`}
          >
              <img src={svg} />
              <>{linkName}</>
          </li>
      </Link>
  )
}

export default NavLink