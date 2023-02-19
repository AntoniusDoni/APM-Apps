import React from "react";
import { Spinner } from "flowbite-react";

export default function Loading() {
    return (
        <div className="absolute bg-slate-800 bg-opacity-50 w-full">
            <div className="w-full absolute flex items-center justify-center">
                <Spinner className="h-20 w-20"/>
            </div>
        </div>
    )
}