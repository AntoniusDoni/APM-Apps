import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function FormInputMounthYears({ selected, onChange, format, label = '', error }) {
    return (
        <div>
            {label !== '' && (
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            )}
            <DatePicker
                selected={selected}
                onChange={onChange}
                dateFormat={format}
                showMonthYearPicker
            />
            {error && (
                <p className="mb-2 text-sm text-red-600 dark:text-red-500">{""}</p>
            )}
        </div>
    )
}