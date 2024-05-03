import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { LuShare2 } from "react-icons/lu";
import style from './haderHotelPage.module.css'

const HeaderHotelPage = ({ address, name, space }) => {
  return (
    <header className={`${style.header} d-flex align-center`}>
      <div className={`${style.name_address} d-flex`}>
        <h3>
          {name}
        </h3>
        <p>an</p>
        <span className='d-flex align-center'>
          <span><IoLocationOutline /></span>  {address}
        </span>
        <span>  {space} km from centre</span>

      </div>

      <div className={`${style.btnHandler} d-flex `}>
        <span className={style.like}><FaRegHeart /></span>
        <span className={style.like}>
          <LuShare2 />
        </span>

        <a href="#" className='btn-link'> reserve </a>

      </div>
    </header>
  )
}

export default HeaderHotelPage
