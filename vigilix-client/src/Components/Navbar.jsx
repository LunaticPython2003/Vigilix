import React from 'react'
// import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <div className='glass nav flex flex-col bg-[#E6E6E6] justify-around font-bold text-xl'>
                <div className='mx-15 flex text-center items-center justify-center hover:bg-[#E55451] h-[15rem] w-[15rem] cursor-pointer'>
                    <img src="./level.svg" alt="" width={25} className='mx-2'/>
                    <span>Level Config</span>
                </div>
                <hr style={{borderTop: "3px solid black"}}/>
                <div className='mx-15 flex text-center items-center justify-center hover:bg-[#E55451] h-[15rem] w-[15rem] cursor-pointer'>
                    <img src="./yaml.svg" alt="" width={25} className='mx-2'/>
                    <span>Yaml File Config</span>
                </div>
                <hr style={{borderTop: "3px solid black"}}/>
                <div className='mx-15 flex text-center items-center justify-center hover:bg-[#E55451] h-[15rem] w-[15rem] cursor-pointer'>
                    <img src="./wheel.svg" alt="" width={25} className='mx-2'/>
                    <span>Settings</span>
                </div>
            </div>
        </>
    )
}
