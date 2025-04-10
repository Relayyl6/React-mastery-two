import { Link } from "react-router-dom"


function Header() {

    return (
        <header>
            <div><h1>Home Page</h1></div>
            <ul style={{ listStyle : 'none', display : 'flex', }}>
                {/* <li>Recipe: <Link to="">click here</Link></li> */}
                <li>Recipe</li>
                <li>Comments</li>
            </ul>
        </header>
    )
}

export default Header