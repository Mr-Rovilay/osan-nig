"use client"
import { useEffect, useState } from "react";
import ActionButtons from "./_components/action-buttons";
import Logo from "./_components/logo";
import {Menu} from "./_components/menu";
import {motion, useScroll, useMotionValueEvent} from "framer-motion";

const Navbar = () => {
  const {scrollY}  = useScroll();
  const [hidden, setHidden] = useState(true);

useMotionValueEvent(scrollY, "change", (latest) => {
  const previous = scrollY.getPrevious() ?? 0;
  if (latest > previous && latest > 150) {
    setHidden(true);
  } else {
    setHidden(false);
  }
});
  const navBarClasses = `pl-2 flex items-center justify-between space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 bg-white h-14 sticky top-0 z-50 border-b border-gray-200`;

  return (
    <motion.nav
    variants={{
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: "-100%" },
    }} 
    animate={hidden ? "hidden" : "visible"}
    transition={{duration: 0.3, ease: "easeInOut"}}
    className={navBarClasses}>
      <Logo />
      <Menu />
      <ActionButtons />
    </motion.nav>
  );
};

export default Navbar;
