import React, { useEffect, useState } from "react";
import { SongService } from "../service/SongService";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SongArtists = () => {
  const [artists, setArtists] = useState([]);
  const navigate = useRouter();
  const getArtists = async () => {
    const response = await SongService.getAllArtists();
    setArtists(response.data);
  };

  useEffect(() => {
    getArtists();
  }, []);

  const [query, setQuery] = useState("");

  const searchForArtists = () => {
    return artists.filter((artist) =>
      artist.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  const filteredArtists = query ? searchForArtists() : artists;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Artists</h1>
      <div className="flex justify-center">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="py-2 px-4 border-2 rounded"
          type="text"
          placeholder="Клоун детекшннн"
        />
      </div>
      <Link href={"/artist-create"}>
        <p className="pb-6 text-2xl pl-2">Предложить артиста</p>
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredArtists.map((artist) => (
          <div
            key={artist._id}
            onClick={() => {
              navigate.push(`/artists/${artist._id}`);
            }}
            className="bg-white rounded-xl shadow-lg  hover:scale-105 transform transition duration-300"
          >
            <img
              src={artist.coverImage}
              alt={artist.name}
              className="w-32 h-32 rounded-full mx-auto mt-4 object-cover border-4 border-white shadow-md"
            />
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold mt-4">{artist.name}</h2>
              <p className="text-gray-600">{artist.genre}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongArtists;
