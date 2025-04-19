import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const inputRef = useRef(null)
  return (
    <div className='flex flex-col justify-center items-center mt-[100px] gap-6'>
        <h1  class="text-4xl font-bold">Quiz</h1>

        <ol className=' list-decimal'>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus praesentium magni, alias i</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus praesentium magni, alias i</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus praesentium magni, alias i</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus praesentium magni, alias i</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus praesentium magni, alias i</li>
        </ol>

        <form id='form' className='w-full flex justify-center'>
            <input className='bg-white text-black placeholder-gray-500 p-1 w-[300px] focus:border-none focus:outline-none' ref={inputRef} type="text" placeholder='Username' />
        </form>

        <div className='bg-green-300 p-2 pl-3 pr-3 rounded'>
            <Link to={'quiz'}>Start Quiz</Link>
        </div>
    </div>
  )
}

export default Home