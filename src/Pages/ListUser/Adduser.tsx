import React, { useState } from "react";

import Cookies from "js-cookie";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Adduser = () => {
  const navigate = useNavigate();
  const token = Cookies.get("token");
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [team, setTeam] = useState();
  const [role, setRole] = useState();
  const [status, setStatus] = useState();

  const handleName = (e: any) => {
    setName(e?.target?.value);
  };

  const handleEmail = (e: any) => {
    setEmail(e?.target?.value);
  };

  const handlePassword = (e: any) => {
    setPassword(e?.target?.value);
  };

  const handleTeam = (e: any) => {
    setTeam(e?.target?.value);
  };

  const handleRole = (e: any) => {
    setRole(e?.target?.value);
  };

  const handleStatus = (e: any) => {
    setStatus(e?.target?.value);
  };

  const submitUser = () => {
    axios
      .post(
        "http://54.252.240.166/users",
        {
            "full_name": name,
            "email": email,
            "password": password,
            "role": role,
            "team_id": Number(team)
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);

        Swal.fire({
          icon: "success",
          title: "Success",
          text: response.data.message,
          confirmButtonText: "OK",
        }).then(() => {
          navigate("/userlist");
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: `Something went wrong : ${error}`,
          confirmButtonText: "OK",
        });
      });
  };
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="flex-grow">
          <Navbar />
          <div className="content-header flex justify-between m-4">
            <h1 className="text-3xl font-bold leading-none tracking-tight">
              Dashboard
            </h1>
          </div>
          <div className="max-w-full p-4 bg-white border border-gray-200 m-4 rounded-lg shadow">
            <h1 className="text-blue-dark text-center text-2xl">NEW USER</h1>

            <div className="mb-4">
              <label
                htmlFor="fullname"
                className="block text-gray-700 font-semibold"
              >
                Fullname
              </label>
              <input
                type="text"
                id="fullname"
                placeholder="Enter your fullname"
                className="w-full border border-gray-300 p-2 rounded-md"
                onChange={handleName}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 p-2 rounded-md"
                onChange={handleEmail}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 p-2 rounded-md"
                onChange={handlePassword}
              />
            </div>

            <div className="mb-4 flex flex-row items-center justify-center">
              <div className="mr-4">
                <label
                  htmlFor="team"
                  className="block text-gray-700 font-semibold"
                >
                  Team
                </label>
                <select
                  id="team"
                  className="border border-gray-300 p-2 rounded-md"
                  onChange={handleTeam}
                >
                  <option value="">Select Team</option>
                  <option value={1}>Team 1</option>
                  <option value={2}>Team 2</option>
                </select>
              </div>

              <div className="mr-4">
                <label
                  htmlFor="role"
                  className="block text-gray-700 font-semibold"
                >
                  Role
                </label>
                <select
                  id="role"
                  className="border border-gray-300 p-2 rounded-md"
                  onChange={handleRole}
                >
                  <option value="">Select Role</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="status"
                  className="block text-gray-700 font-semibold"
                >
                  Status
                </label>
                <select
                  id="status"
                  className="border border-gray-300 p-2 rounded-md"
                >
                  <option value="">Select Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">No-Active</option>
                </select>
              </div>
            </div>
            <div className="mt-4 text-center">
              <button 
                className="mt-12 px-10 py-2 bg-blue-dark text-white rounded-md shadow-lg text-xl focus:outline-none tracking-wide"
                onClick={submitUser}
              >
                SAVE
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Adduser;
