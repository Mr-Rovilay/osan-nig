import React from 'react'
interface DropDownMenuProps {
    onClose: () => void
}

const DropDownMenu: React.FC<DropDownMenuProps>= ({onClose}) => {
    const handleLinkClick = () => {
        onClose()
  
    }
  return (
    <div className='w-screen h-screen px-4 items-center justify-center absolute right-0 xl:hidden'> DropDownMenu</div>
  )
}

export default DropDownMenu 