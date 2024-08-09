import ActionButtons from "./_components/action-buttons"
import Logo from "./_components/logo"
import { Menu } from "./_components/menu"


const Navbar = () => {
  const navBarClasses = `container flex items-center justify-between space-x-10 bg-white h-14 sticky top-0 z-50 border-b border-gray-200`
  return (
    <div className={navBarClasses}>
        <Logo/>
        <Menu/>
        <ActionButtons/>
    </div>
  )
}

export default Navbar