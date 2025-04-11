import { useLocation } from "react-router-dom"
import useFetch from "../../hooks/use-fetch"


function RecipeList() {

    const _location = useLocation()

    // console.log(location);
    const {data, pending, errorMsg} = useFetch(
        'https://dummyjson.com/recipes'
    );

    // console.log(result);
    

    // if(pending) return <h1>Fetching recipes. Please wait!</h1>
    
    return (
        <>
            <div>
                <h1>Recipe List Page</h1>
                <ul>
                    {
                         data?.recipes?.length > 0 ? 
                         data.recipes.map((recipesItem, index) => 
                            <div key={recipesItem?.id || index}
                                style={{
                                    display : 'flex',
                                    alignItems : 'center',
                                    justifyContent : 'space-between',
                                    border : '1px solid black',
                                    borderRadius : '5px',
                                    padding : '10px',
                                    marginBottom : '10px',
                                    backgroundColor : '#f9f9f9',
                                    maxWidth : '500px'
                                }}>
                                <label style={{ 
                                        border : 'solid black', 
                                        borderRadius : '5px', 
                                        backgroundColor : 'black', 
                                        marginRight : '10rem',
                                        fontWeight : 'bold',
                                        fontSize : '20px',
                                        padding : '5px',
                                        marginLeft : '20px'
                                    }}>{recipesItem?.name}</label>
                                <img src={recipesItem?.image} style={{ 
                                                            maxWidth : '200px',
                                                            maxHeight : '100px',
                                                            border : '2px solid black',
                                                            borderRadius : '5px',
                                                            marginRight : '20px'
                                                            }}/>
                            </div>
                        ) : null
                    }
                </ul>
            </div>
        </>
    )
}

export default RecipeList