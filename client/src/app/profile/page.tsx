"use client";
import React, { useEffect, useState } from "react";
import { AuthService } from "../service/AuthService";
import Link from "next/link";
import PlaylistComponent from "../components/PlayList";

const ProfilePage = () => {
  const [user, setUser] = useState({} as any);

  const getUser = async () => {
    const response = await AuthService.getUser();
    setUser(response.data);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <div className="px-40 py-10 flex justify-between">
        <Link href={"/songs"}>
          <h1 className="">← Обратно к песням</h1>
        </Link>
        <Link href={`/profile/${user._id}`}>
          <h1>Изменить данные</h1>
        </Link>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center flex-col mb-8">
          <img
            src={user.userImage}
            alt={user.username}
            className="w-32 h-32 rounded-full object-cover shadow-lg"
          />
          <h1 className="text-3xl font-bold mt-4">{user.username}</h1>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>
      <PlaylistComponent/>
    </div>
  );
};

export default ProfilePage;
