"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { PiBookOpenTextLight,PiFileThin,PiSparkleLight,PiTargetLight } from "react-icons/pi"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Bottle water",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Pure water",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Dispenser",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Ice bLocks",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Cold room",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Event planning",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export function Menu() {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
          <div className="flex">
            <ul className="grid p-2 md:w-[400px] lg:w-[250px] hover:cursor-pointer border-r">
                <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm">
                <PiBookOpenTextLight className="text-6xl mr-2 text-custom-blue"/>
                <div className="">
                    <a href="">Blocks</a>
                    <p className="text-gray-400 text-sm font-light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea porro nesciunt provident reiciendis in qu
                    </p>
                </div>
                
                </div>
                <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm">
                <PiBookOpenTextLight className="text-6xl mr-2 text-custom-blue"/>
                <div className="">
                    <a href="">Cements</a>
                    <p className="text-gray-400 text-sm font-light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea porro nesciunt provident reiciendis in qu
                    </p>
                </div>
                
                </div>
                <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm">
                <PiBookOpenTextLight className="text-6xl mr-2 text-custom-blue"/>
                <div className="">
                    <a href="">Inter Locks</a>
                    <p className="text-gray-400 text-sm font-light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea porro nesciunt provident reiciendis in qu
                    </p>
                </div>
                
                </div>
            </ul>
            <div className="">
            <ul className="grid p-2 md:w-[400px] lg:w-[250px] hover:cursor-pointer border-r">
                <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm">
                <div className="">
                    <a href="">Blocks</a>
                    <p className="text-gray-400 text-sm font-light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea porro nesciunt provident reiciendis in qu
                    </p>
                </div>
                
                </div>
                <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm">
                <div className="">
                    <a href="">Cements</a>
                    <p className="text-gray-400 text-sm font-light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea porro nesciunt provident reiciendis in qu
                    </p>
                </div>
                
                </div>
                <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm">
                <div className="">
                    <a href="">Inter Locks</a>
                    <p className="text-gray-400 text-sm font-light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea porro nesciunt provident reiciendis in qu
                    </p>
                </div>
                
                </div>
            </ul>
            </div>
          </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Osan water</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem className="hover:bg-gray-400/10"
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/pricing" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
           Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/vacancy" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
         Vacancy  
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
