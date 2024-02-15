import React from "react";
import { useNavigate } from "react-router";

const NavButton = ({ buttonName, FaIons, page, clickHandler }) => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="flex items-center bg-transparent text-[#96002e] w-fit rounded-full p-2 w-fit m-1 pl-6 pr-6 hover:underline underline-offset-2  "
      onClick={() => (page ? navigate(`${page}`) : clickHandler())}
    >
      {FaIons}
      {buttonName}
    </button>
  );
};

export { NavButton };
