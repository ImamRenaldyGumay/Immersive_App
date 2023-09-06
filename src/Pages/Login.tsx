import { useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import Cookies from "js-cookie"
import axios from "axios";

import Inputlogin from "../Components/Inputlogin";
import Btnlogin from "../Components/Btnlogin";
import Potologin from "../assets/13.jpg"


const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    const body = {
      username: "mor_2314",
      password: "83r5^_",
    };
    axios
      .post("auth/login", body)
      .then((response) => {
        const token = response?.data?.token;
        Swal.fire({
          icon: "success",
          title: "Success",
          text: `Welcome to Satset, ${username}`,
          confirmButtonText: "OK",
        }).then((response) => {
          if (response.isConfirmed) {
            Cookies.set("token", token);
            Cookies.set("username", username);
            navigate("/product");
          }
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
    <section className="w-screen h-screen">
      <div className="grid grid-cols-2">
      <div className="w-full h-screen flex justify-center items-center">
          <img src={Potologin} width={400} height={400} />
        </div>
        < div className="w-full h-screen flex flex-col text-#29568A justify-center items-center">
          <Inputlogin
            id="username"
            name="username"
            label="Username"
            type="username"
            value={username}
            onChange={(e: any) => setUsername(e.target.value)}
          />
          <Inputlogin
            id="password"
            name="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
          />
          <div className="w-60 my-5">
            <Btnlogin id="login" label="Login" onClick={() => handleLogin()} />
          </div>
        </div>
        </div>
    </section>
  );
};

export default Login;





















