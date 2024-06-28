import React, { useState } from "react";
import axios from "../../axiosConfig";
import InputField from "components/fields/InputField";
import { FcGoogle } from "react-icons/fc";
import Checkbox from "components/checkbox";
import Footer from "components/footer/FooterAuthDefault";
import authImg from "assets/img/auth/auth.png";
import { Routes, Route, Navigate } from "react-router-dom";
import routes from "routes.js";
import FixedPlugin from "components/fixedPlugin/FixedPlugin";
import { GoogleLogin } from "@react-oauth/google";

export default function Auth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleSignIn = async () => {
    try {
      const response = await axios.post("/login", {
        username,
        password,
      });

      const { access_token } = response.data;
      cacheToken(access_token); // Cache token

      console.log("Login successful", access_token);
    } catch (err) {
      console.error("Login error:", err);
      setError("Failed to sign in. Please check your credentials.");
    }
  };

  const handleGoogleSuccess = async (response) => {
    const { tokenId } = response;
    try {
      const res = await axios.post("/google-login", { tokenId });
      const { access_token } = res.data;
      cacheToken(access_token); // Cache token

      console.log("Google login successful", access_token);
    } catch (err) {
      console.error("Google login error:", err);
      setError("Failed to sign in with Google.");
    }
  };

  const handleGoogleFailure = (response) => {
    console.error("Google login error:", response);
    setError("Failed to sign in with Google.");
  };

  const cacheToken = (token) => {
    if (rememberMe) {
      localStorage.setItem("access_token", token); 
    } else {
      sessionStorage.setItem("access_token", token);
    }
  };

  const clearToken = () => {
    localStorage.removeItem("access_token");
    sessionStorage.removeItem("access_token");
  };

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return <Route path={`/${prop.path}`} element={prop.component} key={key} />;
      } else {
        return null;
      }
    });
  };

  document.documentElement.dir = "vassbot";
  return (
    <div>
      <div className="relative float-right h-full min-h-screen w-full !bg-white dark:!bg-navy-900">
        <FixedPlugin />
        <main className={`mx-auto min-h-screen`}>
          <div className="relative flex">
            <div className="mx-auto flex min-h-full w-full flex-col justify-start pt-12 md:max-w-[75%] lg:h-screen lg:max-w-[1013px] lg:px-8 lg:pt-0 xl:h-[100vh] xl:max-w-[1383px] xl:px-0 xl:pl-[70px]">
              <div className="mb-auto flex flex-col pl-5 pr-5 md:pr-0 md:pl-12 lg:max-w-[48%] lg:pl-0 xl:max-w-full">
                <Routes>
                  {getRoutes(routes)}
                  <Route path="/" element={<Navigate to="/auth/sign-in" replace />} />
                </Routes>
                <div className="flex min-h-screen relative">
                  <div className="top-0 left-0 h-full w-full md:w-1/2 flex justify-center shadow-md xl:rounded-[50px] p-4 lg:max-w-md flex-1 flex-col ml-auto">
                    <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white items-center">
                      Sign In
                    </h4>
                    <p className="mb-9 text-base text-gray-600 dark:text-gray-400">
                      Enter your username and password to sign in!
                    </p>
                    {error && <p className="mb-4 text-red-500">{error}</p>}
                    <GoogleLogin
                      clientId="944359357198-rkng9frt5okr78oobbf6jfefc17cn7sr.apps.googleusercontent.com"
                      onSuccess={handleGoogleSuccess}
                      onFailure={handleGoogleFailure}
                      scope="profile email"
                      render={(renderProps) => (
                        <div
                          onClick={renderProps.onClick}
                          disabled={renderProps.disabled}
                          className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800"
                        >
                          <div className="rounded-full text-xl">
                            <FcGoogle />
                          </div>
                          <h5 className="text-sm font-medium text-navy-700 dark:text-white">
                            Sign In with Google
                          </h5>
                        </div>
                      )}
                    />
                    <div className="mb-6 flex items-center gap-3">
                      <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
                      <p className="text-base text-gray-600 dark:text-white"> or </p>
                      <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
                    </div>
                    <InputField
                      variant="auth"
                      extra="mb-3"
                      label="Email*"
                      placeholder="mail@simmmple.com"
                      id="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
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
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex items-center">
                        <Checkbox
                          checked={rememberMe}
                          onChange={() => setRememberMe(!rememberMe)}
                        />
                        <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
                          Keep me logged In
                        </p>
                      </div>
                      <a
                        className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
                        href=" "
                      >
                        Forgot Password?
                      </a>
                    </div>
                    <button
                      onClick={handleSignIn}
                      className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
                    >
                      Sign In
                    </button>
                    <div className="mt-4">
                      <span className="text-sm font-medium text-navy-700 dark:text-gray-600">
                        Not registered yet?
                      </span>
                      <a
                        href="/auth/register"
                        className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
                      >
                        Create an account
                      </a>
                    </div>
                  </div>
                  <div
                    className="hidden md:flex flex-shrink-0 w-[49vw] 2xl:w-[44vw] bg-cover lg:rounded-bl-[120px] xl:rounded-bl-[200px]"
                    style={{ backgroundImage: `url(${authImg})` }}
                  />
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
