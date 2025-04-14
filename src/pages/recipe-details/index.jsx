import { useParams } from "react-router-dom"
import useSWR from 'swr'



function RecipeDetailsPage(){
    // const fetcher = (url) => fetch(url)
    const fetcher = (url) => fetch(url).then(res => res.json());
    const {id} = useParams()
    const { data, error, isLoading } = useSWR(`https://dummyjson.com/recipes/${id}`, fetcher);
    
    if (error) return <div>Failed to load</div>
    if (isLoading) return <div>Loading recipe ...</div>

    console.log(data);

    return (
        <>
            <div>
                <h1>Recipe Details of Item {data.id} is {data.name}.</h1>
                <div>
                Its Ingredients are:
                </div>
                <ul style={{ listStyle : 'none' }}>
                    {
                        data?.ingredients?.length > 0 ? 
                        data?.ingredients?.map((singleIngredient, index) => 
                        <div key={index}>
                            <li>{singleIngredient}</li>
                        </div>
                        ) : null
                    }
                </ul>
            </div>
        </>
    )
}

export default RecipeDetailsPage