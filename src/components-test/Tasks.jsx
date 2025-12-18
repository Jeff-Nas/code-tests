import { useState } from "react";

export function Tasks() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (task.trim()) {                             //verifica se não é string vazia ou composta por espaços
            setTasks([...tasks, task]);
            setTask('')
        }
    }

    return (
        <div className="p-2">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}  //recebe o valor do input e atualiza o estado. Em seguida o estado task passa para value.
                placeholder="Nova Tarefa"
                className="w-60 px-4 py-2 mr-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none placeholder-gray-400 focus:ring-2 focus:ring-blue-400"
            />
            <button
                className="bg-blue-950 p-2 rounded-md cursor-pointer hover:bg-blue-800"
                onClick={addTask}>Adicionar</button>
            <ul>
                {tasks.map((t, index) => (
                    <li key={index}>{t}</li>
                ))}
            </ul>
        </div>
    )
}