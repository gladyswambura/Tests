

// import Footer from 'components/footer/FooterAuthDefault';
// import authImg from 'assets/img/auth/auth.png';
// import { Link, Routes, Route, Navigate } from 'react-router-dom';
// import routes from 'routes.js';
// import FixedPlugin from 'components/fixedPlugin/FixedPlugin';

// import React, { useState } from "react";
// import axios from "../../axiosConfig";
// import InputField from "components/fields/InputField";
// import { FcGoogle } from "react-icons/fc";
// import Checkbox from "components/checkbox";

// export default function Auth() {
//   const [username, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [rememberMe, setName] = useState(false);
//   const [error, setError] = useState("");

//   const getRoutes = (routes) => {
//     return routes.map((prop, key) => {
//       if (prop.layout === '/auth') {
//         return (
//           <Route path={`/${prop.path}`} element={prop.component} key={key} />
//         );
//       } else {
//         return null;
//       }
//     });
//   };

//   const handleRegister = async () => {
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

//   document.documentElement.dir = 'vassbot'; 
//   return (
//     <div>
//       <div className="relative float-right h-full min-h-screen w-full !bg-white dark:!bg-navy-900">
//         <FixedPlugin />
//         <main className={`mx-auto min-h-screen`}>
//           <div className="relative flex">
//             <div className="mx-auto flex min-h-full w-full flex-col justify-start pt-12 md:max-w-[75%] lg:h-screen lg:max-w-[1013px] lg:px-8 lg:pt-0 xl:h-[100vh] xl:max-w-[1383px] xl:px-0 xl:pl-[70px]">
//               <div className="mb-auto flex flex-col pl-5 pr-5 md:pr-0 md:pl-12 lg:max-w-[48%] lg:pl-0 xl:max-w-full">
//                 {/* <Link to="/admin" className="mt-0 w-max lg:pt-10">
//                   <div className="mx-auto flex h-fit w-fit items-center hover:cursor-pointer">
//                     <svg
//                       width="8"
//                       height="12"
//                       viewBox="0 0 8 12"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M6.70994 2.11997L2.82994 5.99997L6.70994 9.87997C7.09994 10.27 7.09994 10.9 6.70994 11.29C6.31994 11.68 5.68994 11.68 5.29994 11.29L0.709941 6.69997C0.319941 6.30997 0.319941 5.67997 0.709941 5.28997L5.29994 0.699971C5.68994 0.309971 6.31994 0.309971 6.70994 0.699971C7.08994 1.08997 7.09994 1.72997 6.70994 2.11997V2.11997Z"
//                         fill="#A3AED0"
//                       />
//                     </svg>
//                     <p className="ml-3 text-sm text-gray-600">
//                       Back to Dashboard
//                     </p>
//                   </div>
//                 </Link> */}
//                 <Routes>
//                   {getRoutes(routes)}
//                   <Route
//                     path="/"
//                     element={<Navigate to="/auth/sign-in" replace />}
//                   />
//                 </Routes>
//                 {/* Main Div */}
//                 <div className="flex min-h-screen relative">
//                   {/* {Register section} */}
//                   <div className="flex h-screen w-full items-center justify-center px-4">
//                     <div className="w-full max-w-lg flex-col items-center p-8 bg-white rounded-lg shadow-lg">
//                       <h4 className="mb-4 text-4xl font-bold text-navy-700 dark:text-white text-center">
//                         Sign Up
//                       </h4>
//                       <p className="mb-8 text-center text-base text-gray-600">
//                         Enter your details to create your account!
//                       </p>
//                       <form onSubmit={handleRegister} className="w-full">
//                         <InputField
//                           variant="auth"
//                           extra="mb-3"
//                           label="Name*"
//                           placeholder="John Smith"
//                           id="name"
//                           type="text"
//                           value={name}
//                           onChange={(e) => setName(e.target.value)}
//                         />
//                         <InputField
//                           variant="auth"
//                           extra="mb-3"
//                           label="Email*"
//                           placeholder="mail@simmmple.com"
//                           id="email"
//                           type="email"
//                           value={email}
//                           onChange={(e) => setEmail(e.target.value)}
//                         />
//                         <InputField
//                           variant="auth"
//                           extra="mb-3"
//                           label="Password*"
//                           placeholder="Min. 8 characters"
//                           id="password"
//                           type="password"
//                           value={password}
//                           onChange={(e) => setPassword(e.target.value)}
//                         />
//                         <InputField
//                           variant="auth"
//                           extra="mb-3"
//                           label="Confirm Your Password*"
//                           placeholder="Min. 8 characters"
//                           id="confirm-password"
//                           type="password"
//                           value={confirmPassword}
//                           onChange={(e) => setConfirmPassword(e.target.value)}
//                         />
//                         <InputField
//                           variant="auth"
//                           extra="mb-3"
//                           label="Select Your Timezone*"
//                           placeholder={timezone}
//                           id="timezone"
//                           type="text"
//                           value={timezone}
//                           onChange={(e) => setTimezone(e.target.value)}
//                         />
//                         <InputField
//                           variant="auth"
//                           extra="mb-3"
//                           label="Bot Badge ID"
//                           placeholder="Eg. S7262-27363-w62221-1"
//                           id="bot-badge-id"
//                           type="text"
//                           value={botBadgeId}
//                           onChange={(e) => setBotBadgeId(e.target.value)}
//                         />
//                         <button
//                           type="submit"
//                           className="linear mt-2 w-full rounded-xl bg-brand-500 py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
//                         >
//                           Sign Up
//                         </button>
//                       </form>
//                       <div className="mt-4 text-center">
//                         <span className="text-sm font-medium text-navy-700 dark:text-gray-600">
//                           Already have an account?
//                         </span>
//                         <Link
//                           to="/auth/signin"
//                           className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
//                         >
//                           Log in.
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                   {/* auth image */}
//                   <div className="hidden md:flex flex-shrink-0 w-[49vw] 2xl:w-[44vw] bg-cover  lg:rounded-bl-[120px] xl:rounded-bl-[200px]" style={{ backgroundImage: `url(${authImg})` }} />
//                 </div>
//               </div>
//               <Footer />
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }
