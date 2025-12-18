import { useState } from "react";


export function MyButton({ count, wasCleared, onClick, onClear }) {

  return (
    <div className='flex gap-2 p-2'>
      <button
        onClick={onClick}
        className='bg-purple-500 p-1 rounded-sm cursor-pointer text-white'
      >
        Clicar
      </button>

      <button
        onClick={onClear}
        className='bg-yellow-500 p-1 rounded-sm cursor-pointer text-white'
      >
        Zerar
      </button>
      <h3>
        {wasCleared ? 'Contador zerado.' : `O botão foi clicado ${count} vezes.`}
      </h3>
    </div>
  )
}


export function Counter() {
    const [count, setCount] = useState(0)
    const [wasCleared, setWascleared] = useState(false)


  function handleClick() {
    setCount(count + 1)
    setWascleared(false)
  }

  function clear() {
    setCount(0)
    setWascleared(true)
  }

  return(
    <MyButton
            onClick={handleClick}
            onClear={clear}
            wasCleared={wasCleared}
            count={count}
          />
  )
}