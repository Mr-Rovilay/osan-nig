"use client"

import Button from "@/components/Button"
import Link from "next/link"
import { IoIosLogIn } from "react-icons/io";
import React from "react"
import { AlignJustify, X } from "lucide-react";
import DropDownMenu from "./drop-down-menu";

const ActionButtons = () => {
    const [isDropDownOpen, setIsDropdownOpen] = React.useState(false);
    const toggleDropdown = () => setIsDropdownOpen(!isDropDownOpen);
    const closeDropdown = () => setIsDropdownOpen(false);

    return (
        <div className="">
            <div className="items-center justify-center flex">
                <div className="flex gap-2 items-center">
                    <Link href="#contact-us"className="hidden lg:flex items-center">
                        <div>Contact us</div>
                    </Link>
                    <div className="font-thin lg:flex items-center hidden">|</div>
                    <div className="flex lg:space-x-4 items-center">
                        <Link href={"/login"}>
                        <Button
                            icon={<IoIosLogIn />}
                            text="Login"
                            variant="secondary"
                            className="hidden lg:flex items-center"
                        />
                        </Link>
                    </div>
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
                    <div className="">
                    {isDropDownOpen && <DropDownMenu onClose={closeDropdown} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActionButtons;
