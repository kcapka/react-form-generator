import { useState } from "react"
import FormSelect from "../FormFieldUI/FormSelect"
import { fieldTypes } from "./formOptionData"


export default function FieldForm({createdFields, setCreatedFields, index}:any) {

    const handleChange = (name:string, value:string) => {
        setCreatedFields({
            ...createdFields,
            [index]: {
                ...createdFields[index],
                [name]: value,
            }
        })
    }

    return (
        <div className="overflow-hidden text-offwhite">
            {/* type */}
            <div className="w-full md:max-w-[300px]">
                <FormSelect
                    label="Type"
                    options={fieldTypes}
                    handleChange={handleChange}
                    value={createdFields[index].type}
                    placeholder="Select.."
                />
            </div>
            {/* Label */}
            <div className="w-full md:max-w-[300px]">
                
            </div>
        </div>
    )
}