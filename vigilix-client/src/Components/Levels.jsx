import React from "react";
import { useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import Hero from "./Hero";

export default function Levels() {
    const [open, setOpen] = useState(1);
    const [buttonText, setButtonText] = useState("Activate");

    const handleButtonClick = () => {
        setButtonText((prev) => (prev === "Activate" ? "Deactivate" : "Activate"));
        document.getElementById('my_modal_1').showModal()
    };

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            <div className="flex flex-col w-full bg-white">
                <Hero />
                <div className="mx-10">
                    <Accordion className="p-3" open={open === 1}>
                        <AccordionHeader onClick={() => handleOpen(1)}>
                            <div><b>Guardian Core</b> :  Level 1</div>
                        </AccordionHeader>
                        <AccordionBody>
                            <div className="text-center text-base my-3">
                                Guardian Core provides basic controls for essential security measures, ensuring a foundational level of protection in enterprise environments.
                            </div>
                            <ul className="flex px-5 justify-between font-bold ">
                                <li>Disables Wifi</li>
                                <li>Disables Bluetooth</li>
                                <li>Disables time</li>
                                <li>Disables Location</li>
                            </ul>
                            <div className="flex items-center justify-center">
                                <button className="border-2 border-blue-500 bg-blue-200 rounded p-2" onClick={handleButtonClick}>{buttonText}</button>
                                <dialog id="my_modal_1" className="modal">
                                    <div className="modal-box bg-white">
                                        <h3 className="font-bold text-lg text-black">LEVEL 1 </h3>
                                        <p className="py-4 text-black">Guardian Core is activated !</p>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                <button className="btn bg-[#E6E6E6] text-black border-none hover:bg-green-200">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2} className="p-3">
                        <AccordionHeader onClick={() => handleOpen(2)}>
                            <div><b> Sentinel Lockdown</b> : Level 2</div>
                        </AccordionHeader>
                        <AccordionBody>
                            <div className="text-center text-base my-3">
                                Sentinel Lockdown establishes a secure baseline by disabling non-essential processes like Bluetooth and limiting network access.
                            </div>
                            <ul className="flex px-5 justify-between font-bold ">
                                <li>Disables Wifi</li>
                                <li>Disables Bluetooth</li>
                                <li>Disables time</li>
                                <li>Disables Location</li>
                            </ul>
                            <div className="flex items-center justify-center">
                                <button className="border-2 border-blue-500 bg-blue-200 rounded p-2" onClick={handleButtonClick}>{buttonText}</button>
                            </div>
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3} className="p-3">
                        <AccordionHeader onClick={() => handleOpen(3)}>
                            <div> <b>Network Fortifier</b> : Level 3</div>
                        </AccordionHeader>
                        <AccordionBody>
                            <div className="text-center text-base my-3">
                                Network Fortifier further fortifies security by disabling additional services and protocols, reducing potential points of vulnerability.
                            </div>
                            <ul className="flex px-5 justify-between font-bold ">
                                <li>Disables Wifi</li>
                                <li>Disables Bluetooth</li>
                                <li>Disables time</li>
                                <li>Disables Location</li>
                            </ul>
                            <div className="flex items-center justify-center">
                                <button className="border-2 border-blue-500 bg-blue-200 rounded p-2" onClick={handleButtonClick}>{buttonText}</button>
                            </div>
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 4} className="p-3">
                        <AccordionHeader onClick={() => handleOpen(4)}>
                            <div><b>Core Isolator </b>: Level 4</div>
                        </AccordionHeader>
                        <AccordionBody>
                            <div className="text-center text-base my-3">
                                Core Isolator isolates critical system functions, disabling non-essential processes to ensure a highly controlled and secure enterprise environment.
                            </div>
                            <ul className="flex px-5 justify-between font-bold ">
                                <li>Disables Wifi</li>
                                <li>Disables Bluetooth</li>
                                <li>Disables time</li>
                                <li>Disables Location</li>
                            </ul>
                            <div className="flex items-center justify-center">
                                <button className="border-2 border-blue-500 bg-blue-200 rounded p-2" onClick={handleButtonClick}>{buttonText}</button>
                            </div>
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 5} className="p-3">
                        <AccordionHeader onClick={() => handleOpen(5)}>
                            <div><b>Fortress Defender </b> : Level 5</div>
                        </AccordionHeader>
                        <AccordionBody>
                            <div className="text-center text-base my-3">
                                Fortress Defender creates a highly restricted environment by disabling all non-essential processes, providing maximum security for critical enterprise assets.
                            </div>
                            <ul className="flex px-5 justify-between font-bold ">
                                <li>Disables Wifi</li>
                                <li>Disables Bluetooth</li>
                                <li>Disables time</li>
                                <li>Disables Location</li>
                            </ul>
                            <div className="flex items-center justify-center">
                                <button className="border-2 border-blue-500 bg-blue-200 rounded p-2" onClick={handleButtonClick}>{buttonText}</button>
                            </div>
                        </AccordionBody>
                    </Accordion>
                </div>
            </div>
        </>
    );
}