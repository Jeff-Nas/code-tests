import { useState } from 'react'

export function TestEffect() {
    const [counter, setCounter] = useState(0);
    const [hidden, setHidden] = useState(true);



    return (
        <div className='bg-gray-950'>
            <div className='flex justify-center'>
                {/* <img src="/public/atronauta-banner.png" alt="foto de astronauta" className='w-140 -mt-4' /> */}
                <h1 className='mt-3 text-4xl text-cyan-200 mask-linear-from-neutral-50 text-shadow-2xs font-orbitron font-semibold'>Astronomy Picture of the Day</h1>

            </div>
            <div className='flex justify-center'>
                <button
                    className='p-2 m-3 cursor-pointer hover:scale-105 bg-blue-800 text-gray-100 rounded-2xl font-hat-display font-semibold'
                    onClick={() => setCounter(prev => prev + 1)}
                >
                    Incrementar
                </button>

                <button
                    className='p-2 m-3 w-40 cursor-pointer hover:scale-105 bg-blue-800 text-gray-100 rounded-2xl font-hat-display font-semibold'
                    onClick={() => setHidden(!hidden)}
                >
                    {hidden ? 'Exibir' : 'Ocultar'} conteúdo
                </button>
                <hr />
                <p className={`text-gray-100 mx-2 ${hidden ? 'invisible' : 'visible'}`}>{counter}</p>
            </div>

        </div>
    )
}
