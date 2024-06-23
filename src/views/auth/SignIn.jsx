import React, { useState } from 'react';
import axios from '../../axiosConfig'; 
import InputField from 'components/fields/InputField';
import { FcGoogle } from 'react-icons/fc';
import Checkbox from 'components/checkbox';

export default function SignIn() {
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleSignIn = async () => {
    try {
      const response = await axios.post('/login', {
        username,
        password,
      });

      const { access_token } = response.data;

      if (rememberMe) {
        localStorage.setItem('access_token', access_token);
      } else {
        sessionStorage.setItem('access_token', access_token);
      }
      console.log('Login successful', access_token);
    } catch (err) {
      console.error('Login error:', err);
      setError('Failed to sign in. Please check your credentials.');
    }
  };

  return (
    <div className="flex h-screen items-center justify-center px-4">
      {/* Sign in section */}
      <div className="w-full max-w-md flex-col items-center p-6 bg-white shadow-md rounded-lg">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Sign In
        </h4>
        <p className="mb-9 text-base text-gray-600 dark:text-gray-400">
          Enter your username and password to sign in!
        </p>
        {error && (
          <p className="mb-4 text-red-500">
            {error}
          </p>
        )}
        <div className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800">
          <div className="rounded-full text-xl">
            <FcGoogle />
          </div>
          <h5 className="text-sm font-medium text-navy-700 dark:text-white">
            Sign In with Google
          </h5>
        </div>
        <div className="mb-6 flex items-center gap-3">
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
          <p className="text-base text-gray-600 dark:text-white"> or </p>
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
        </div>
        {/* Email */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Email*"
          placeholder="mail@simmmple.com"
          id="username"
          type="text"
          value={username}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
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
        {/* Checkbox */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center">
            <Checkbox checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
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
    </div>
  );
}
