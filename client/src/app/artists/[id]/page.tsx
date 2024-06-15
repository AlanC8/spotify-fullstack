"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { SongService } from "../../service/SongService";

const ArtistPage = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState({} as any);
  const [songs, setSongs] = useState([] as any[]);
  const getArtistData = async () => {
    const response = await SongService.getArtistById(id as string);
    setArtist(response.data.artist);
    setSongs(response.data.songs);
  };

  useEffect(() => {
    if (id) {
      console.log(id);
      getArtistData();
    }
  }, [id]);

  console.log(artist);

  return (
    <div className="container mx-auto px-4 py-8 bg-black">
      <div className="flex flex-col items-center justify-center mb-8">
        <img
          src={artist.coverImage}
          alt={artist.name}
          className="w-32 h-32 rounded-full mx-auto mt-4 object-cover border-4 border-white shadow-md"
        />
        <h1 className="text-white text-3xl font-bold mt-4">{artist.name}</h1>
        <p className="text-white">{artist.genre}</p>
        <p className="text-white w-[450px] text-center text-sm">{artist.bio}</p>
        
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-[70%] mx-auto">
        {songs.map((song) => (
          <div key={song._id} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={song.coverImage}
              alt={song.title}
              className="w-full h-32 object-cover rounded-lg mb-2"
            />
            <h2 className="text-lg font-bold">{song.title}</h2>
            <p className="text-gray-600">{song.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistPage;
