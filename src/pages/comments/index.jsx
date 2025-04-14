import { useEffect } from "react"
import useFetch from "../../hooks/use-fetch"


function CommentsList() {

    const {data, pending, errorMsg} = useFetch('https://dummyjson.com/comments')

    if (pending) return <h1>Fetching comment. please wait!</h1>
    return (
        <>
            <div>
                <h1>Comments List Page</h1>
                <ul>
                    {
                        data?.comments?.length > 0 ?
                        data.comments?.map((singleCommentItem, index) => 
                            <div key={ singleCommentItem.id || index }>
                                <label>{singleCommentItem?.body}</label>
                                <p>{singleCommentItem?.likes}</p>
                            </div>
                            ) : null                        
                    }
                </ul>
            </div>
        </>
    )
}

export default CommentsList