import React, { FC } from "react";

interface BtnloginProps {
  id: string;
  label?: string;
  onClick?: React.MouseEventHandler;
}

const Btnlogin: FC<BtnloginProps> = ({ id, label, onClick }) => {
  return (
    <button
      id={id}
      onClick={onClick}
      className="w-full h-12 bg-blue-950 hover:bg-blue-900 hover:border-none focus:outline-none rounded-md text-white font-semibold"
    >
      {label}
    </button>
  );
};

export default Btnlogin;