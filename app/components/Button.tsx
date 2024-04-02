"use client";

import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({ icon: Icon, ...args }) => {
  return (
    <button
      onClick={args.onClick}
      disabled={args.disabled}
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full ${
        args.outline ? "bg-white" : "bg-rose-500"
      } ${args.outline ? "border-black" : "border-rose-500"} ${
        args.outline ? "text-black" : "text-white"
      } ${args.small ? "py-1" : "py-3"} ${args.small ? "text-sm" : "text-md"} ${
        args.small ? "font-light" : "font-semibold"
      } ${args.small ? "border-[1px]" : "border-[2px]"}`}
    >
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}
      {args.label}
    </button>
  );
};

export default Button;
