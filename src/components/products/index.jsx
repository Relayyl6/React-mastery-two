import ProductItem from './components/product-item'
import './style.css'
import { useState, useEffect } from 'react';

const initialState = false


function ProductList({ name, city, listOfProduct }){
    // console.log(props)

    // const {name, city} = props

    const [flag, setFlag] = useState(initialState);
    const [count, setCount] = useState(0);
    const [changeStyle, setChangeStyle] = useState(false)

    const handleToggleText = () => {
        setFlag(!flag);
    }

    useEffect(() => {
        setFlag(!flag);
        console.log("Run only once on page load");

        return () => {
            console.log("component is unmounted")
        }
    }, []) // This will only run on page load once

    useEffect(() => {
        // console.log("Count changes");

        if (count === 10) {
            setChangeStyle(true);
        }
    }, [count])

    console.log(changeStyle);




    const handleIncreaseCount = () => {
        setCount(count + 1);
    }


    // function renderTextBlock(getFlag){

    //     return getFlag ? (
    //         <h4>
    //             My name is {name}, and I school in {city}
    //         </h4>
    //     ) : (
    //         <h4>
    //             Hello {name}
    //         </h4>
    //     )
    // }\

    // const renderTextBlock = flag ? (
    //         <h4>
    //             My name is {name}, and I school in {city}
    //         </h4>
    //     ) : (
    //         <h4>
    //             Hello {name}
    //         </h4>;
    //     )

    let renderTextBLock = null;

    if ( flag ) {
        renderTextBLock = ( 
            <h4>
                 My name is {name}, and I school in {city}
            </h4>
        ) 
    } else {
        renderTextBLock = (
            <h4>
                 Hello {name}
            </h4>
        )
    }

    return(
        <>
            <div>
                <h3 className="title">
                    Ecommerce Project
                </h3>
                <button style={{backgroundColor : changeStyle ? 'black' : 'white', color : changeStyle ? 'white' : 'black'}} onClick={handleToggleText}>Toggle text</button>
                {
                    flag ?  (
                            <h4>
                                {name} and {city}
                            </h4>
                            ) : (
                            <h4>
                                hello {name}
                            </h4>
                            )
                }

                <div>
                    <button onClick={handleIncreaseCount}>Increase count</button>                    
                    <p>Count is {count}</p>
                </div>
                {/* <ProductItem /> */}

                <ul>
                    {
                        listOfProduct.map(
                            (item, index) => <ProductItem singleProductItem={item} key={index}/>
                        )
                    }
                </ul>
            </div>
        </>
    );
}

export default ProductList