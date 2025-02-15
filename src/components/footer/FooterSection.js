import SecuritySeals from "./SecuritySeals";
import PaymentMethods from "./PaymentMethods";
import CustomerSupport from "./CustomerSupport";
import './FooterSection.scss'

function FooterSection() {
    return (
        <footer className="footer-section">
            <CustomerSupport />
            <SecuritySeals />
            <PaymentMethods />
        </footer>
    )
}

export default FooterSection;