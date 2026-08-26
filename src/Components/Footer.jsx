import React from 'react'
import FooterLogo from '../img/footerLogo.png'
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi'

const Footer = () => {
  return (
    <div className="bg-[#FC8019] pt-10 sm:pt-13 px-4 sm:px-8 lg:px-16 xl:px-30 w-full min-h-40 mt-20 text-white text-sm">

      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4">
        <img className="w-20 shrink-0" src={FooterLogo} alt="Footer logo"/>

        <ul className="flex flex-wrap justify-center gap-4 sm:gap-5 text-center">
          <li>About Us</li>
          <li>Delivery</li>
          <li>Help & Support</li>
          <li>T&C</li>
        </ul>

        <p className="text-center whitespace-nowrap">
          Contact : +91 1234567899
        </p>

      </div>

      <div className=" flex justify-center gap-5 mt-6 pb-5">
        <FiFacebook className="text-lg" />
        <FiInstagram className="text-lg" />
        <FiTwitter className="text-lg" />
      </div>

    </div>
  )
}

export default Footer