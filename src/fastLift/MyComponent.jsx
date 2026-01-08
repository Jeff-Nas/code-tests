import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export function MyComponent() {
    const { stack, setStack } = useContext(ThemeContext);
    return (
        <div>
            <div>A stack atual é: {stack}</div>
            <button
                className="p-1.5 bg-purple-800 rounded cursor-pointer"
                onClick={() => setStack("Vuejs")}
            >
                Mudar Stack
            </button>
        </div>
    )
}