import { useParams } from "react-router-dom"




function RecipeDetailsPage(){

    const {id} = useParams()
    
    return (
        <>
            <div>
                <h1>Recipe Details of Item {id}</h1>
            </div>
        </>
    )
}

export default RecipeDetailsPage