import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [color,setColor] = useState('bg-black');
  
  return (
    <>
    <div className={`h-screen w- flex ${color}`}>
      <nav className='bg-gray-700 space-x-11 justify-center h-12 w-1/2 p-2 rounded-3xl m-3'>
        <button className='bg-blue-600 rounded-full p-1' onClick={()=>{setColor("bg-blue-600")}}>Blue</button>
        <button className='bg-green-600 rounded-full p-1' onClick={()=>{setColor("bg-green-600")}}>Green</button>
        <button className='bg-gray-600 rounded-full p-1' onClick={()=>{setColor("bg-gray-600")}}>Gray</button>
        <button className='bg-violet-600 rounded-full p-1' onClick={()=>{setColor("bg-violet-600")}}>Violet</button>
        <button className='bg-red-600 rounded-full p-1' onClick={()=>{setColor("bg-red-600")}}>Red</button>
        <button className='bg-pink-600 rounded-full p-1' onClick={()=>{setColor("bg-pink-600")}}>Pink</button>
        <button className='bg-yellow-600 rounded-full p-1' onClick={()=>{setColor("bg-yellow-600")}}>Yellow</button>
        <button className='bg-orange-600 rounded-full p-1' onClick={()=>{setColor("bg-orange-600")}}>Orange</button>
      </nav>
      <nav className='bg-gray-700 space-x-11 justify-center h-12 w-1/2 p-2 rounded-3xl m-3'>
        <button className='bg-gradient-to-r from-indigo-500  rounded-full p-1'  onClick={()=>{setColor("bg-gradient-to-r from-indigo-500")}}>Indigo</button>
        <button className='bg-gradient-to-r from-cyan-500  rounded-full p-1' onClick={()=>{setColor("bg-gradient-to-r from-cyan-500")}}>Cyan</button>
        <button className='bg-gradient-to-r from-red-500 rounded-full p-1' onClick={()=>{setColor("bg-gradient-to-r from-red-500")}}>Lavendar</button>
        <button className='bg-gradient-to-r from-orange-500  rounded-full p-1' onClick={()=>{setColor("bg-gradient-to-r from-orange-500")}}>Sunrise</button>
        <button className='bg-gradient-to-r from-green-500 rounded-full p-1' onClick={()=>{setColor("bg-gradient-to-r from-green-500")}}>Grass</button>
        <button className='bg-gradient-to-r from-pink-500  rounded-full p-1' onClick={()=>{setColor("bg-gradient-to-r from-pink-500")}}>Blush</button>
        <button className='bg-gradient-to-r from-yellow-500 rounded-full p-1' onClick={()=>{setColor("bg-gradient-to-r from-yellow-500")}}>Mango</button>
        <button className='bg-gradient-to-r from-orange-900 rounded-full p-1' onClick={()=>{setColor("bg-gradient-to-r from-orange-500")}}>Birth</button>
      </nav>
    </div>
    </>
  );
}

export default App;
