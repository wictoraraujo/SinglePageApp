import React, { useState, useLayoutEffect } from 'react'
import MosaicDesktop from "./MosaicDesktop"
import MosaicMobile from "./MosaicMobile"
import './MosaicSection.scss'

function MosaicSection() {
    const [isMobile, setIsMobile] = useState(false)

    useLayoutEffect(() => {
        
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        handleResize()
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        };
    }, [])

    return (
        <div className="mosaic-section">
            {isMobile ? <MosaicMobile /> : <MosaicDesktop />}
        </div>
    )
}

export default MosaicSection;
