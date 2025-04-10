import { useReducer } from "react";

const initialState = {
    showTextFlag : false,
    changeTextStylesFlag : false
}
const HIDE_TEXT = 'HIDE_TEXT';
const SHOW_TEXT = 'SHOW_TEXT';
const CHANGE_TEXT_STYLE = 'CHANGE_TEXT_STYLE';

function reducer(state, action){
    switch (action.type) {
        case 'HIDE_TEXT':
            
            return state
    
        default:
            return state
    }
}

function useReducerExample() {

    const [state, dispatch] = useReducer(reducer, initialState, )

    console.log(state);
    
    return (
        <>
            <div>
                <h3>Use Reducer Hook Example</h3>
                <button onClick={() => dispatch({type : HIDE_TEXT})}>Hide Text</button>
                <button onClick={() => dispatch({type : SHOW_TEXT})}>Show Text</button>
                <button>Toggle Text Styles</button>
            </div>
        </>
    );
}

export default useReducerExample