import React from "react";
import { useNavigate } from "react-router-dom";

interface BtnuserProps {
  id?: string;
  label?: string;
  role?: string;
}

const Btnuser: React.FC<BtnuserProps> = ({ id, label, role }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/adduser");
  };

  return (
    <>
      {role && role.toLowerCase() !== 'user' && (
        <button
          id={id}
          onClick={handleClick}
          className="p-2 bg-blue-950 hover:bg-blue-900 hover:border-none focus:outline-none rounded-md text-white font-semibold"
        >
          {label}
        </button>
      )}
    </>
  );
};

export default Btnuser;
