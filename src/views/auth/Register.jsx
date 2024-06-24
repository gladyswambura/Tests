import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from 'components/fields/InputField';
import axiosInstance from 'axiosConfig';
import { Link } from 'react-router-dom';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [timezone, setTimezone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);
  const [botBadgeId, setBotBadgeId] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const response = await axiosInstance.post('/register', {
        name,
        email,
        password,
        timezone,
        botBadgeId,
      });
      const { access_token } = response.data;
      localStorage.setItem('access_token', access_token);
      alert('Registration successful');
      navigate('/dashboard'); // Navigate to the dashboard
    } catch (error) {
      console.error('Error registering:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <div className="w-full max-w-lg flex-col items-center p-8 bg-white rounded-lg shadow-lg">
        <h4 className="mb-4 text-4xl font-bold text-navy-700 dark:text-white text-center">
          Sign Up
        </h4>
        <p className="mb-8 text-center text-base text-gray-600">
          Enter your details to create your account!
        </p>
        <form onSubmit={handleRegister} className="w-full">
          <InputField
            variant="auth"
            extra="mb-3"
            label="Name*"
            placeholder="John Smith"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputField
            variant="auth"
            extra="mb-3"
            label="Email*"
            placeholder="mail@simmmple.com"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            variant="auth"
            extra="mb-3"
            label="Password*"
            placeholder="Min. 8 characters"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputField
            variant="auth"
            extra="mb-3"
            label="Confirm Your Password*"
            placeholder="Min. 8 characters"
            id="confirm-password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <InputField
            variant="auth"
            extra="mb-3"
            label="Select Your Timezone*"
            placeholder={timezone}
            id="timezone"
            type="text"
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
          />
          <InputField
            variant="auth"
            extra="mb-3"
            label="Bot Badge ID"
            placeholder="Eg. S7262-27363-w62221-1"
            id="bot-badge-id"
            type="text"
            value={botBadgeId}
            onChange={(e) => setBotBadgeId(e.target.value)}
          />
          <button
            type="submit"
            className="linear mt-2 w-full rounded-xl bg-brand-500 py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-sm font-medium text-navy-700 dark:text-gray-600">
            Already have an account?
          </span>
          <Link
            to="/auth/signin"
            className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
          >
            Log in.
          </Link>
        </div>
      </div>
    </div>
  );
}



// import React, { useState } from "react";
// import axios from "../../axiosConfig";
// import InputField from "components/fields/InputField";
// import { FcGoogle } from "react-icons/fc";
// import Checkbox from "components/checkbox";
// import authImg from "../../assets/img/auth/auth.png";

// export default function SignIn() {
//   const [username, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [rememberMe, setRememberMe] = useState(false);
//   const [error, setError] = useState("");

//   const handleSignIn = async () => {
//     try {
//       const response = await axios.post("/login", {
//         username,
//         password,
//       });

//       const { access_token } = response.data;

//       if (rememberMe) {
//         localStorage.setItem("access_token", access_token);
//       } else {
//         sessionStorage.setItem("access_token", access_token);
//       }
//       console.log("Login successful", access_token);
//     } catch (err) {
//       console.error("Login error:", err);
//       setError("Failed to sign in. Please check your credentials.");
//     }
//   };

//   return (
//     <div className="max-w-screen flex h-screen items-center justify-center lg:justify-between px-4">
//       {/* Sign in section */}
//       <div className="w-full max-w-md flex-1 flex-col items-center rounded-lg bg-white p-6 shadow-md">
//         <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
//           Sign In
//         </h4>
//         <p className="mb-9 text-base text-gray-600 dark:text-gray-400">
//           Enter your username and password to sign in!
//         </p>
//         {error && <p className="mb-4 text-red-500">{error}</p>}
//         <div className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800">
//           <div className="rounded-full text-xl">
//             <FcGoogle />
//           </div>
//           <h5 className="text-sm font-medium text-navy-700 dark:text-white">
//             Sign In with Google
//           </h5>
//         </div>
//         <div className="mb-6 flex items-center gap-3">
//           <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
//           <p className="text-base text-gray-600 dark:text-white"> or </p>
//           <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
//         </div>
//         {/* Email */}
//         <InputField
//           variant="auth"
//           extra="mb-3"
//           label="Email*"
//           placeholder="mail@simmmple.com"
//           id="username"
//           type="text"
//           value={username}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         {/* Password */}
//         <InputField
//           variant="auth"
//           extra="mb-3"
//           label="Password*"
//           placeholder="Min. 8 characters"
//           id="password"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         {/* Checkbox */}
//         <div className="mb-4 flex items-center justify-between">
//           <div className="flex items-center">
//             <Checkbox
//               checked={rememberMe}
//               onChange={() => setRememberMe(!rememberMe)}
//             />
//             <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
//               Keep me logged In
//             </p>
//           </div>
//           <a
//             className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
//             href=" "
//           >
//             Forgot Password?
//           </a>
//         </div>
//         <button
//           onClick={handleSignIn}
//           className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
//         >
//           Sign In
//         </button>
//         <div className="mt-4">
//           <span className="text-sm font-medium text-navy-700 dark:text-gray-600">
//             Not registered yet?
//           </span>
//           <a
//             href="/auth/register"
//             className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
//           >
//             Create an account
//           </a>
//         </div>
//       </div>

//       <div className="hidden lg:block">
//         <img src={authImg} alt="Sign In" />
//       </div>
//     </div>
//   );
// }
