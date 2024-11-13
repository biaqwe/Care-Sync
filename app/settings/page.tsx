"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaHistory, FaCalendarAlt, FaUserMd, FaNotesMedical, FaUserAlt, FaCog, FaSignOutAlt, FaEnvelope, FaLock, FaTrash } from 'react-icons/fa';
import '../globals.css';

export default function Settings() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isEmailChanged, setIsEmailChanged] = useState(false);
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);

  useEffect(() => {
    const userLoggedIn = true;
    setIsAuthenticated(userLoggedIn);
  }, []);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value);

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsEmailChanged(true);
  };

  const handlePasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setIsPasswordChanged(true);
    } else {
      alert("Passwords do not match!");
    }
  };

  const handleAccountDeletion = () => {
    alert("Your account has been deleted.");
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-backgr bg-opacity-20">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold text-gray-700">You need to log in first</h2>
          <Link href="/login" className="mt-4 px-6 py-2 text-white bg-one rounded-lg hover:bg-two focus:outline-none transition-colors duration-200">
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-backgr bg-opacity-20">
      <div className="w-64 bg-white shadow-lg p-6 flex flex-col items-center">
        <Link href="/dashboard">
          <div className="flex justify-center mb-8">
            <Image
              src="/images/CareSync.png"
              alt="Logo"
              width={200}
              height={200}
              className="rounded-full cursor-pointer"
            />
          </div>
        </Link>

        <div className="space-y-6 flex flex-col items-center w-full">
          <Link href="/medical-history" className="flex items-center justify-center w-full px-4 py-3 text-white bg-one rounded-full hover:bg-two focus:outline-none transition-colors duration-200">
            <FaHistory className="w-5 h-5 mr-2" />
            Medical History
          </Link>
          <Link href="/appointments" className="flex items-center justify-center w-full px-4 py-3 text-white bg-one rounded-full hover:bg-two focus:outline-none transition-colors duration-200">
            <FaCalendarAlt className="w-5 h-5 mr-2" />
            Appointments
          </Link>
          <Link href="/doctor-list" className="flex items-center justify-center w-full px-4 py-3 text-white bg-one rounded-full hover:bg-two focus:outline-none transition-colors duration-200">
            <FaUserMd className="w-5 h-5 mr-2" />
            Doctor List
          </Link>
          <Link href="/log-symptoms" className="flex items-center justify-center w-full px-4 py-3 text-white bg-[#D32F6D] rounded-full hover:bg-[#A12A58] focus:outline-none transition-colors duration-200">
            <FaNotesMedical className="w-5 h-5 mr-2" />
            Log Symptoms
          </Link>
          <Link href="/profile" className="flex items-center justify-center w-full px-4 py-3 text-white bg-one rounded-full hover:bg-two focus:outline-none transition-colors duration-200">
            <FaUserAlt className="w-5 h-5 mr-2" />
            Profile
          </Link>
          <Link href="/settings" className="flex items-center justify-center w-full px-4 py-3 text-white bg-one rounded-full hover:bg-two focus:outline-none transition-colors duration-200">
            <FaCog className="w-5 h-5 mr-2" />
            Settings
          </Link>
          <Link href="/login" className="flex items-center justify-center w-full px-4 py-3 text-white bg-one rounded-full hover:bg-two focus:outline-none transition-colors duration-200">
            <FaSignOutAlt className="w-5 h-5 mr-2" />
            Log Out
          </Link>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Settings</h2>

          <div className="space-y-6">
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="w-5 h-5 text-gray-600" />
                <label htmlFor="email" className="block text-lg font-medium text-gray-600">Change Email</label>
              </div>
              <div className="flex justify-center">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="custom-input"
                  placeholder="Enter new email"
                  required
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-[380px] px-12 py-3 text-white bg-one rounded-[30px] text-center hover:bg-two focus:outline-none focus:ring-2 focus:ring-one transition-all duration-300"
                >
                  {isEmailChanged ? "Email Updated" : "Change Email"}
                </button>
              </div>
            </form>

            <form onSubmit={handlePasswordSubmit} className="space-y-4 mt-8">
              <div className="flex items-center space-x-3">
                <FaLock className="w-5 h-5 text-gray-600" />
                <label htmlFor="password" className="block text-lg font-medium text-gray-600">Change Password</label>
              </div>
              <div className="flex justify-center">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="custom-input"
                  placeholder="Enter new password"
                  required
                />
              </div>

              <div className="flex items-center space-x-3 mt-4">
                <FaLock className="w-5 h-5 text-gray-600" />
                <label htmlFor="confirmPassword" className="block text-lg font-medium text-gray-600">Confirm Password</label>
              </div>
              <div className="flex justify-center">
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  className="custom-input"
                  placeholder="Confirm new password"
                  required
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-[380px] px-12 py-3 text-white bg-one rounded-[30px] text-center hover:bg-two focus:outline-none focus:ring-2 focus:ring-one transition-all duration-300"
                >
                  {isPasswordChanged ? "Password Updated" : "Change Password"}
                </button>
              </div>
            </form>

            <div className="mt-8">
              <div className="flex items-center space-x-3 mb-4">
                <FaTrash className="w-5 h-5 text-gray-600" />
                <label htmlFor="deleteAccount" className="block text-lg font-medium text-gray-600">Delete Account</label>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={handleAccountDeletion}
                  id="deleteAccount"
                  className="w-[380px] px-12 py-3 text-white bg-[#D32F6D] rounded-[30px] text-center hover:bg-[#A12A58] focus:outline-none focus:ring-2 focus:ring-[#D32F6D] transition-all duration-300"
                >
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}