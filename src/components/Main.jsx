import {Outlet,useNavigate} from 'react-router-dom'


const Main = () => {
    const navigate = useNavigate();
const HandleClickToSeeMore = ()=>{
  navigate('/listitems');

}
  return (
  <>
  <Outlet />
    <main className='text-center '>


<button className='text-center bg-tertiary text-primaryDark px-3 py-2 font-bold rounded-t-2xl ' onClick={HandleClickToSeeMore}>See more</button>

    </main>
    </>
  )
}
export default Main