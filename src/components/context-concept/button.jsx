import { useContext } from "react";
import { GlobalContext } from "../../context";

function ContextButtonComponent(){

    const {theme, setTheme, handleChangeTheme} = useContext(GlobalContext);

    const toggleTextContent = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <>
            <button onClick={handleChangeTheme}>
                Change theme
            </button>
        </>
    )
}


export default ContextButtonComponent