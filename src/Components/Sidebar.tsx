import React from "react";

function Sidebar() {
   return (
      <aside className="bg-white text-black w-64 min-h-screen">
         <div className="p-4">
            {/* Brand Logo */}
            <div>
               <h2 className="text-2xl font-semibold mb-4">Menu</h2>
               <hr className="mb-3" />
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
