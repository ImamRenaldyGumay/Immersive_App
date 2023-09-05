import React from "react";

function Sidebar() {
   return (
      <aside className="bg-white text-black w-52 min-h-screen">
         <div className="p-4">
            {/* Brand Logo */}
            <div className="flex justify-center mb-3 border-b-2 border-gray-500">
               <img className="mb-3" src="src/assets/logo-ALTA.png" alt="" />
               {/* <h1 className="text-xl font-semibold mb-4">Menu</h1> */}
            </div>

            <ul className="space-y-2">
               <li><a href="#" className="block">Halaman 1</a></li>
               <li><a href="#" className="block">Halaman 2</a></li>
               <li><a href="#" className="block">Halaman 3</a></li>
            </ul>
         </div>
      </aside>
   );
}

export default Sidebar;
