import React from 'react'
import supportData from '../../schemas/footer/customer-support.json'

function CustomerSupport() {
    return(
        <section id='customer-support'>
            <h2>{supportData.sectionTitle}</h2>
            <div>
                {supportData.links.map((link, index) => (
                    <div key={index}>
                        <a href={link.url}>{link.title}</a>
                    </div>
                ))}
            </div>
            <div>
                <h3>Contato</h3>
                <p>WhatsApp: {supportData.contact.whatsapp}</p>
            </div>
            <div>
                <h3>{supportData.hours.title}</h3>
                <p>{supportData.hours.schedule}</p>
            </div>
        </section>
    )
}

export default CustomerSupport;