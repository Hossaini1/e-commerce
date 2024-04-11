import { VscError } from "react-icons/vsc";
import { IoIosSearch } from "react-icons/io";
import { VscDebugDisconnect } from "react-icons/vsc";
import { TfiFaceSad } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate=useNavigate()
  return (
    <>
    <div className="w-full flex flex-col items-center">
        <div className="flex justify-center text-secondary pt-20 sm:text-2xl md:text-5xl">
            <VscError />
            <IoIosSearch />
            <VscDebugDisconnect />
            <TfiFaceSad />
        </div>
        <p className="font-bold text-center pt-3 sm:text-md md:text-2xl md:pt-9">This site has gone out of fashion</p>
        <p className="text-center sm:text-xs md:text-xl p-2 md:pt-7">The page does not exist. Double check the link or use the search above to find what you're looking for.</p>
        <button onClick={()=>{navigate("/")}}className="border-2 text-xs text-center p-2 md:p-4 mt-10 font-bold bg-tertiary  hover:bg-secondaryDark transition duration-1000 ease-out text-primary rounded-md cursor-pointer"> Discover more </button>
        
    </div>
    </>
    
  )
}

export default Error