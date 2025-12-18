import { useState } from "react";

export function Checked() {
    const [checked, setChecked] = useState(false)


    return (
        <div>
            <input className={checked ? "cursor-not-allowed" : "cursor-pointer"}
                disabled={checked}
                type="checkbox"
                onClick={(e) => setChecked(e.target.checked)}
            />
            {checked && <p>Caixa marcada.</p>}
        </div>
    )
}