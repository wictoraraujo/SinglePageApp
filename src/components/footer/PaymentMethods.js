import React, { useState, useEffect } from 'react'
import paymentData from '../../schemas/footer/payment-methods.json'
import './PaymentMethods.scss'

function PaymentMethods() {
    const [payments, setPayments] = useState([])

    useEffect(() => {
        setPayments(paymentData.payments)
    }, [])

    return(
        <section className='payment-methods'>
            <h2 className='payment-methods__title'>Formas de Pagamento</h2>
            <div className='payment-methods__images'>
                {payments.map((payment, index) => (
                    <div key={index}>
                        <img src={require(`../../${payment.url}`)} alt={payment.title} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default PaymentMethods;