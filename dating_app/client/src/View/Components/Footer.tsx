import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGooglePlus, faPinterest, faInstagram, } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {


    return (
        <div className="footer">
            <div className="socialMediaWrapper">
                <h3 className="headline">FOLLOW US</h3>
                <div className="icons">
                    <FontAwesomeIcon className="icons__twitter" icon={faTwitter} />
                    <FontAwesomeIcon className="icons__facebook" icon={faFacebook} />
                    <FontAwesomeIcon className="icons__instagram" icon={faInstagram} />
                    <FontAwesomeIcon className="icons__googlePlus" icon={faGooglePlus} />
                    <FontAwesomeIcon className="icons__pinterest" icon={faPinterest} />
                </div>
            </div>
            <div className="comopanyInfoWrapper">
                <h3 className="headline">COMPANY</h3>
                <p className="text">About</p>
                <p className="text">Careers</p>
                <p className="text">Press</p>
            </div>
            <div className="conditionInfoWrapper">
                <h3 className="headline">CONDITIONS</h3>
                <p className="text">Privacy</p>
                <p className="text">Cookies - Manage prefrences</p>
                <p className="text">Terms</p>
                <p className="text">Community Guidelines</p>
            </div>
            <div className="contactInfoWrapper">
                <h3 className="headline">CONTACT</h3>
                <p className="text">Support</p>
                <p className="text">Security</p>
                <p className="text">Safety Tips</p>
            </div>


        </div>


    )
}
export default Footer;