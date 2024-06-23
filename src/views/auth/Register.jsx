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
