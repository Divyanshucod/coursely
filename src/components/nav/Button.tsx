import React, { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
    onClick?: ()=> void,
    size?:'icon'|'big'|'small',
    children:React.ReactNode,
    variant?:'primary'|'secondary'|'ghost',
    color?:string,
    disabled?:boolean
}>


const Button = ({
    onClick,
    children,
    variant = 'primary',
    color = 'blue',
    disabled = false,
    size = 'icon', 
}: Props) => {
   
  const baseStyles = 'rounded-md font-semibold focus:outline-none transition-all duration-200 p-3';
  const variantStyles = {
    primary: `bg-${color}-500 text-white hover:bg-${color}-600 focus:ring-${color}-300 text-black`,
    secondary: `bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-400`,
    ghost: `bg-transparent border-2 border-${color}-500 text-${color}-500 hover:bg-${color}-100 focus:ring-${color}-300`,
  };
  const sizeStyles = {
    icon: 'px-3 py-1 text-sm',
    small: 'px-4 py-2 text-base',
    big: 'px-6 py-3 text-lg',
  };
  const disabledStyles = 'opacity-50 cursor-not-allowed';
  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabled ? disabledStyles : ''}`;
  return (
    <button onClick={onClick} className={buttonClasses} disabled={disabled}>{children}</button>
  )
}

export default Button