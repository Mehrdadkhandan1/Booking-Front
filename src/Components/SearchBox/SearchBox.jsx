import React, { useContext, useEffect, useState } from 'react'
import style from './searchBox.module.css'
import WhereInput from '../WhereInput/WhereInput'
import DateInput from '../dateInput/DateInput'
import PeopleInput from '../PeopleInput/PeopleInput'
import SubmitBtn from '../submitBtn/SubmitBtn'
import api from '../../Services/Api'
import { ContextHotel } from '../../context/HotelContext'
import { useNavigate } from 'react-router-dom'
const SearchBox = () => {
    const { state, dispatch } = useContext(ContextHotel)
    const [valueWhere, setValueWhere] = useState('')
    const [cities, setCities] = useState([])
    const [regionId, setRegionId] = useState('')
    const [countryCode, setCountryCode] = useState('')
    const [date, setDate] = useState({})
    const [people, setPeople] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        const controller = new AbortController()
        const timeoutId = setTimeout(() => {
            const fetchApi = async () => {
                try {
                    if (valueWhere !== '') {
                        const response = await api.post('/city', {
                            query: valueWhere,
                            AbortSignal: controller.signal
                        });
                        console.log(response.data)
                        setCities(response.data.regions)
                    }
                } catch (error) {
                    console.error(error);
                }
            };
            fetchApi();
        }, 500); // 

        return () => {
            clearTimeout(timeoutId);
            controller.abort();
        };
    }, [valueWhere])

    // handel input
    const changeValue = ({ target }) => {
        setValueWhere(target.value)
    }

    const setCity = (name, id, country_code) => {
        setRegionId(id)
        setValueWhere(name)
        setCountryCode({country_code,name})
    }



    const checkDate = (value) => {
        setDate(value)
    }


    const peopleGenerate = (value) => {
        const generatorRooms = []


        for (let room = 0; room < value.room; room++) {
            generatorRooms.push({ adults: value.adults, children: value.children })
        }

        setPeople(generatorRooms)
    }

    const searchRoom = () => {
        setLoading(true)
        const dataS = {
            hotels_limit: 10,
            checkin: date.checkin,
            checkout: date.checkout,
            language: "en",
            guests: people,
            region_id: regionId,
        }
        api.post('/someOtherEndpoint', dataS).then(resp => {


            dispatch({ key: 'SET_HOTELS', value: { data: resp.data, country_code: countryCode } })
            setLoading(false)
            navigate('/showHotels')
        })
    }


    return (
        <div className={`${style.searchBox}`}>
            <form onSubmit={(e) => e.preventDefault()} className={`${style.formSearch} d-flex align-center `}>
                <WhereInput setCity={setCity} cities={cities} value={valueWhere} changeValue={changeValue} />
                <DateInput checkDate={checkDate} />
                <PeopleInput sendValue={peopleGenerate} />
                <SubmitBtn click={searchRoom} loading={loading} />
            </form>
        </div>
    )
}

export default SearchBox
