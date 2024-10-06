import React from "react"

interface PropsTypes {
  padding: string
  className: string
  text: string
  type?: "button" | "submit" | "reset"
  icon?: React.ReactNode
  icon2?: React.ReactNode
  onClick?: () => void
  disable?: boolean
}

const Button = ({ padding, className, text, type, icon, icon2, onClick, disable }: PropsTypes) => {
  return (
    <button
      onClick={onClick}
      className={`${padding} ${className} transition-all duration-500`}
      type={type}
      disabled={disable}
    >
      {icon} {icon2}
      {text}
    </button>
  )
}

export default Button
