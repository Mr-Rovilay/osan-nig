"use client"

import Button from "@/components/Button"
import Link from "next/link"
import { IoIosLogIn } from "react-icons/io";
import React from "react"
import { AlignJustify, X } from "lucide-react";
import DropDownMenu from "./drop-down-menu";

const ActionButtons = () => {
    const [isDropDownOpen, setIsDropdownOpen] = React.useState(false)
    const toggleDropdown = () => setIsDropdownOpen(!isDropDownOpen)
    const closeDropdown = () => setIsDropdownOpen(false)
  return (
<div className="pr-2">
    <div className="items-center justify-center flex">
        <div className="flex xl:space-x-4 items-center">
            <Link href={"/contact-sales"} className="hidden lg:flex items-center">
            <div className="">Contact us</div>
            </Link>
            <div className="font-thin lg:flex items-center hidden">|</div>
            <div className="flex lg:space-x-4 items-center pr-4">
                <Button  icon={<IoIosLogIn />}  text="Login" variant="secondary" className="hidden lg:flex items-center"/>
            </div>
            {isDropDownOpen && (
                <div className="rounded-full xl:hidden" onClick={toggleDropdown}>
                    <X className="h-5 w-5 items-center justify-center"/>
                </div>
            )}
            {!isDropDownOpen && (
                <div className="flex lg:hidden" onClick={toggleDropdown}>
                    <AlignJustify className=" h-5 w-5 items-center justify-center"/>
                </div>
            )}
            {isDropDownOpen && (
                <DropDownMenu onClose={closeDropdown}/>
            )}
        </div>
    </div>
</div>
  )
}

export default ActionButtons