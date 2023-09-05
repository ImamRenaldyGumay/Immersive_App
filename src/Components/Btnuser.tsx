import React from "react";
import { useNavigate } from "react-router-dom";

interface BtnuserProps {
  id?: string; // Sekarang prop 'id' menjadi opsional
  label?: string;
}

const Btnuser: React.FC<BtnuserProps> = ({ id, label }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigasi ke halaman "Adduser" saat tombol ditekan
    navigate("/adduser");
  };

  return (
    <button
      id={id}
      onClick={handleClick}
      className="p-2 bg-blue-950 hover:bg-blue-900 hover:border-none focus:outline-none rounded-md text-white font-semibold"
    >
      {label}
    </button>
  );
};

export default Btnuser;
