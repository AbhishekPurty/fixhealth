import { Input } from 'antd'
import React from 'react'

const Form:React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center h-[5rem] w-[40%]">
        <Input placeholder="Basic usage" />
        <Input placeholder="Basic usage" />
      </div>
    </div>
  )
}

export default Form
