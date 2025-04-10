import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

function GlobalState({ children }){

    const [theme, setTheme] = useState('light');

    function handleChangeTheme() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        console.log(theme)
    }

    return (
        <GlobalContext.Provider value={{ theme, setTheme, handleChangeTheme }}>
            {children}
        <GlobalContext.Provider>
    )
}

export default GlobalState
