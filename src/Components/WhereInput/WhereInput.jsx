import React, { useState } from 'react'
import style from './whereInput.module.css'
import { LuBedSingle } from "react-icons/lu";
import PickerInput from '../pickerInput/PickerInput';
import { SlLocationPin } from "react-icons/sl";


const WhereInput = ({ cities, changeValue, value, setCity }) => {
    // value input
    console.log()
    const [hasFocus, setHasFocus] = useState(false)

    return (
        <div className='parent-inputs-search'>
            <div className={`${style.whereInput} input-search`}>
                <span className={style.iconInput}> <LuBedSingle /> </span>
                <input
                    onFocus={() => setHasFocus(true)}
                    value={value}
                    onChange={changeValue}
                    type="text"
                    placeholder='Where are you going ?' />
            </div>
            {(cities.length !== 0 && value && hasFocus) &&
                <PickerInput>
                    <ul className={style.listCity}>
                        {cities.map(({ name, id, country_code }, index) => {
                            return (
                                <li onClick={() => {
                                    setCity(name, id, country_code)
                                    setHasFocus(false)

                                }
                                } key={index} className='d-flex align-center'>
                                    <span className='d-flex'>
                                        <SlLocationPin />
                                    </span>
                                    <span>
                                        {name}
                                    </span>
                                </li>
                            )
                        })}
                    </ul>
                </PickerInput>
            }
        </div>
    )
}

export default WhereInput
