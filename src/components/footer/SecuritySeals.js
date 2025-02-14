import React, { useState, useEffect } from 'react'
import sealData from '../../schemas/footer/trust-seals.json'

function SecuritySeals() {
    const [seals, setSeals] = useState([])

    useEffect(() => {
        setSeals(sealData.seals)
    }, [])

    return (
        <section id='security-seals'>
            <h4>Selos de Segurança</h4>
            <div>
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