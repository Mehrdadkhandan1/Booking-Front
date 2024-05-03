import React, { createRef, useRef, useState } from 'react'
import { LuCalendarDays } from "react-icons/lu";

import style from './dateInput.module.css'
import PickerInput from '../pickerInput/PickerInput';
import DateRangePicker from '../datePicker/datePicker';
import { changeFormatDate } from '../../Tools/Tools';

const DateInput = ({ checkDate }) => {
    const [hasFocus, setHasFocus] = useState(false)

    const change = (dates) => {
        const [start, end] = dates
        const checkin = changeFormatDate(start)
        const checkout = changeFormatDate(end)
        const dateCheck = {
            checkin,
            checkout
        }
        checkDate(dateCheck)

    }

    return (
        <div onFocus={() => {
            setHasFocus(true)
        }}
            onBlur={(e) => {
                e.stopPropagation()
                // e.bubbles = false
                // console.log(e)
                console.log(e.relatedTarget)
                console.log('blurred')
                console.log(!e.relatedTarget)
                if (!e.relatedTarget || !e.relatedTarget.className.includes('react-datepicker__day'))
                    setHasFocus(false)

            }}
            className='parent-inputs-search' >

            <div className={`${style.whereInput} input-search`}>
                <span className={style.iconInput}> <LuCalendarDays /> </span>
                <input

                    type="text"
                    placeholder='Check-in date — Check-out date' />
            </div>
            {
                hasFocus &&
                <PickerInput  >
                    <DateRangePicker change={change} />
                </PickerInput>
            }
        </div >
    )

}

export default DateInput
