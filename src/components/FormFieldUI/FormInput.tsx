

interface Props {
    handleChange: any;
    name: string;
    label: string;
    placeholder?: string;
    value: string;
    type?: string;
}

export default function FormInput({handleChange, name, label, value, placeholder, type}:Props) {
    const validType = type ? type : 'text';

    return (
        <div className="w-full">
            {label && <label className="text-offwhite block mb-1">{label}</label>}
            <input type={validType} value={value} {...(placeholder && {placeholder: placeholder})} onChange={(e) => handleChange(name, e.target.value)} className="border outline-none border-border rounded-md bg-background py-2 px-3 w-full" />
        </div>
    )
}