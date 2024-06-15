import React, { useState } from "react";
import IMusic from "../types/music.type";
import axios from "axios";
import MyModal from "./modal/MyModal";
import Link from "next/link";

interface SongItemProps {
  songs: IMusic[];
}

const SongItem: React.FC<SongItemProps> = ({ songs }) => {
  const [currentSong, setCurrentSong] = useState<HTMLAudioElement | null>(null);
  const [playingSongUrl, setPlayingSongUrl] = useState<string | null>(null);

  const handlePlay = (audioUrl: string) => {
    if (currentSong) {
      if (playingSongUrl === audioUrl) {
        currentSong.pause();
        setCurrentSong(null);
        setPlayingSongUrl(null);
      } else {
        currentSong.pause();
        const audio = new Audio(audioUrl);
        audio.play();
        setCurrentSong(audio);
        setPlayingSongUrl(audioUrl);
      }
    } else {
      const audio = new Audio(audioUrl);
      audio.play();
      setCurrentSong(audio);
      setPlayingSongUrl(audioUrl);
    }
  };

  const [query, setQuery] = useState("");

  const songSearch = () => {
    return songs.filter((song) =>
      song.title.toLowerCase().includes(query.toLowerCase())
    );
  };

  const filteredSongs = query ? songSearch() : songs;

  const [playList, setPlayList] = useState([]);
  const [visible, setVisible] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);

  const showPlayLists = async (songId) => {
    const resp1 = await axios.get("http://localhost:3000/api/v1/playlists");
    setPlayList(resp1.data);
    setSelectedSong(songId);
    setVisible(true);
  };

  const addToLikes = async (musicID: string) => {
    await axios.post(
      "http://localhost:3000/api/v1/favmuz",
      {
        musicId: musicID,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      }
    );
  };
  return (
    <div className="mt-10">
      <div>
        <h1 className="text-4xl font-bold text-center mb-8">Random Music</h1>
        <div className="flex justify-center mb-10">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="py-2 px-4 border-2 rounded"
            type="text"
            placeholder="Поиск мюзик"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <Link href={"/create-album"}>
          <h1 className="pb-6 text-2xl">Создать Плейлист</h1>
        </Link>
        <Link href={"/liked-playlists"}>
          <h1 className="pb-6 text-2xl">Любимые Плейлисты</h1>
        </Link>
      </div>
      {filteredSongs.map((song) => (
        <div
          key={song._id}
          className="flex items-center gap-4 p-4 mb-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow dark:bg-gray-950 dark:hover:shadow-lg cursor-pointer"
        >
          <div className="flex-shrink-0 w-16 h-16 rounded-md overflow-hidden">
            <img
              src={song.coverImage}
              alt="Song Cover"
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-medium truncate text-gray-800 dark:text-white">
              {song.title}
            </h3>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              {song.artist}
            </p>
          </div>
          <div
            onClick={() => addToLikes(song._id)}
            className="text-white text-xl"
          >
            ♡
          </div>
          <div
            onClick={(e) => {
              e.stopPropagation();
              showPlayLists(song._id);
            }}
            className="text-center text-white text-sm"
          >
            Добавить <br /> в плейлист
          </div>
          <MyModal visible={visible} setVisible={setVisible}>
            <div>
              {playList.length > 0 ? (
                playList.map((playlist) => (
                  <h1
                    key={playlist._id}
                    onClick={() => {
                      setVisible(false);
                      console.log(selectedSong, playlist._id);

                      axios.post(
                        `http://localhost:3000/api/v1/playlists/${playlist._id}/add-song`,
                        {
                          musicId: selectedSong,
                        }
                      );
                    }}
                  >
                    {playlist.name}
                  </h1>
                ))
              ) : (
                <Link href={`/create-album`}>
                  <h1>Создать плейлист</h1>
                </Link>
              )}
            </div>
          </MyModal>
          <div
            onClick={() => handlePlay(song.audioUrl)}
            className="text-blue-500 hover:text-blue-700 cursor-pointer"
          >
            {playingSongUrl === song.audioUrl ? "Pause" : "Play"}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {song.duration}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SongItem;
