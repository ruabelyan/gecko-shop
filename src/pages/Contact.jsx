import React from 'react'
import { useLanguage } from '../context/LanguageContext'

function Contact() {
    const { t } = useLanguage()

    return (
        <div className="page-contact">
            <div className="container contact-container">
                <h1 className="contact-title">{t('contact.title')}</h1>

                <div className="warning-message">
                    {t('contact.warning')}
                </div>

                <div className="contact-content">
                    <p>{t('contact.message1')}</p>
                    <p>{t('contact.message2')}</p>
                    <p>{t('contact.message3')}</p>
                </div>

                <div className="gecko-eating-section">
                    <p>{t('contact.geckoEating.title')}</p>
                    <a href="/gecko-not-eating" className="gecko-eating-link">
                        {t('contact.geckoEating.link')}
                    </a>
                </div>

                <div className="contact-email-section">
                    <p className="email-label">{t('contact.email.label')}</p>
                    <a href="mailto:info@papa-pharm-armenia.com" className="email-link">
                        {t('contact.email.link')}
                    </a>
                    <p className="email-note">
                        {t('contact.email.note')}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contact
