import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import {Settings, UserPlus, DollarSign, Headphones } from "lucide-react"
import Link from "next/link"
  
interface DropDownMenuProps {
    onClose: () => void
}

const DropDownMenu: React.FC<DropDownMenuProps>= ({onClose}) => {
    const handleLinkClick = () => {
        onClose()
  
    }
  return (
    <div className='mt-20 w-screen h-screen px-4 items-center justify-center absolute right-0 xl:hidden'> 
    <Accordion defaultValue={"item-1"} className="pl-2" type="single" collapsible>
    <AccordionItem className="mt-6 bottom-b" value="item-1">
        <AccordionTrigger>Use case</AccordionTrigger>
        <AccordionContent defaultValue={"item-1"} className="space-y-2">
            <Link href={"#"} className="flex" onClick={handleLinkClick}>
            <div className="">
                <Settings className="h-6 w-6 mr-2 text-custom-blue"/>
            </div>
            <div className="">Sales</div>
            </Link>
        </AccordionContent>
    </AccordionItem>
    </Accordion>
    </div>
  )
}

export default DropDownMenu 