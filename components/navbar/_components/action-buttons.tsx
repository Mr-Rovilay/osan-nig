"use client";

import Button from "@/components/Button";
import Link from "next/link";
import { IoIosLogIn } from "react-icons/io";
import React, { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import DropDownMenu from "./drop-down-menu";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";

const ActionButtons = () => {
  const { user, signOutUser } = useAuth();
  const [isDropDownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropDownOpen);
  const closeDropdown = () => setIsDropdownOpen(false);

  return (
    <div className="flex items-center justify-center">
      <div className="flex gap-2 items-center">
        <Link href="#contact-us" className="hidden lg:flex items-center">
          <div>Contact us</div>
        </Link>
        <div className="font-thin lg:flex items-center hidden">|</div>
        {user ? (
          <div className="flex items-center gap-2">
            <Image
              width={48}
              height={48}
              src={user.photoURL || '/avatar.jpg'}
              alt={user.displayName || 'User Avatar'}
              className="rounded-full cursor-pointer"
            
            />
            <div className="flex flex-col items-center justify-center ">
<p className="">Welcome</p>
            <span className="mr-2">{user.displayName}</span>
            </div>
            <Button
  onClick={signOutUser}
  text="Logout"
  className="hidden md:flex bg-red-500 text-white px-2 py-1 rounded"
/>

          </div>
        ) : (
          <div className="flex lg:space-x-4 items-center">
            <Link href="/login">
              <Button
                icon={<IoIosLogIn />}
                text="Login"
                variant="secondary"
                className="hidden lg:flex items-center"
              />
            </Link>
          </div>
        )}
        {isDropDownOpen ? (
          <div
            className="rounded-full xl:hidden lg:hidden"
            onClick={toggleDropdown}
            aria-expanded="true"
            role="button"
          >
            <X className="h-5 w-5 items-center justify-center" />
          </div>
        ) : (
          <div
            className="flex lg:hidden"
            onClick={toggleDropdown}
            aria-expanded="false"
            role="button"
          >
            <AlignJustify className="h-5 w-5 items-center justify-center" />
          </div>
        )}
        <div className="mt-16">

        {isDropDownOpen && <DropDownMenu onClose={closeDropdown} />}
        </div>
      </div>
    </div>
  );
};

export default ActionButtons;
