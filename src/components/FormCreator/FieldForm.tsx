import { useState } from "react"
import FormSelect from "../FormFieldUI/FormSelect"
import { fieldTypes } from "./formOptionData"
import FormInput from "../FormFieldUI/FormInput"


export default function FieldForm({createdFields, setCreatedFields, index}:any) {
    const showPlaceholder = createdFields[index]?.type !== "select" && createdFields[index]?.type !== "radio" && createdFields[index]?.type !== "submit";
    const isSubmit = createdFields[index]?.type === "submit";
    const [isRequired, setIsRequired] = useState(false);

    const handleChange = (name:string, value:string | boolean) => {
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
            {!isSubmit && (
                <div className="w-full">
                    <FormInput
                        name="name"
                        label="Name"
                        handleChange={handleChange}
                        type="text"
                        value={createdFields[index]?.name}
                    />
                </div>
            )}
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
            {/* Required */}
            <div className="w-full">
                <input id="isRequired" name="isRequired" type="checkbox" checked={createdFields[index]?.isRequired} className="hidden" />
                <label htmlFor="isRequired" className="text-offwhite mb-1 block">Required?</label>
                <button onClick={() => {
                    handleChange("isRequired", isRequired);
                    setIsRequired(!isRequired);
                }} className={`${isRequired ? 'bg-primary' : 'bg-background'} duration-200 block w-10 h-6 mt-2 rounded-full border border-border cursor-pointer relative`}>
                    <div className={`${isRequired ? 'right-1' : 'right-full translate-x-5'} duration-200 absolute w-4 rounded-full h-4 top-1/2 -translate-y-1/2 bg-white`} />
                </button>
            </div>
        </div>
    )
}