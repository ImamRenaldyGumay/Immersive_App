import Navbar from "../../Components/Navbar";
import React from "react";
import Sidebar from "../../Components/Sidebar";

type Props = {};

function NewClassPage({}: Props) {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="flex-grow flex flex-col">
          <Navbar />
          {/* Konten Utama Dashboard */}
          <div className="flex-grow bg-white p-4 m-3 rounded-md">
            <h1 className="text-2xl text-blue-dark font-semibold text-center">
              New Class
            </h1>

            <div className="flex justify-center md:flex-row md:space-x-4 mt-12">
              <div className="md:w-1/2">
                <label
                  htmlFor="className"
                  className="text-lg text-blue-dark font-semibold"
                >
                  Class Name
                </label>
                <input
                  type="text"
                  id="className"
                  className="w-full p-2 border rounded-md shadow-lg"
                  placeholder="Enter class name"
                />
              </div>

              <div>
                <label
                  htmlFor="batch"
                  className="text-lg text-blue-dark font-semibold"
                >
                  Batch
                </label>
                <input
                  type="number"
                  id="batch"
                  className="w-full p-2 border rounded-md shadow-lg"
                  placeholder="Enter batch"
                  min="0"
                />
              </div>
            </div>

            <div className="mt-4 text-center">
              <button className="mt-12 px-10 py-2 bg-blue-dark text-white rounded-md shadow-lg text-xl focus:outline-none tracking-wide">
                SAVE
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default NewClassPage;
