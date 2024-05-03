import React from 'react'
import Navbar from '../navbar/Navbar'

// style 
import style from './header.module.css'
// component
import TopNavbar from '../topNavbar/TopNavbar'
import HeadTitle from '../HeadTitle/HeadTitle'
import SearchBox from '../SearchBox/SearchBox'
const Header = () => {
    return (
        <div className={style.header}>
            <TopNavbar />
            <Navbar />
            <HeadTitle />
            <SearchBox />
        </div>
    )
}

export default Header
