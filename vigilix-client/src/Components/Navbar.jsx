import React from 'react'
// import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <div className='nav flex flex-col border-2 border-black'>
                <ul className='list-none'>
                    <li className='m-14'>Level Config</li>
                    <hr />
                    <li className='m-14'>Yaml File Config</li>
                    <hr />
                    <li className='m-14'>Settings</li>
                    <hr />
                </ul>
            </div>
        </>
    )
}
