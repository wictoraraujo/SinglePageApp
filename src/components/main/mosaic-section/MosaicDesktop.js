import React, { useState, useEffect } from 'react'
import mosaicData from '../../../schemas/main/mosaic-grid.json'
import './MosaicDesktop.scss'

function MosaicDesktop() {
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

    const leftImages = images.filter(image => image.title === 'image1' || image.title === 'image2')
    const centerImage = images.find(image => image.title === 'image3')
    const rightImages = images.filter(image => image.title === 'image4' || image.title === 'image5')

    return (
        <div className='mosaic-section__gallery'>
                <div className="mosaic-section__image left">
                    {leftImages.map(image => (
                        <img key={image.title} src={image.src} alt={image.title} />
                    ))}
                </div>

                {centerImage && (
                    <div className="mosaic-section__image center">
                        <img src={centerImage.src} alt={centerImage.title} />
                    </div>
                )}

                <div className="mosaic-section__image right">
                    {rightImages.map(image => (
                        <img key={image.title} src={image.src} alt={image.title} />
                    ))}
                </div>
        </div>
    )
}

export default MosaicDesktop;