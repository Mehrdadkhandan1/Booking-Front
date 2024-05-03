import React from 'react'
import styled from 'styled-components'
import { HiOutlinePlusSm, HiMinus } from "react-icons/hi";

const GenerateRoomBtn = ({ name, title, value, change }) => {
    const sendParameters = (e) => {
        const nameBtn = e.currentTarget.name
        change(name, nameBtn)
    }
    return (
        <Style className='d-flex align-center'>
            <span className="name">
                {title}
            </span>
            <div className='number-generate d-flex align-center'>
                <button onClick={sendParameters} name='increase' className='d-flex align-center' > <HiOutlinePlusSm /> </button>
                <span> {value} </span>
                <button onClick={sendParameters} name='decrease' className='d-flex'> <HiMinus /></button>
            </div>
        </Style>
    )
}

export default GenerateRoomBtn


const Style = styled.div`
    color: #000;
    font-size: 14px;
    font-weight: 500;
    padding:calc(var(--n-padding) * 4) ;
    justify-content: space-between;
    button{
        background-color: transparent;
        color: var(--color-blue);
        font-size:  var(--medium-font);
    }
    .number-generate{
        border: 1px solid #868686;
        padding: var(--n-padding-2x) var(--n-padding-4x) ;
        border-radius: 4px;
        min-width: 40%;
        justify-content: space-between;
        font-size: var(--medium-font);
    }

`