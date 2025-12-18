import { useState } from "react";

export function InputControled() {
    const [text, setText] = useState("");
    console.log(text.trim())

    return (
        <div>
            <input
                className="bg-gray-700 rounded-md outline-blue-600"
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <p>{text}</p>
        </div>
    )
}