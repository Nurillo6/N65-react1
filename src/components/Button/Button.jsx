import React from 'react'

const Button = ({extraStyle, children}) => {
  return (
    <button className={`${extraStyle} w-[200px] py-[8px] text-green-400 rounded-md border-[1px] border-green-400`}>
      {children}
    </button>
  )
}

export default Button