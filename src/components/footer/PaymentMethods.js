import React, { useState, useEffect } from 'react'
import paymentData from '../../schemas/footer/payment-methods.json'

function PaymentMethods() {
    const [payments, setPayments] = useState([])

    useEffect(() => {
        setPayments(paymentData.payments)
    }, [])

    return(
        <section id='payment-methods'>
            <h4>Formas de Pagamento</h4>
            <div>
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