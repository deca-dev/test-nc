import React from 'react'
import { useState } from "react";
import LogoNav from "../../assets/Logo-text.png";
import { HashLink as Link} from "react-router-hash-link"
import DropDown from '../Profile/DropDown';

const ProfileHeader = () => {
    const [navbar, setNavbar] = useState(false);
  return (
    <nav className="sticky top-0 z-50 h-[80px] w-full bg-light-grey shadow">
      <div className="justify-between px-0 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div>
              <Link to={"/"}>
                <img
                  className="fill-current w-[15rem]"
                  src={LogoNav}
                  alt="medicalendar logo"
                  aria-label="medicalendar logo"
                />
              </Link>
            </div>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-dark-text"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-dark-text"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 bg-white justify-self-center pb-3 mt-0 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center bg-light-grey justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 font-sans px-5">
              <li className="text-dark-text hover:text-sky-fluor hover:underline">
                <Link to={"/"}>Inicio</Link>
              </li>
              <li className="text-dark-text hover:text-sky-fluor hover:underline">
                <Link to={"#services"}>Servicios</Link>
              </li>
              <li className="text-dark-text hover:text-sky-fluor hover:underline">
                <Link to={"#us"}>Acerca de Nostros</Link>
              </li>
              <li className="text-dark-text hover:text-sky-fluor hover:underline">
                <Link to={"#contact"}>Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="space-x-0 flex items-center gap-5">
          {/* <img className='w-16' src="./images/manface.png" alt="" />
          <p className='ml-5'>Bienvenido,<span className='font-bold'>Alinson</span></p> */}
          <DropDown/>
        </div>
      </div>
    </nav>
  )
}

export default ProfileHeader