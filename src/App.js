import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import CoinDetailPage from './pages/CoinDetailPage'
import CoinSummaryPage from './pages/CoinSummaryPage'
import Header from './components/Header'
import './App.css'
import { WatchListContextProvider } from './context/watchListContext'

const App = () => {
    return (
        <div className='container'>
            <WatchListContextProvider>
            <BrowserRouter>
            <Header />
                <Route exact path='/' component={CoinSummaryPage}/>
            </BrowserRouter>
            </WatchListContextProvider>
        </div>
    )
}

export default App
