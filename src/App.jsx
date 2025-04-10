import { Routes, Route, useNavigate, Link, useRoutes } from 'react-router-dom';
import './App.css'
// import Users from './components/users/index.jsx'
// import ProductList from './components/products/index.jsx'
// import ContextButtonComponent from '.components/context-concept/button.jsx'
// import ContextTextComponent from '.components/context-concept/text.jsx'
// import useReducerExample from './components/use-reducer-example.jsx'
import LoginComponent from './components/login/index.jsx';
import RegisterComponent from './components/register/index.jsx';
import FormComponent from './form/index.jsx';
import RecipeList from './pages/recipes/index.jsx';
import CommentsList from "./pages/comments/index.jsx";
import RecipeDetailsPage from "./pages/recipe-details/index.jsx";
import NotfoundPage from "./pages/not-found/index.jsx";
import Layout from "./pages/layout/index.jsx"

0
// const dummyProductData = ['Product 1', 'Product 2', 'Product 3'];

// App -> ProductList -> ProductItem -> ButtonComponent

function CustomRoutes() {
  const element = useRoutes([
    {
      path : '/home', element : <Layout/>,
      children : [
          {
            path : 'recipe-list', element : <RecipeList/>
          },
          {
            path : 'comment-list', element : <CommentsList/>
          },
          {
            path : 'recipe-list/:id', element : <RecipeDetailsPage/>
          }
        ]
    },
    {
      path : '*', element : <NotfoundPage/>
    }
  ])
  return element
}

function App() {

  const navigate = useNavigate();

  return (
    <>
      <div className="App">
        <h1>React JS concepts</h1>
        {/* <ClassBasedComponent /> */}
        {/* <FunctionalComponent /> */}
        {/* <ProductList listOfProduct={dummyProductData} name="Yemuel" city="Benin City" />  */}

        {/* <Users /> */}
        {/* <useReducerExample /> */}
        {/* <ProductList listOfProduct={dummyProductData} name='Leonard' city='Benin city'/> */}

        {/* <ContextTextComponent /> */}
        {/* <ContextButtonComponent /> */}

        {/* <useReducerExample /> */}

        {/* <FormComponent/> */}

        {/* <div style={{ display : 'flex', gap : '20px' }}>
          <LoginComponent/>
          <RegisterComponent/>
        </div> */}

        <div style={{ width : '600px' }}>
          <h2>Lorem ipsum dolor sit amet <Link to={'/home/recipe-list'}>Alternate navigate to recipe page</Link>, 
          adipisicing elit. suscipit, dolores at atque molestiae numquam et dolor molestias suscipit, dolores at atque molestiae <Link to={"/home/comment-list"}>Alternate navigate to comment page</Link>numquam et dolor molestias repellat officiis.</h2>
        </div>
        {/* <div>
          <Link>
            Alternate navigate to to recpe page
          </Link>
        </div> */}

        <button onClick={() => navigate('/home/recipe-list')} style={{ background : 'black', color : 'white' }}>
          Navigate to Recipe List page</button>
        <button onClick={() => navigate('/home/comment-list')} style={{ background : 'black', color : 'white' }}>
          Navigate to Comment List page</button>


        {/* <Routes>
          <Route path="/home" element={<Layout/>}>
            <Route path="recipe-list" element={<RecipeList/>} />
            <Route path="comment-list" element={<CommentsList/>} />
            <Route path="recipe-list/:id" element={<RecipeDetailsPage/>} />
          </Route>  
          
          <Route path="*" element={<NotfoundPage/>} />
        </Routes> */}
        <CustomRoutes/>
      </div>
    </>
    
  )
}

export default App
