import { useState } from "react";

export function Form() {
    const [form, setForm] = useState({
        firstName: "Amanda",
        lastName: "Brito",
        email: "mandsbri@hotmail.com"
    })

    return (
        <div className="flex flex-col gap-1 w-2xl">
            <label className="flex gap-2">
                First name: {form.firstName}
                <input
                    className="bg-gray-700 rounded-md outline-blue-600 p-0.5 text-sm"
                    type="text"
                    onChange={e => {
                        setForm({
                            ...form,
                            firstName: e.target.value
                        })
                    }}
                />
            </label>
            <label className="flex gap-2">
                Last name: {form.lastName}
                <input
                    className="bg-gray-700 rounded-md outline-blue-600 p-0.5 text-sm"
                    type="text"
                    onChange={e => {
                        setForm({
                            ...form,
                            firstName: e.target.value
                        })
                    }}
                />
            </label>
            <label className="flex gap-2">
                E-mail: {form.email}
                <input
                    className="bg-gray-700 rounded-md outline-blue-600 p-0.5 text-sm"
                    type="text"
                    onChange={e => {
                        setForm({
                            ...form,
                            firstName: e.target.value
                        })
                    }}
                />
            </label>
        </div>
    )
}