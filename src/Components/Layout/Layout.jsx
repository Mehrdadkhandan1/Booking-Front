import React from 'react'
import style from './Layout.moudule.css'
const Layout = ({ children }) => {
    return (
        <div className={style.layout}>
            {children}
        </div>
    )
}

export default Layout
