import React from 'react'
// icons
import { LuBedSingle } from "react-icons/lu";
import { BsAirplane } from "react-icons/bs";
import { IoCarSportOutline } from "react-icons/io5";

// style
import style from "./navbar.module.css"

// data navbar
const data = [
    { name: 'stays', icon: <LuBedSingle /> },
    { name: 'flights', icon: <BsAirplane /> },
    { name: 'car rentals', icon: <IoCarSportOutline /> },

]
const Navbar = () => {
    return (
        <nav className={style.navbar}>
            <ul className={`${style.navList} d-flex` }>
                {data.map(({ name, icon }, index) => {
                    return (
                        <li className={`d-flex align-center ${index ===0 && style.activeItem}`}  key={index}>
                            <a className='d-flex' href="#">
                                {icon}
                            </a>
                            <span> {name} </span>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar
