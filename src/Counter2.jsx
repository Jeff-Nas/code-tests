import { useState } from "react";

export function Counter2() {

    const [counter, setCounter] = useState(0)

    return (
        <div>
            <p>Contador: {counter}</p>
            <button onClick={() => setCounter(counter + 1)} className="p-3 rounded-xl bg-amber-500 text-white mx-3">Incrementar</button>
            <button
                onClick={() => setCounter(counter > 0 ? counter - 1 : 0)} className="p-3 rounded-xl bg-amber-500 text-white"

            >Decrementar</button>
            <button onClick={() => setCounter(0)} className="p-3 rounded-xl bg-amber-500 text-white mx-3">Zerar</button>
        </div>
    )
}