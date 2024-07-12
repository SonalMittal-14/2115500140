import React, { useState } from 'react'
import { IoBackspaceOutline } from "react-icons/io5";
import "./Button.css"



const Buttons = () => {
    const [value,setvalue] = useState("")
  return ( 
    <section>




        <div className='flex items-center justify-center min-h-screen  z-10  '  >

        

            <form action='' className='  bg-black login px-6 py-8 rounded-3xl'>

                <h1 className='text-6xl text-white text-center font-semibold tracking-wider '>Calculator</h1>

                <div className='w-full '>
                    <input className='w-full rounded-xl py-4 px-2 text-end focus:outline-0 text-3xl bg-white text-gray-900 ' readOnly type='text' value={value}/>
                </div>
                <div className='flex  gap-x-10'>
                    <input className='w-16 bg-orange-500 text-white py-4 rounded-full text-2xl' type='button' value="AC" onClick={e =>setvalue("")}/>
                    <input className='w-16 bg-orange-500 text-white py-4 rounded-full text-2xl' type='button' value="%" onClick={e=>setvalue(value+e.target.value)}/>
                    <div className='w-16 bg-orange-500 text-white py-4 rounded-full  flex justify-center text-3xl ' onClick={e =>setvalue(value.slice(0,-1))}> 
                    <IoBackspaceOutline/>
                    </div>
                    <input className='w-16 bg-orange-500 text-white py-4 rounded-full text-2xl' type='button' value="/" onClick={e=>setvalue(value+e.target.value)}/>
                </div>
                <div className='space-x-10'>
                    <input className='w-16 bg-gray-500 text-white py-4 rounded-full text-2xl ' type='button' value="7" onClick={e=>setvalue(value+e.target.value)}/>
                    <input className='w-16 bg-gray-500 text-white py-4 rounded-full text-2xl' type='button' value="8" onClick={e=>setvalue(value+e.target.value)}/>
                    <input className='w-16 bg-gray-500 text-white py-4 rounded-full text-2xl' type='button' value="9" onClick={e=>setvalue(value+e.target.value)}/>
                    <input className='w-16 bg-orange-500 text-white py-4 rounded-full text-2xl' type='button' value="*" onClick={e=>setvalue(value+e.target.value)}/>
                </div>
                <div className='space-x-10'>
                    <input className='w-16 bg-gray-500 text-white py-4 rounded-full text-2xl' type='button' value="4" onClick={e=>setvalue(value+e.target.value)}/>
                    <input className='w-16 bg-gray-500 text-white py-4 rounded-full text-2xl' type='button' value="5" onClick={e=>setvalue(value+e.target.value)}/>
                    <input className='w-16 bg-gray-500 text-white py-4 rounded-full text-2xl' type='button' value="6" onClick={e=>setvalue(value+e.target.value)}/>
                    <input className='w-16 bg-orange-500 text-white py-4 rounded-full text-2xl' type='button' value="-" onClick={e=>setvalue(value+e.target.value)}/>
                </div>
                <div className='space-x-10'>
                    <input className='w-16 bg-gray-500 text-white py-4 rounded-full text-2xl' type='button' value="1" onClick={e=>setvalue(value+e.target.value)}/>
                    <input className='w-16 bg-gray-500 text-white py-4 rounded-full text-2xl' type='button' value="2" onClick={e=>setvalue(value+e.target.value)}/>
                    <input className='w-16 bg-gray-500 text-white py-4 rounded-full text-2xl' type='button' value="3" onClick={e=>setvalue(value+e.target.value)}/>
                    <input className='w-16 bg-orange-500 text-white py-4 rounded-full text-2xl' type='button' value="+" onClick={e=>setvalue(value+e.target.value)}/>
                </div>
                <div className='space-x-10'>
                    <input className='w-16 bg-gray-500 text-white py-4 rounded-full text-2xl' type='button' value="00" onClick={e=>setvalue(value+e.target.value)}/>
                    <input className='w-16 bg-gray-500 text-white py-4 rounded-full text-2xl' type='button' value="0" onClick={e=>setvalue(value+e.target.value)}/>
                    <input className='w-16 bg-gray-500 text-white py-4 rounded-full text-2xl' type='button' value="." onClick={e=>setvalue(value+e.target.value)}/>
                    <input className='w-16 bg-orange-500 text-2xl text-white py-4 rounded-full' type='button' value="=" onClick={e=>setvalue(eval(value))}/>
                </div>
            </form>
        </div>
    </section>
  );
};

export default Buttons