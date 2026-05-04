import { useState } from "react"
import FormSelect from "../FormFieldUI/FormSelect"
import { fieldTypes } from "./formOptionData"
import FormInput from "../FormFieldUI/FormInput"


export default function FieldForm({createdFields, setCreatedFields, index}:any) {
    const showPlaceholder = createdFields[index]?.type !== "select" && createdFields[index]?.type !== "radio"

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
        <div className="overflow-hidden text-offwhite flex flex-col gap-4 max-w-[400px]">
            {/* type */}
            <div className="w-full">
                <FormSelect
                    label="Type"
                    name="type"
                    options={fieldTypes}
                    handleChange={handleChange}
                    value={createdFields[index].type}
                    placeholder="Select.."
                />
            </div>
            {/* Label */}
            <div className="w-full">
                <FormInput
                    name="label"
                    label="Label"
                    handleChange={handleChange}
                    type="text"
                    value={createdFields[index]?.label}
                />
            </div>
            {/* Name */}
            <div className="w-full">
                <FormInput
                    name="name"
                    label="Name"
                    handleChange={handleChange}
                    type="text"
                    value={createdFields[index]?.name}
                />
            </div>
            {/* Placeholder */}
            {showPlaceholder && (
                <div className="w-full">
                    <FormInput
                        name="placeholder"
                        label="Placeholder (Optional)"
                        handleChange={handleChange}
                        type="text"
                        value={createdFields[index]?.placeholder}
                    />
                </div>
            )}
        </div>
    )
}