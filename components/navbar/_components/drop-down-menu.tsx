
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IoIosLogIn } from "react-icons/io";

import {
  BarChart,

  DollarSign,

  Settings,

} from "lucide-react";
import Button from "@/components/Button";

interface DropDownMenuProps {
  onClose: () => void;
}

const DropdownMenu: React.FC<DropDownMenuProps> = ({ onClose }) => {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className="mt-3 w-screen h-screen bg-white  px-4 items-center justify-center absolute  right-0 xl:hidden lg:hidden">
      <Accordion
       defaultValue="item-1"
        className="
            
            "
        type="single"
        collapsible
      >
        <AccordionItem className="mt-6 border-b" value="item-1">
          <AccordionTrigger className="">Products</AccordionTrigger>
          <AccordionContent
           defaultValue="item-1"
          
          
          className="space-y-2">
            <Link
              href={"/sales"}
              className="flex"
              onClick={handleLinkClick}
            >
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

        <AccordionItem className=" border-b" value="item-3">
          <AccordionTrigger>Osan Water</AccordionTrigger>
          <AccordionContent className="space-y-2">
            <Link
              href={"/sales"}
              className="flex"
              onClick={handleLinkClick}
            >
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
          className="
            flex
            flex-1
            items-center 
            justify-between
     
          
            py-4
            
            border-b
            "
        >
          Pricing
       
        </Link>

        <Link
          href={"/vacancies"}
          className="
            flex
            flex-1
            items-center 
            justify-between
            border-b
          
         
            py-4
          
      
            "
        >
    Vacancies
        
        </Link>

        <Link
          href={"#contact-us"}
          className="
            flex
            flex-1
            items-center 
            justify-between
            border-b
          
         
            py-4
          
      
            "
        >
    Contact us
        
        </Link>
      </Accordion>

      <div className="py-7">
        <div className="flex flex-col px-4">
          <Link href={"/login"}>
            <Button
              icon={<IoIosLogIn />}
            text="Login"
            variant="secondary"
            className="w-full"
        
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;