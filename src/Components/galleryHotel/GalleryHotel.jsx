import React from 'react'
import style from './galleryHotel.module.css'
import { imageSize } from '../../Tools/Tools'
const GalleryHotel = ({ images }) => {
    return (
        <div className={style.gallery}>
            {images &&
                images.map((img, index) => {
                    if (index <= 5) {
                        return <div key={index} className={style.image} index-aria={index} >
                            <img src={imageSize(img, 'x500')} alt="" />
                        </div>
                    }
                })
            }
        </div>
    )
}

export default GalleryHotel
