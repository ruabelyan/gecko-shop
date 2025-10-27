const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-social">
                        <a href="mailto:info@papa-pharm-armenia.com" className="social-icon social-email" aria-label="Email">
                            <i className="fas fa-envelope"></i>
                        </a>
                        <a href="#" className="social-icon social-facebook" aria-label="Facebook">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="social-icon social-instagram" aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="social-icon social-youtube" aria-label="YouTube">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>

                <div className="footer-separator"></div>

                <div className="footer-bottom">
                    <div className="payment-methods">
                        <div className="payment-row">
                            <div className="payment-icon payment-cashapp">
                                <i className="fas fa-dollar-sign"></i>
                            </div>
                            <div className="payment-icon payment-apple">
                                <span className="payment-text">Apple Pay</span>
                            </div>
                            <div className="payment-icon payment-google">
                                <span className="payment-text">G Pay</span>
                            </div>
                            <div className="payment-icon payment-visa">
                                <span className="payment-logo">VISA</span>
                            </div>
                            <div className="payment-icon payment-mastercard">
                                <div className="mastercard-circles">
                                    <span className="circle circle-red"></span>
                                    <span className="circle circle-orange"></span>
                                </div>
                            </div>
                            <div className="payment-icon payment-amex">
                                <span className="payment-logo">AMEX</span>
                            </div>
                            <div className="payment-icon payment-discover">
                                <span className="payment-logo">DISCOVER</span>
                            </div>
                        </div>
                        <div className="payment-row">
                            <div className="payment-icon payment-jcb">
                                <span className="payment-logo">JCB</span>
                            </div>
                        </div>
                    </div>

                    <div className="copyright">
                        Copyright © 2024-Present Papa Pharm Armenia<br />
                        Do Not Duplicate Without Permission
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

