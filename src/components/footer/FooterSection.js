import SecuritySeals from "./SecuritySeals";
import PaymentMethods from "./PaymentMethods";
import CustomerSupport from "./CustomerSupport";

function FooterSection() {
    return (
        <footer>
            <CustomerSupport />
            <SecuritySeals />
            <PaymentMethods />
        </footer>
    )
}

export default FooterSection;