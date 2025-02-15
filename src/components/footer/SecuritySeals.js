import React, { useState, useEffect } from 'react'
import sealData from '../../schemas/footer/trust-seals.json'
import './SecuritySeals.scss'

function SecuritySeals() {
    const [seals, setSeals] = useState([])

    useEffect(() => {
        setSeals(sealData.seals)
    }, [])

    return (
        <section className='security-seals'>
            <h2 className='security-seals__title'>Selos de Segurança</h2>
            <div className='security-seals__images'>
                {seals.map((seal, index) => (
                    <div key={index}>
                        <img src={require(`../../${seal.url}`)} alt={seal.title} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SecuritySeals;