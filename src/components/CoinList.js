import React, { useEffect, useState } from 'react'
import coinGecko from '../apis/coinGecko'
import { useContext } from 'react'
import { WatchListContext } from '../context/watchListContext'

const CoinList = () => {

    const [coins, setCoins] = useState([])
    const {watchList} = useContext(WatchListContext)
    const [isLoading, setIsLoading] = useState(false)
    console.log(watchList)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            const response = await coinGecko.get('/coins/markets', {
            params: {
                vs_currency: 'gbp',
                ids: watchList.join(',')
            }
        })
        setCoins(response.data)
        setIsLoading(false)
    }

        fetchData() 
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default CoinList
