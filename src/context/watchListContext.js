import React from 'react'
import { createContext } from "react";
import { useState } from "react";


export const WatchListContext = createContext();

export const WatchListContextProvider = props => {
    const [watchList, setWatchList] = useState(['bitcoin', 'ethereum', 'ripple'])

    return (
        <WatchListContext.Provider value={{watchList}}>
            {props.children}
        </WatchListContext.Provider>
    )
}