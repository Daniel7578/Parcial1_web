import { FormattedMessage } from "react-intl";
import './footer.css';

function FooterInfo() {
    return (
        <div className = 'footerInfo'>
            <p><FormattedMessage id= 'Contacto'/>: +57 3102105253 - info@elaromamagico.com - @elaromamagico</p>
        </div>
    );
}

export default FooterInfo;