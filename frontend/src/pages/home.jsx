import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";
export default function Home() {
    // console.log(location)
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-700">
            <div className="text-gray-900 dark:text-gray-900">
                    <NavBar title={"Selamat Datang di Anjungan Pasien Mandiri BPJS "}></NavBar>
                <div className="bg-gray-100 flex-1 p-3 md:mt-10">
                    <div className="max-w-full m-6 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}