import React from 'react'
// style
import logo from './../../images/Logo.svg'
import style from './topNavbar.module.css'
import LinkBtn from '../linkBtn/LinkBtn'
const TopNavbar = () => {
    return (
        <nav className={style.topHeader}>
            <div className={style.logo}>
                <img src={logo} alt="logo" />
            </div>
            <div className={`${style.login} d-flex`}>
                <LinkBtn value={'Register'} link='#' />
                <LinkBtn value={'Login'} link='#' />
            </div>
        </nav>
    )
}

export default TopNavbar
