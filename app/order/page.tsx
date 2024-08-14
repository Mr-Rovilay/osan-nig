import ProtectedLayout from '@/components/protected/ProtectedLayout'
import React from 'react'

const OrderPage = () => {
  return (
    <ProtectedLayout>
      <h1 className='h-screen container'>Welcome to the Order Page</h1>
      {/* Other dashboard content */}
    </ProtectedLayout>
  )
}

export default OrderPage