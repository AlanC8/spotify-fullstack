"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CreatePage = () => {
  const [playlist, setPlaylist] = useState({
    name: "",
    description: "",
  });

  const router = useRouter();

  const createPlaylist = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/playlists",
        {
          name: playlist.name,
          description: playlist.description,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
          },
        }
      );
      console.log(response.data);
      router.push(`/playlist/${response.data._id}`);
    } catch (error) {
      console.error("Error creating playlist:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Создать плейлист</h1>
        <div className="space-y-4">
          <input
            type="text"
            value={playlist.name}
            onChange={(e) => setPlaylist({ ...playlist, name: e.target.value })}
            placeholder="Название плейлиста"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            value={playlist.description}
            onChange={(e) =>
              setPlaylist({ ...playlist, description: e.target.value })
            }
            placeholder="Описание плейлиста"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <button
          onClick={createPlaylist}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Создать плейлист
        </button>
      </div>
    </div>
  );
};

export default CreatePage;
