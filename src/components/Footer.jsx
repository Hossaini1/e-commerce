import { Link } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaPinterestP } from "react-icons/fa";
import { SiSpotify } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io";
import logo from '../images/haupt.png';

const Footer = () => {
  return (
    <footer>
        < hr/>
        <div>
            <div className=" text-secondaryDark text-center pt-20 p-2  sm:text-sm  md:text-xl" >
                <span>Get exclusive promotions, private sales and new products</span>
                
            </div>
            <div className=" text-primary flex justify-center items-center p-5">
                <input  type="text" className="outline-none border-b-2 border-dotted border-secondaryDark bg-primary sm:text-xs md:text-xl" placeholder="Enter email" required></input>
            </div>
            <div className=" text-primary flex justify-center items-center ">
                <button className=" sm:w-20 sm:text-xs md:text-xl md:w-60 md:p-2 sm:p-1 bg-secondary rounded-sm   hover:bg-tertiary transition duration-1000 ease-out  "> Subscribe to </button>
            </div>

            <div>
                <section>
                    <option value=""></option>
                </section>
            </div>


            <div className="text-secondaryDark text-center text-xs">
               <div className="flex justify-center items-center  sm:space-x-2 sm:text-[10px]  md:text-xs md:space-x-6 cursor-pointer font-bold  "> 
                    <Link to="/help">Help</Link>
                    <Link to="/purchases">My purchases</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/company">Our company</Link>

                </div>
                
            </div>
                <div className="flex justify-center items-center space-x-6 cursor-pointer text-secondaryDark  p-4 sm:text-xs ">
                    <CiFacebook className="icon" />
                    <FaTwitter className="icon" />
                    <IoLogoInstagram className="icon" />
                    <FaPinterestP className="icon" />
                    <SiSpotify className="icon" />
                    <IoLogoYoutube className="icon" />
            </div>

            <div className="flex  justify-center items-center space-x-1 p-2 ">
                <img src={logo} alt="logo" className="w-8 sm:text-[5px]" />
                <p className="text-secondaryDark  sm:text-[8px] md:text-[10px]"> 2024  All rights reserved Privacy and Cookie Policy | Terms & Conditions | imprint</p>
            </div>
        </div>








    </footer>
  )
}

export default Footer