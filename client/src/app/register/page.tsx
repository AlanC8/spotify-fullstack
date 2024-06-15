"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { AuthService } from "../service/AuthService";

const Register = () => {

    const navigate = useRouter();

  const [register, setRegister] = useState({
    username: "",
    password: "",
    email: "",
  });

  const registerUser = async () => {
    const response = await AuthService.register(
      register.username,
      register.password,
      register.email
    );
    if (response && response.status === 201) {
      const resp = await AuthService.login(
        register.username,
        register.password,
        register.email
      );
      localStorage.setItem("access", resp.data.accessToken);
      navigate.push("/songs");
    }
  };

  console.log(register.username, register.password, register.email);
  

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form
          onClick={(e) => e.preventDefault()}
          className="w-full max-w-md bg-white p-8 shadow-md rounded-md"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">
            Sign up to Open Chat
          </h2>
          <label htmlFor="username" className="block text-lg mb-2">
            Username
          </label>
          <input
            type="text"
            minLength={6}
            value={register.username}
            onChange={(e) =>
              setRegister({ ...register, username: e.target.value })
            }
            name="username"
            id="username"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
          />
          <label htmlFor="email" className="block text-lg mb-2">
            Password
          </label>
          <input
            type="password"
            value={register.password}
            onChange={(e) =>
              setRegister({ ...register, password: e.target.value })
            }
            minLength={6}
            name="password"
            id="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
          />
          <label htmlFor="email" className="block text-lg mb-2">
            Email
          </label>
          <input
            type="text"
            minLength={6}
            value={register.email}
            onChange={(e) =>
              setRegister({ ...register, email: e.target.value })
            }
            name="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
          />
          <button
            onClick={registerUser}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Sign in
          </button>
          <p className="text-center mt-4 font-sm">
            <Link href="/">Есть уже аккаунт? Пройди авторизацию</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
