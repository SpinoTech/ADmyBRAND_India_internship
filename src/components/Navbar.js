import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="w-full h-16 flex flex-row justify-around items-center bg-[#042f2e]">

            <Link className='text-xl p-3 rounded-3xl font-bold bg-[#033033] shadow-[0_0_50px_rgba(8,_112,_184,_0.7)]' to="/">Posts</Link>
            <Link className='text-xl p-3 rounded-3xl font-bold bg-[#033033] shadow-[0_0_50px_rgba(8,_112,_184,_0.7)]' to="/map">Map</Link>

        </div>
    )
}
