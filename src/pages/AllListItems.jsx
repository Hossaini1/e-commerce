
import { useNavigate } from "react-router-dom";
const AllListItems = () => {
  const navigate=useNavigate()
  const data_1 = 
    {
      "img": "https://images.pexels.com/photos/4668561/pexels-photo-4668561.jpeg"}
  return (
    <div className="w-full h-full">
        <div className="w-full h-full md:mb-2  sm:mb-1">
            <div className="relative">
              <img src={data_1.img} alt="" className="w-[100%] h-[70vw]" /> 
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center border-primary">
                <p className="text-primary text-center md:text-[90px] sm:text-[35px] font-bold sm:mt-10">Spring Sale</p>
                <p className="text-primary text-center md:text-3xl sm:text-sm font-bold md:mt-1 mt-2">Up TO -50%</p>
                <button onClick={()=>{navigate("/")}} className="bg-primary text-secondary md:px-4  md:py-2 md:mt-20 sm:mt-9 sm:text-[10px] sm:px-1 sm:py-1 sm:rounded-sm">Buy now</button>
              </div>

            </div>
          </div>
    
          <div  className="w-full grid md:grid-cols-3 sm:gap-x-1 sm:gap-y-1 ">
            <div className="bg-cover bg-center flex  items-center justify-center" style={{backgroundImage: 'url("https://images.pexels.com/photos/17290327/pexels-photo-17290327/free-photo-of-treppe-stufen-licht-fashion.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',width: '100%',
              height: "900px"}}>
              <div className="bg-black bg-opacity-50 p-8 rounded-md sm:text-[15px] text-primary md:text-xl relative w-full">
                <h1 className=" font-bold absolute sm:top-64 ">Pants & Jeans</h1>
                <button onClick={()=>{navigate("/pantsJeans")}} className ="border-b-2 absolute sm:top-72  md:mt-2">Discover me</button>
              </div>
            </div>
            <div className="bg-cover  sm:grid-cols-1 bg-center sm:h-[90%] md:h-screen flex items-center justify-center md:col-span-2" style={{backgroundImage: 'url("https://images.pexels.com/photos/19696764/pexels-photo-19696764/free-photo-of-frau-hand-wuste-model.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',width: '100%',height:"900px"}}>
              <div className="bg-black bg-opacity-50 p-8 rounded-md sm:text-[15px] text-primary md:text-xl relative w-full ">
                <h1 className="font-bold absolute top-64 ">Blouse & Shirts</h1>
                <button onClick={()=>{navigate("/blouseshirts")}} className ="border-b-2 absolute sm:top-72 md:mt-2">Discover me</button>
              </div>
            </div>

            <div className="bg-cover bg-center h-screen flex items-center justify-center  md:col-span-3 sm:text-[15px] text-primary md:text-xl" style={{backgroundImage: 'url("https://images.pexels.com/photos/3621598/pexels-photo-3621598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',width: '100%',height:"900px"}}>
              <div className="bg-black bg-opacity-50 p-8 rounded-md relative w-full ">
                <h1 className=" font-bold absolute sm:top-64 ">Tshirts & Tops</h1>
                <button onClick={()=>{navigate("/tshirtstops")}} className ="border-b-2 absolute sm:top-72 md:mt-2">Discover me</button>
              </div>
            </div>
            <div className="bg-cover bg-center h-screen flex items-center justify-center sm:text-[15px] text-primary md:text-xl" style={{backgroundImage: 'url("https://images.pexels.com/photos/3867167/pexels-photo-3867167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',width: '100%',height:"900px"}}>
              <div className="bg-black bg-opacity-50 p-8 rounded-md relative w-full ">
                <h1 className=" font-bold absolute sm:top-64 ">Dresses & Skirts</h1>
                <button onClick={()=>{navigate("/dressesskirts")}} className ="border-b-2 absolute sm:top-72 md:mt-2">Discover me</button>
              </div>
            </div>
            <div className="bg-cover bg-center h-screen flex items-center justify-center sm:text-[15px] text-primary md:text-xl" style={{backgroundImage: 'url("https://images.pexels.com/photos/6540086/pexels-photo-6540086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',width: '100%',height:"900px"}}>
              <div className="bg-black bg-opacity-50 p-8 rounded-md relative w-full ">
                <h1 className="font-bold absolute sm:top-64 ">Shoes</h1>
                <button  onClick={()=>{navigate("/shoes")}} className ="border-b-2 absolute sm:top-72 md:mt-2">Discover me</button>
              </div>
            </div>
            <div className="bg-cover bg-center h-screen flex items-center justify-center sm:text-[15px] text-primary md:text-xl" style={{backgroundImage: 'url("https://images.pexels.com/photos/2695792/pexels-photo-2695792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',width: '100%',height:"900px"}}>
              <div className="bg-black bg-opacity-50 p-8 rounded-md relative w-full ">
                <h1 className=" font-bold absolute sm:top-64 "> Womens Jacket</h1>
                <button  onClick={()=>{navigate("/womensjacke")}}className ="border-b-2 absolute sm:top-72 md:mt-2">Discover me</button>
              </div>
            </div>
          </div>
    </div>
   
    
  )
}
export default AllListItems