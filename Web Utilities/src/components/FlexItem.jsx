import React, { useEffect, useState } from 'react'

const FlexItem = ({count}) => {
   
  return (
    <div className='bg-gradient-to-r from-[#00d2f3] to-[#2a82ff] h-20 w-20 font-semibold flex justify-center items-center rounded-md text-2xl'>
      {count}
    </div>
  )
}

export default FlexItem
