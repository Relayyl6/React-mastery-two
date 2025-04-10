import { useContext } from "react";
import { GlobalContext } from "../../context";

function ContextTextComponent(){

    const {theme} = useContext(GlobalContext);

    console.log(theme);

    return (
        <>
            <h1 style={{fontSize : theme === 'light' ? '50px' : '100px',
                        color : theme === 'light' ? 'white' : 'black',
                        backgroundColor : theme === 'light' ? 'black' : 'white'
            }}>
                Leonard Oseghale
            </h1>
        </>
    )
}


export default ContextButtonComponent