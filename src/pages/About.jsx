import React from 'react'
import { useLanguage } from '../context/LanguageContext'

function About() {
    const { t } = useLanguage()

    return (
        <div className="page-about">
            <div className="container">
                <div className="about-header">
                    <div className="about-intro">
                        <h1>About Us</h1>
                        <p>{t('about.intro1')}</p>
                        <p className="tree-initiative">{t('about.treeInitiative')}</p>
                    </div>
                    <div className="about-logo">
                        <div className="logo-container">
                            <span className="logo-text-top">PAPA PHARM ARMENIA</span>
                            <span className="logo-main">EVERY ORDER</span>
                            <span className="logo-text-bottom">• PLANTS ONE TREE •</span>
                            <span className="logo-location">IN ARMENIA</span>
                            <div className="logo-icon">🦎</div>
                        </div>
                    </div>
                </div>

                <section className="about-section">
                    <h2 className="section-title">{t('about.history.title')}</h2>
                    <p>{t('about.history.text')}</p>
                </section>

                <section className="about-section">
                    <h2 className="section-title">{t('about.member.title')}</h2>
                    <p>{t('about.member.text1')}</p>
                    <p>{t('about.member.text2')}</p>
                    <p>{t('about.member.text3')}</p>
                </section>

                <section className="about-section">
                    <h2 className="section-title">{t('about.memberships.title')}</h2>
                    <p>{t('about.memberships.text')}</p>
                </section>
            </div>
        </div>
    )
}

export default About
