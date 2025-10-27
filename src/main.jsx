import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { LanguageProvider } from './context/LanguageContext'
import { FavoritesProvider } from './context/FavoritesContext'
import './assets/scss/main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <LanguageProvider>
            <FavoritesProvider>
                <App />
            </FavoritesProvider>
        </LanguageProvider>
    </React.StrictMode>,
)
