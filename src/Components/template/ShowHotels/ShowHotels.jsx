import React, { useContext, useEffect } from 'react'
import style from './showHotels.module.css'
import { ContextHotel } from '../../../context/HotelContext'
import HotelCard from '../../HotelCard/HotelCard'
const ShowHotels = () => {

    const { state, dispatch } = useContext(ContextHotel)
    useEffect(() => {
        console.log(state)
    }, [state])
    return (
        <div className={style.showHotels}>
            {console.log(state.hotels.hotels)}
            {state.hotels.length !== 0 && state.hotels.hotels.map(hotel => {
                return (
                    <HotelCard country_code={state.country_code} hotel={hotel} />
                )
            })}
        </div >
    )
}

export default ShowHotels
