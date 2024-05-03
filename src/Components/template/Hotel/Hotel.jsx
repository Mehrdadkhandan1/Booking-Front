import React, { useEffect, useState } from 'react'
import style from './hotel.module.css'
import { useLocation, useParams } from 'react-router-dom'
import api from '../../../Services/Api'
import backgroundImage from '../../../images/map.jpg'
import { FaLocationDot } from "react-icons/fa6";






import HeaderHotelPage from '../../hedaerHotelPage/HeaderHotelPage';
import GalleryHotel from '../../galleryHotel/GalleryHotel';
import OverLay from '../../overlay/OverLay'
import MapR from '../../Map/Map'
import axios from 'axios'
import { calculateDistance } from '../../../Tools/Tools'

const Hotel = () => {



    const [cityCenter, setCityCenter] = useState({})




    const location = useLocation();
    const { state } = location; // دریافت اطلاعات ارسال شده از Link







    const [infoHotel, setInfoHotel] = useState({})








    const param = useParams()
    useEffect(() => {
        api.post('http://localhost:3000/api/hotelInfo', {
            id: param.id,
            language: 'en'
        }).then(resp => {
            setInfoHotel(resp.data)
        })




        const getCityCenterCoordinates = async () => {
            try {
                const response = await axios.get(
                    `https://api.api-ninjas.com/v1/geocoding?city=${state.countryCode.name}&country=${state.countryCode.country_code}`, {
                    headers: { "X-Api-Key": 'JLbwakXKD0N87dn1Y63ZGw==u9HC88Ik8SdLWJGJ' }
                }
                );


                const obj = {
                    latitude: response.data[0].latitude,
                    longitude: response.data[0].longitude
                }

                setCityCenter(obj)
            } catch (error) {
                console.error('Error fetching city center coordinates:', error);
                return null;
            }
        };

        getCityCenterCoordinates()
    }, [])
    const { images, address, name, id, star_rating, latitude, longitude } = infoHotel
    return (
        <div className={style.hotel}>
            <HeaderHotelPage name={name} address={address} space={calculateDistance({ longitude, latitude }, cityCenter)} />



            <main className={style.main}>
                <GalleryHotel images={images} />
                <div className={style.showMap} style={{ backgroundImage: `url(${backgroundImage})` }}>
                    <span>
                        <FaLocationDot />
                    </span>
                    <a className='btn-link' href="#">
                        show map
                    </a>
                </div>
            </main>
            <OverLay>
                {infoHotel?.longitude &&
                    <MapR position={ [latitude, longitude] } />
                }
            </OverLay>
        </div>
    )
}

export default Hotel
