import { useState } from "react";


export default function FormSelect({handleChange, value, placeholder, options, label, name}:any) {

    const handleSelect = (option:string) => {
        handleChange(name, option);
    }

    return (
        <div className="overflow-visible">
            {label && <label className="text-offwhite block mb-3">{label}</label>}
            <select value={value} className="border outline-none border-border rounded-md bg-background py-2 px-3" onChange={(e) => handleSelect(e.target.value)}>
                {options?.map((option:string, i:number) => (
                    <option key={i} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}