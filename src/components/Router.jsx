import { Routes, Route, Link} from "react-router-dom";
import AllListItems from "../pages/AllListItems";
const Router = () => {

    const links =[
    {
path:'',
element:''
    },
]

  return (
    <>
    <Link to={'/listitems'}></Link>

    <Routes>
       
        <Route path="/" element={<AllListItems />} />
      
      </Routes> 
    </>
  )
}
export default Router