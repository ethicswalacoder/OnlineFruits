import React from 'react'
import { FaFacebook, FaGoogle, FaInstagram, FaTelegram } from 'react-icons/fa';

let year = new Date().getFullYear();

const Footer = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-primary to-secondary pt-12 pb-8 text-white ">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
                   {/* company details section */}
                   <div className="space-y-6">
                    <h1 className="text-4xl font-bold">
                        Orange Mint
                    </h1>
                    <p className=" text-sm max-w-[300px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iure ratione esse saepe molestias, suscipit, 
                        nihil quam sunt quis a laboriosam! Quo necessitatibus quia fugit qui suscipit itaque animi accusantium.
                    </p>
                   </div>
                   {/* NavLink section */}
                   <div className="space-y-6">
                    <h1 className="text-4xl font-bold">Quick Links</h1>
                    <div className="grid grid-cols-2 gap-3">
                        {/* first column links */}
                        <div>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                                <li>
                                    <a href="#">Search Fruits</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                        {/* second column links */}
                        <div>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                                <li>
                                    <a href="#">Search Fruits</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                   </div>

                   {/* social links section */}
                   <div className="space-y-6">
                    <h1 className="text-4xl font-bold">
                        Follow Us
                    </h1>
                    <div>
                        <p>+91 892-7307-388</p>
                        <p>Nandakumar, PurbaMedinipur, WestBengal</p>
                    </div>
                    <div   className="flex items-center gap-3">
                        <FaFacebook data-aos="zoom-in" className="text-3xl hover:scale-105 duration-300"/>
                        <FaInstagram data-aos="zoom-in" className="text-3xl hover:scale-105 duration-300"/>
                        <FaTelegram data-aos="zoom-in" className="text-3xl hover:scale-105 duration-300"/>
                        <FaGoogle data-aos="zoom-in" className="text-3xl hover:scale-105 duration-300"/>
                    </div>

                   </div>
            </div>
            {/* Copy write section */}
            <div className="w-full h-10">
                <div className="w-[90%]  bg-gray-100 h-[1px] mx-auto my-4"></div>
                    <div>
                    <h5 className="text-center  text-lg">© Copy Wright by @ArtBanglaBazaar - {`${year}`} </h5>
                    </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Footer
