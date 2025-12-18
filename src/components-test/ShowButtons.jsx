import { useState } from "react"

export function ShowButtons() {
    const fruits = ["Maçã", "Banana", "Laranja"]
    const [selected, setSelected] = useState("")

    function handleSelectFruit(item) {
        setSelected(item)
    }

    return (
        <div>
            <h1>Frutas</h1>
            {fruits.map((fruit, index) => (
                <button
                    onClick={() => handleSelectFruit(fruit)}
                    key={index}
                    className={`p-3 m-1 rounded-md transition-colors cursor-pointer ${selected === fruit
                        ? "bg-purple-800 text-white"
                        : "bg-purple-600 text-white"
                        }`}
                    aria-pressed={selected === fruit}
                >
                    {fruit}
                </button>
            ))}
            <p>Selecionada: {selected}</p>
        </div>
    )
}