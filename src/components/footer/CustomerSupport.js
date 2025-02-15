import React from 'react'
import supportData from '../../schemas/footer/customer-support.json'
import './CustomerSupport.scss'

function CustomerSupport() {
    return(
        <section className='customer-support'>
            <h2 className='customer-support__title'>{supportData.sectionTitle}</h2>
            <div>
                {supportData.links.map((link, index) => (
                    <div key={index}>
                        <a 
                        className='customer-support__links' 
                        href={link.url}
                        aria-label={`Acessar ${link.title}`}
                        >
                            {link.title}
                        </a>
                    </div>
                ))}
            </div>
            <div className='customer-support__whatsapp'>
                <span className='customer-support__whatsapp__span'>WhatsApp: {supportData.contact.whatsapp}</span>
            </div>
            <div className='customer-support__hours'>
                <span className='customer-support__hours__span'>{supportData.hours.title}</span>
                <span className='customer-support__hours__span'>{supportData.hours.schedule}</span>
            </div>
        </section>
    )
}

export default CustomerSupport;