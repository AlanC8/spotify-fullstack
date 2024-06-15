"use client"
import axios from "axios";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [likedPlaylists, setLikedPlaylists] = useState([]);

  const getLikedPlaylists = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/fav-playlist",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
          },
        }
      );
      setLikedPlaylists(response.data);
    } catch (error) {
      console.error("Failed to fetch liked playlists:", error);
    }
  };

  useEffect(() => {
    getLikedPlaylists();
  }, []);

  console.log(likedPlaylists);
  

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Liked Playlists</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {likedPlaylists.map((playlist) => (
          <div key={playlist._id} className="bg-white shadow-md rounded-lg p-4">
            <img
              src={playlist.playlistId.coverImage}
              alt={playlist.playlistId.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{playlist.playlistId.name}</h3>
            <p className="text-gray-500 mb-2">{playlist.playlistId.description}</p>
            <p className="text-gray-700">{playlist.playlistId.genre}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
