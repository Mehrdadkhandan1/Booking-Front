import React from 'react'
import style from './headTitle.module.css'
const HeadTitle = () => {
    return (
        <div className={`${style.headerTitle}` }>
            <header>
                <h1>Find your next stay</h1>
                <p>Search low prices on hotels, homes and much more...</p>
            </header>
        </div>
    )
}

export default HeadTitle
