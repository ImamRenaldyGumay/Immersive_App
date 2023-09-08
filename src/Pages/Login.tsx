import Btnlogin from "../Components/Btnlogin";
import Cookies from "js-cookie"
import Inputlogin from "../Components/Inputlogin";
import Potologin from "../assets/13.jpg"
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    const body = {
      email: email,
      password: password,
    };
    axios
      .post("login", body)
      .then((response) => {
        
      
        const token = response?.data?.data?.token;
        const email = response?.data?.data?.email;
        const role = response?.data?.data?.role;

        Swal.fire({
          icon: "success",
          title: "Success",
          text: `Welcome to Dashboard, ${email}`,
          confirmButtonText: "OK",
        }).then((response) => {
          
          if (response.isConfirmed) {
            Cookies.set("token", token);
            Cookies.set("email", email);
            Cookies.set("role", role);
            navigate("/Userlist");
          }
        });
      })
      .catch((error) => {
        console.log(error.response)
        Swal.fire({

          icon: "error",
          title: "Failed",
          text: `Something went wrong : ${error}`,
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <section className="w-screen h-screen bg-white">
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
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
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





















