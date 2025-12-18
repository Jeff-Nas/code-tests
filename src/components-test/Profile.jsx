import { useContext, useState } from "react";
import { UserContext } from "./UserProvider";

export function Profile() {
    const { user, setUser } = useContext(UserContext);
    const users = ['Albert', 'Alfred', 'Paulo', 'Maria', 'Clark'];
    const [index, setIndex] = useState(users.length - 1);
    console.log(index);

    const handleChangeUser = (users, index) => {
        const nextIndex = (index + 1) % users.length;
        setUser(users[nextIndex]);
        setIndex(nextIndex);
    }

    return (
        <div>
            <h1 className="text-white">Bem vindo: {user}</h1>
            <button
                className="p-3 bg-gray-600 rounded-xl cursor-pointer hover:scale-105"
                onClick={() => handleChangeUser(users, index)}
            >
                Trocar usuário
            </button>
        </div>
    )
}