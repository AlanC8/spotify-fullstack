"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ArtistCreate = () => {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [genre, setGenre] = useState("");
  const router = useRouter();

  const ArtistAdd = async () => {
    const response = await axios.post("http://localhost:3000/api/v1/artists", {
      name,
      bio,
      coverImage,
      genre,
    });
    if (response.status === 200) {
      router.push("/songs");
    }
    setName('');
    setBio('');
    setCoverImage('');
    setGenre('');
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-center">Создать Артиста</h1>
        <div className="space-y-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Название артиста"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Био артиста"
            className="w-full p-2 border border-gray-300 rounded-lg h-32"
          ></textarea>
          <input
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)}
            type="text"
            placeholder="Фото артиста"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <input
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            type="text"
            placeholder="Жанр его песней"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <button
          onClick={ArtistAdd}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full"
        >
          Добавить Артиста
        </button>
      </div>
    </div>
  );
};

export default ArtistCreate;
