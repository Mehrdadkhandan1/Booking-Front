import React, { useEffect, useState } from 'react'
import style from './hotelCard.module.css'
import api from '../../Services/Api'
import { imageSize } from '../../Tools/Tools'
import { Link } from 'react-router-dom'
const HotelCard = ({ hotel, country_code }) => {
    const [hotelInfo, setHotelInfo] = useState({})
    useEffect(() => {
        api.post('http://localhost:3000/api/hotelInfo', {
            id: hotel.id,
            language: 'en'
        }).then(resp => {
            // console.log(resp.data.images[0])
            setHotelInfo(resp.data)
        })
    }, [])
    const { images, address, name, id, star_rating, description_struct } = hotelInfo
    return (

        <div className={`${style.cardHotel} d-grid`}>
            {Object.keys(hotelInfo).length !== 0 && <>
                <div className={style.imageHotel}> <img src={imageSize(images[0], '240x240')} alt="" /> </div>

                <div className={`${style.infoHotel} d-flex`} >

                    <h3 className={style.title}>
                        {name}
                    </h3>

                    <span className={style.location}>
                        {address}
                    </span>
                    <p>{description_struct[0].paragraphs}</p>
                </div>


                <div className={style.scoreAndBtn}>
                    <div className={style.score}>
                        <span>score : </span>
                        <span>  {star_rating}</span>
                    </div>
                    <Link to={`/${id}`} state={{ countryCode: country_code }} className='btn-link'>
                        More ...
                    </Link>
                </div>
            </>
            }
        </div >
    )
}

export default HotelCard
