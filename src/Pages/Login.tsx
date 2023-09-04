// import React, { useState } from 'react'
// import { redirect } from 'react-router-dom';


// const Login: React.FC = () => {
//   const [username, setUsername] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [login, setLogin] = useState<boolean>(false);

//   const handleLogin = () => {
//     // Validasi login di sini (misalnya: username === 'admin' && password === 'password')
//     if (username === 'admin' && password === 'password') {
//       localStorage.setItem('loggedIn', 'true');
//       setLogin(true);
//     } else {
//       alert('Login gagal. Coba lagi.');
//     }
//   };

//   if (login) {
//     return <redirect to="/dashboard" />
//   }

//   const handleLogout = () =>{
//     localStorage.removeItem('Login')
//     setLogin(false);
//   }

//   return (
//     <div>
//       {login ? (
//         <div>
//           <p>Selamat datang, {username}!</p>
//           <button onClick={handleLogout}>Logout</button>
//         </div>
//       ) : (
//         <div>
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button onClick={handleLogin}>Login</button>
//         </div>
        
//       )}
//     </div>
//   )
// }

// export default Login

import React from 'react'

const Login = () => {
  return (
    <div>Login</div>
  )
}

export default Login