import React, { useState } from 'react'
import style from './peopleInput.module.css'
import { FiUser } from "react-icons/fi";
import PickerInput from '../pickerInput/PickerInput';
import { IoIosArrowDown } from "react-icons/io";
import GenerateRoomBtn from '../generateRoomBtn/GenerateRoomBtn';




const PeopleInput = ({ sendValue }) => {
    const [hasFocus, setHasFocus] = useState(false)
    const [people, setPeople] = useState({
        children: [],
        adults: 2,
        room: 1

    })

    const btnHandler = (name, type) => {
        if (type === 'increase') {
            setPeople(prevState => {
                return { ...prevState, [name]: prevState[name] + 1 }
            })
        }
        else {
            if (people[name] > 0)
                setPeople(prevState => {
                    return { ...prevState, [name]: prevState[name] - 1 }

                })
        }
    }

    return (
        <div
            onFocus={() => {
                setHasFocus(true)
            }}

            className='parent-inputs-search'>
            <div className={`${style.whereInput} input-search`}>
                <span className={style.iconInput}> <FiUser /> </span>
                <input type="text" placeholder={`${people.adults} adults · 0 children · ${people.room} room`} />
                <span >
                    <IoIosArrowDown />
                </span>
            </div>


            {hasFocus &&
                <PickerInput>
                    <div className={style.peopleHandler}>
                        <GenerateRoomBtn change={btnHandler} title='Adults' name='adults' value={people['adults']} />
                        <GenerateRoomBtn change={btnHandler} title='children' name="children" value={people['children'].length} />
                        <GenerateRoomBtn change={btnHandler} title='room' name="room" value={people['room']} />
                        <div className={style.parentDone}>
                            <button onClick={() => {
                                setHasFocus(false)
                                sendValue(people)
                            }} className={style.doneBtn}> Done </button>
                        </div>
                    </div>
                </PickerInput>}
        </div>
    )
}

export default PeopleInput
