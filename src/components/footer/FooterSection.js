import SecuritySeals from "./SecuritySeals";
import PaymentMethods from "./PaymentMethods";
import CustomerSupport from "./CustomerSupport";

function Footer() {
    return (
        <footer>
            <CustomerSupport />
            <SecuritySeals />
            <PaymentMethods />
        </footer>
    )
}

export default Footer;