import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import { useNavigate, Navigate } from 'react-router';

interface UserData {
  ID: number;
  full_name: string;
  email: string; 
  team: string; 
  role: string | undefined; 
  status: string;
}

interface UserProps {
  role: string | undefined;
}

const User: React.FC<UserProps> = ({ role }) => {
  const navigate = useNavigate()
  const token = Cookies.get('token');
  const [users, setUsers] = useState<UserData[]>([]);

  const getUsers = () => {
    if (token === undefined) {
      navigate('/Login');
  } else {
    axios
      .get('users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        setUsers(response?.data?.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
}
    

  const deleteUsers = (ID: number) => {
    axios
      .delete(`users/${ID}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);

        Swal.fire({
          icon: "success",
          title: "Success",
          text: response.data.message,
          confirmButtonText: "OK",
        }).then(() => {
          getUsers();
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: `Something went wrong: ${error}`,
          confirmButtonText: "OK",
        });
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="max-w-full p-4 bg-white border border-gray-200 m-4 rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border">
              No
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border">
              FullName
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border">
              Email
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border">
              Team
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border">
              Role
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border">
              Status
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border">
              Action
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((user, index) => (
            <tr key={user.ID}>
              <td className="px-6 py-4 whitespace-no-wrap border">{index + 1}</td>
              <td className="px-6 py-4 whitespace-no-wrap border">{user.FullName}</td>
              <td className="px-6 py-4 whitespace-no-wrap border">{user.Email}</td>
              <td className="px-6 py-4 whitespace-no-wrap border">{user.TeamId}</td>
              <td className="px-6 py-4 whitespace-no-wrap border">{user.Role}</td>
              <td className="px-6 py-4 whitespace-no-wrap border">{user.Status}</td>
              <td className="px-6 py-4 whitespace-no-wrap border">
                {role && role.toLowerCase() === 'super admin' && (
                  <button className="flex items-center" onClick={() => console.log("Edit clicked")}>
                    <FontAwesomeIcon icon={faEdit} size="lg" />
                  </button>
                )}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border">
                {role && role.toLowerCase() === 'super admin' && (
                  <button className="flex items-center" 
                  onClick={() => deleteUsers(user?.ID)}>
                    <FontAwesomeIcon icon={faTrash} size="lg" />
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
