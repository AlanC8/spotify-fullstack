"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const LikedPage = () => {
  const [likes, setLikes] = useState([]);

  const getLikes = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/favmuz", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      });
      setLikes(response.data);
    } catch (error) {
      console.error("Failed to fetch liked songs:", error);
    }
  };

  useEffect(() => {
    getLikes();
  }, []);

  const deleteFromLikes = async (musicId) => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/favmuz/${musicId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      });
      getLikes();
    } catch (error) {
      console.error("Failed to delete liked song:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Liked Songs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {likes.map((like) => (
          <div key={like._id} className="bg-white shadow-md rounded-lg p-4">
            <div onClick={() => deleteFromLikes(like._id)} className="text-right cursor-pointer">
              x
            </div>
            <img
              src={like.musicId.coverImage}
              alt={like.musicId.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{like.musicId.title}</h3>
            <p className="text-gray-500 mb-2">{like.musicId.artist}</p>
            <p className="text-gray-700">{like.musicId.genre}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikedPage;
