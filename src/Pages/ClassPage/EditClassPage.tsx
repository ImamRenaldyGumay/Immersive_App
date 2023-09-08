import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Cookies from "js-cookie"
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import Swal from "sweetalert2";
import axios from "axios";

type Props = {};

function EditClassPage({}: Props) {
  const location = useLocation();
  const navigate = useNavigate()
  const token = Cookies.get("token");
  const [name, setName] = useState();
  // const [batch, setBatch] = useState();

  useEffect(() => {
    getDetailClass()
  }, [])

  const handleName = (e: any) => {
    setName(e?.target?.value);
  } 

  // const handleBatch = (e: any) => {
  //   setBatch(e?.target?.value);
  // }

  const getDetailClass = () => {
    axios
      .get(`http://54.252.240.166/classes/${location?.state?.id}`, {
        headers: {
            Authorization: `Bearer ${token}`
         }
      })
      .then((response) => {
        setName(response.data.data.class_name);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const submitClass = () => {
    axios.put(`http://54.252.240.166/classes/${location?.state?.id}`, {
      "class_name": name
    },{
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      console.log(response);
      
      Swal.fire({
        icon: "success",
        title: "Success",
        text: response.data.message,
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/Class")
      });
    }).catch(error => {
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: `Something went wrong : ${error}`,
        confirmButtonText: "OK",
      });
    })
  }
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="flex-grow flex flex-col">
          <Navbar />
          {/* Konten Utama Dashboard */}
          <div className="flex-grow bg-white p-4 m-3 rounded-md">
            <h1 className="text-2xl text-blue-dark font-semibold text-center">
              Edit Class
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
                  value={name}
                  onChange={handleName}
                />
              </div>

              {/* <div>
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
                  onChange={handleBatch}
                />
              </div> */}
            </div>

            <div className="mt-4 text-center">
              <button 
                className="mt-12 px-10 py-2 bg-blue-dark text-white rounded-md shadow-lg text-xl focus:outline-none tracking-wide"
                onClick={submitClass}
              >
                SAVE
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default EditClassPage;
