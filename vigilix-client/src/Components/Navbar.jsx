import React from 'react'
// import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <div className='nav flex flex-col border-2 border-black bg-[#EB7C79] justify-around font-bold text-xl'>
                <div className='mx-15 flex text-center items-center justify-center'>
                    <img src="./level.svg" alt="" width={25} className='mx-2'/>
                    <span>Level Config</span>
                </div>
                <hr />
                <div className='mx-15 flex text-center items-center justify-center'>
                    <img src="./yaml.svg" alt="" width={25} className='mx-2'/>
                    <span>Yaml File Config</span>
                </div>
                <hr />
                <div className='mx-20 flex text-center items-center justify-center'>
                    <img src="./wheel.svg" alt="" width={25} className='mx-2'/>
                    <span>Settings</span>
                </div>
            </div>
        </>
    )
}
