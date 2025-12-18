export function List() {
    const names = ["Ana", "Carlos", "Beatriz", "João"];

    return (
        <div>
        <h1>Lista de nomes</h1>
        <ul>
            {names.map((item, idx) => (
                <li key={idx}>
                    {item}
                </li>
            ))}
        </ul>
        </div>
    )
}