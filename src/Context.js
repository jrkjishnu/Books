import React, { useContext} from 'react';

const Mycontext = React.createContext();

const AppProvider = ({children})=>
{


    const getLocalStorage = ()=>
{
    let story = localStorage.getItem('story')
    if(story)
    {
        return JSON.parse(localStorage.getItem('story'))
    }
    else
    {
        return []
    }
}

    
    return <Mycontext.Provider value={{
        getLocalStorage
    }}>{children}</Mycontext.Provider>
}

export const useGlobalContext = ()=>
{
    return useContext(Mycontext);
}

export {AppProvider,Mycontext}