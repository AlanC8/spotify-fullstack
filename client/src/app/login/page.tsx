"use client";

import { useRouter } from "next/navigation";
import { use, useState } from "react";
import Link from "next/link";
import { AuthService } from "../service/AuthService";

const Login = () => {
  const navigate = useRouter();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const response = await AuthService.login(userName, password, email);
    if (response && response.status === 200) {
      localStorage.setItem("access", response.data.accessToken);
      navigate.push("/songs");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onClick={(e) => e.preventDefault()}
        className="w-full max-w-md bg-white p-8 shadow-md rounded-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Sign in to Open Chat
        </h2>
        <label htmlFor="username" className="block text-lg mb-2">
          Username
        </label>
        <input
          type="text"
          minLength={6}
          name="username"
          id="username"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="email" className="block text-lg mb-2">
          Password
        </label>
        <input
          type="password"
          minLength={6}
          name="password"
          id="password"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="email" className="block text-lg mb-2">
          Email
        </label>
        <input
          type="text"
          minLength={6}
          name="email"
          id="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Sign in
        </button>
        <p className="text-center mt-4 font-sm">
          <Link href="/register">Нет аккаунта? Пройди регистрацию</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
