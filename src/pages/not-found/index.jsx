import { Link } from "react-router-dom"


function NotfoundPage() {

    return (
        <div>
            <h1>This page doesnt exist</h1>
            <Link to={"/recipe-list"}>Return to Recipe List Page</Link>
        </div>
    )
}

export default NotfoundPage