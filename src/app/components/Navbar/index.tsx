import React from 'react';
import Link from 'next/link';
import { IoCartOutline } from "react-icons/io5";
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";
import { IoIosCall, IoIosMail } from "react-icons/io";
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";

const Navbar = () => {
  return (
    <header>
    
      <div className="bg-[#252B42] text-[#FFFFFF] flex items-center justify-between px-8 py-2">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <IoIosCall />
            <span>(225) 553 -0118</span>
          </div>
          <div className="flex items-center space-x-1">
            <IoIosMail />
            <span>mechelle.revera@example.com</span>
          </div>
        </div>
        <div className="text-center">
          <p>Follow us and get a chance to win 80% off</p>
        </div>
        <div className="flex items-center space-x-2">
          <span>Follow Us:</span>
          <FaInstagram />
          <FaYoutube />
          <FaFacebook />
          <FaTwitter />
          
        </div>
      </div>

      
      <div className="bg-[#FAFAFA] text-[#252B42] flex items-center h-14 px-8">
        <div className="flex items-center space-x-4">
          <h3 className="text-2xl font-bold">Bandage</h3>
        </div>
        <nav className="flex-1 flex justify-center space-x-4">
          <Link href="/" legacyBehavior><a className="font-bold">Home</a></Link>
          <Link href="/shop" legacyBehavior><a className="font-bold flex items-center">Shop<IoIosArrowDown className="ml-1" /></a></Link>
          <Link href="/about" legacyBehavior><a className="font-bold">About</a></Link>
          <Link href="/blog" legacyBehavior><a className="font-bold">Blog</a></Link>
          <Link href="/contact" legacyBehavior><a className="font-bold">Contact</a></Link>
          <Link href="/pages" legacyBehavior><a className="font-bold">Pages</a></Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/login" legacyBehavior><a className="font-bold text-[#23A6FO]">Login/Register</a></Link>
          <IoIosSearch size={16} />
          <IoCartOutline size={16} />
          <IoIosHeartEmpty  size={16}/>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
