import Sidebar from "@/components/layout/Sidebar"
import "./globals.css"
import { Inter } from "next/font/google"

import Layout from "@/components/layout/Layout"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "Dashboard",
    description: "Generated by create next app",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Sidebar />
                <Layout>{children}</Layout>
            </body>
        </html>
    )
}
