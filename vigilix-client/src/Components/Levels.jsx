import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import Button from "./Button"

export default function Levels() {
    const [open, setOpen] = React.useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            <div className="flex flex-col w-full">
                <Accordion className="p-5" open={open === 1}>
                    <AccordionHeader className="flex m-5" onClick={() => handleOpen(1)}>
                        <div>Level 1 :</div>
                        <Button />
                    </AccordionHeader>
                    <AccordionBody>
                        <ul className="flex px-5 justify-between">
                            <li>Disable Wifi</li>
                            <li>Disable Bluetooth</li>
                            <li>Disable time</li>
                            <li>Disable Location</li>
                        </ul>
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} className="p-5">
                    <AccordionHeader onClick={() => handleOpen(2)}>
                        Level 2 :
                        <Button />
                    </AccordionHeader>
                    <AccordionBody>
                        <ul className="flex px-5 justify-between">
                            <li>Disable Wifi</li>
                            <li>Disable Bluetooth</li>
                            <li>Disable time</li>
                            <li>Disable Location</li>
                        </ul>
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} className="p-5">
                    <AccordionHeader onClick={() => handleOpen(3)}>
                        Level 3 :
                        <Button />
                    </AccordionHeader>
                    <AccordionBody>
                        <ul className="flex px-5 justify-between">
                            <li>Disable Wifi</li>
                            <li>Disable Bluetooth</li>
                            <li>Disable time</li>
                            <li>Disable Location</li>
                        </ul>
                    </AccordionBody>
                </Accordion>
            </div>
        </>
    );
}