import Link from "next/link";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IoIosLogIn } from "react-icons/io";
import { BarChart, DollarSign, Settings } from "lucide-react";
import Button from "@/components/Button";
import { useAuth } from "@/context/AuthContext";

interface DropDownMenuProps {
  onClose: () => void;
}

const DropdownMenu: React.FC<DropDownMenuProps> = ({ onClose }) => {
  const { user, signOutUser } = useAuth();

  const handleLinkClick = () => {
    onClose();
  };

  const dropdownVariants = {
    open: { opacity: 1, y: 0, display: "block" },
    closed: { opacity: 0, y: -20, transitionEnd: { display: "none" } },
  };

  return (
    <motion.div
      initial="closed"
      animate="open"
      exit="closed"
      variants={dropdownVariants}
      className="w-screen h-screen bg-white px-4 items-center justify-center absolute right-0 xl:hidden lg:hidden"
    >
      <Accordion defaultValue="item-1" type="single" collapsible>
        <AccordionItem className="border-b" value="item-1">
          <AccordionTrigger className="">Products</AccordionTrigger>
          <AccordionContent className="space-y-2">
            <Link href={"/sales"} className="flex" onClick={handleLinkClick}>
              <div>
                <DollarSign className="h-6 w-6 mr-4 text-green-400" />
              </div>
              <div>Sales</div>
            </Link>
            <Link
              href={"/marketing"}
              className="flex "
              onClick={handleLinkClick}
            >
              <div>
                <BarChart className="h-6 w-6 mr-4 text-rose-400" />
              </div>
              <div>Marketing</div>
            </Link>
            <Link
              href={"/product-management"}
              className="flex"
              onClick={handleLinkClick}
            >
              <div>
                <Settings className="h-6 w-6 mr-4 text-grey-400" />
              </div>
              <div>Product Management</div>
            </Link>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem className="border-b" value="item-3">
          <AccordionTrigger>Osan Water</AccordionTrigger>
          <AccordionContent className="space-y-2">
            <Link href={"/sales"} className="flex" onClick={handleLinkClick}>
              <div>
                <DollarSign className="h-6 w-6 mr-4 text-green-400" />
              </div>
              <div>Sales</div>
            </Link>

            <Link
              href={"/marketing"}
              className="flex "
              onClick={handleLinkClick}
            >
              <div>
                <BarChart className="h-6 w-6 mr-4 text-rose-400" />
              </div>
              <div>Marketing</div>
            </Link>
            <Link
              href={"/product-management"}
              className="flex"
              onClick={handleLinkClick}
            >
              <div>
                <Settings className="h-6 w-6 mr-4 text-grey-400" />
              </div>
              <div>Product Management</div>
            </Link>
          </AccordionContent>
        </AccordionItem>

        <Link
          href={"/pricing"}
          className="flex flex-1 items-center justify-between py-4 border-b"
          onClick={handleLinkClick}
        >
          Pricing
        </Link>

        <Link
          href={"/vacancies"}
          className="flex flex-1 items-center justify-between py-4 border-b"
          onClick={handleLinkClick}
        >
          Vacancies
        </Link>

        <Link
          href={"#contact-us"}
          className="flex flex-1 items-center justify-between py-4 border-b"
          onClick={handleLinkClick}
        >
          Contact us
        </Link>
      </Accordion>

      {user ? (
        <div className="py-7">
          <div className="flex flex-col">
            <Button
              onClick={signOutUser}
              text="Logout"
              className="bg-red-500 text-white px-2 py-1 rounded w-full"
            />
          </div>
        </div>
      ) : (
        <div className="py-7">
          <div className="flex flex-col px-4">
            <Link href={"/login"}>
              <Button
                icon={<IoIosLogIn />}
                text="Login"
                variant="secondary"
                className="w-full"
                onClick={handleLinkClick}
              />
            </Link>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default DropdownMenu;
