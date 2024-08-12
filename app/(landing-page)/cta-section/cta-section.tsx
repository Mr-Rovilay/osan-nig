"use client"
import { useMediaQuery } from "react-responsive";
import { FaPhoneAlt } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa6";
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import Button from "@/components/Button";
import { useState } from "react";
import ProfileForm from "./_components";

const CTASection = () => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <section
      id="contact-us"
      className="bg-gradient-to-r from-green-50/50 via-teal-50 to-green-50/50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 py-10"
    >
      <div className="container mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-5">Ready to Build with the Best?</h2>
        <p className="text-lg mb-3 text-black">
          Contact us today to get started on your next construction project.
        </p>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mb-8 text-black">
  <div className="flex items-center justify-center">
    <FaPhoneAlt className="h-6 w-6 mr-2 text-custom-blue" />
    <a href="tel:+234 8137216334"><span>+234 8137216334</span></a>
  </div>
  <div className="flex items-center">
    <FaAddressBook className="h-7 w-7 mr-2 text-custom-blue" />
    <span className="capitalize">149/155 Isuti Road Egan Igando, Lagos State, Nigeria</span>
  </div>
</div>


        {isDesktop ? (
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="secondary" text="Contact us" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Get In Touch</DialogTitle>
                <DialogDescription>
                  Complete the form below and we will contact you right away.
                </DialogDescription>
              </DialogHeader>
              <ProfileForm />
            </DialogContent>
          </Dialog>
        ) : (
          <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
              <Button text="Contact us" variant="secondary" />
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader className="text-left">
                <DrawerTitle>Get In Touch</DrawerTitle>
                <DrawerDescription>
                  Complete the form below and we will contact you right away.
                </DrawerDescription>
              </DrawerHeader>
              <ProfileForm className="px-4" />
              <DrawerFooter className="pt-2">
                <DrawerClose asChild>
                  <Button
                    text="Cancel"
                    variant="secondary"
                    className="flex items-center justify-center"
                  />
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        )}
      </div>
    </section>
  );
};

export default CTASection;

<>
<ProfileForm/>
</>
