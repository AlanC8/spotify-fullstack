"use client";
import React, { useEffect, useState } from "react";
import { SongService } from "../../service/SongService";
import { useParams } from "next/navigation";

const PlayListDetails = () => {
  const { id } = useParams();
  const [playlist, setPlaylist] = useState({} as any);

  const getPlayListData = async () => {
    const response = await SongService.getPlayListById(id as string);
    setPlaylist(response.data);
  };

  useEffect(() => {
    getPlayListData();
  }, []);

  console.log(playlist);

  return (
    <div className="container mx-auto px-4">
      <div className="bg-white shadow-md rounded-lg p-4">
        <h1 className="text-2xl font-bold mb-4">Playlist: {playlist.name}</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {playlist.music &&
            playlist.music.map((song) => (
              <div
                key={song._id}
                className="p-4 border border-gray-200 rounded-lg"
              >
                <img
                  src={song.coverImage}
                  alt={song.title}
                  className="w-full h-40 object-cover rounded-lg mb-2"
                />
                <h2 className="text-lg font-semibold mb-1">{song.title}</h2>
                <p className="text-sm text-gray-500 mb-1">{song.artist}</p>
                <p className="text-sm text-gray-500 mb-1">{song.album}</p>
                <p className="text-sm text-gray-500 mb-1">{song.releaseDate}</p>
                <audio controls className="w-full">
                  <source src={song.audioUrl} type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PlayListDetails;
