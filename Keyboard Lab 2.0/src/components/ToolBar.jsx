import { RefreshCcw } from 'lucide-react'
import React from 'react'

const ToolBar = () => {
  return (
    <div className='bg-white py-2 px-8 shadow-sm rounded-md flex justify-between items-center'>
        <div className="time-buttons flex items-center gap-8 text-gray-600">
            <button>15s</button>
            <button>30s</button>
            <button>45s</button>
            <button>60s</button>
        </div>
      <button title='restart test'><RefreshCcw className='size-5 text-gray-600 hover:text-black'/></button>
    </div>
  )
}

export default ToolBar
