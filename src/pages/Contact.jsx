import React from 'react'
import { useLanguage } from '../context/LanguageContext'

function Contact() {
    const { t } = useLanguage()

    return (
        <div className="page-contact">
            <div className="container contact-container">
                <h1 className="contact-title">Contact Info</h1>

                <div className="warning-message">
                    Please check your spam folder if you don't see a response within a day.
                </div>

                <div className="contact-content">
                    <p>
                        Due to the heavy email volume, I cannot answer very basic husbandry, "what morph", and breeding questions from the general public anymore. I have provided many resources on my website, along with Google and YouTube having endless information available. There are also many Facebook groups to ask your question publicly. If you have thoroughly researched a question and cannot find an answer anywhere else then I can help.
                    </p>
                    <p>
                        Thanks for your understanding!
                    </p>
                    <p>
                        We are based out of Idaho and do not have a public storefront.
                    </p>
                </div>

                <div className="gecko-eating-section">
                    <p>
                        If your gecko is not eating please see this page first:
                    </p>
                    <a href="/gecko-not-eating" className="gecko-eating-link">
                        Gecko Not Eating Page
                    </a>
                </div>

                <div className="contact-email-section">
                    <p className="email-label">Contact Email:</p>
                    <a href="mailto:info@papa-pharm-armenia.com" className="email-link">
                        info@papa-pharm-armenia.com
                    </a>
                    <p className="email-note">
                        Please check your spam folder for my reply.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contact
