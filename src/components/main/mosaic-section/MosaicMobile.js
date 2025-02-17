import React, { useState, useEffect } from 'react'
import mosaicData from '../../../schemas/main/mosaic-grid.json'
import './MosaicMobile.scss'

function MosaicMobile() {
    const [images, setImages] = useState([])

    const importImages = () => {
        return mosaicData.images.map(img => ({
            ...img,
            src: require(`../../../assets/mosaic-section/${img.fileName}`)
        }));
    };

    useEffect(() => {
        setImages(importImages())
    }, [])

    return (
        <div className="mosaic-section__gallery__mobile">
            {images.map(image => (
                <div key={image.title} className="mosaic-section__image__mobile">
                    <img src={image.src} alt={image.title} />
                </div>
            ))}
        </div>
    )
}

export default MosaicMobile;
