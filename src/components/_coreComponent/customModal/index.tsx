import React from "react";
import {IoCloseSharp} from "react-icons/io5"
interface CustomModalProps {
  isModalOpen: boolean;
  onClose: () => void;
  className?: string;
  children?: React.ReactNode;
}

export const CustomModal: React.FC<CustomModalProps> = ({
  isModalOpen,
  onClose,
  children,
  className,
}) => {
  if (!isModalOpen) {
    return null;
  }

  return (
    <div className={`fixed inset-0 z-10 overflow-y-auto  ${className}`}>
        <div
          className={` overflow-hidden sm:my-8  `}
        >
          {children}
        </div>
        <button
          onClick={onClose}
          className="absolute text-black top-10 right-16"
        >
         <span className="flex items-center px-2 py-0.5 font-bold text-gray-500 bg-gray-300 rounded-full font-raleway">ESC<IoCloseSharp className="w-6 text-black h-7"/></span>
        </button>
    </div>
  );
};
