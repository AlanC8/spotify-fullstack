"use client";
import React, { useEffect, useState } from "react";
import { SongService } from "../service/SongService";
import IMusic from "../types/music.type";
import SongItem from "../components/SongItem";
import { AuthService } from "../service/AuthService";
import { get } from "http";
import Link from "next/link";
import SongArtists from "../components/SongArtists";
import MyModal from "../components/modal/MyModal";
import { useRouter } from "next/navigation";

const Song = () => {
  const [songs, setSongs] = useState<IMusic[]>([]);
  const routes = useRouter();
  const getSongs = async () => {
    const response = await SongService.getAllSongs();
    setSongs(response.data);
  };
  const [user, setUser] = useState({} as any);
  const getUser = async () => {
    const response = await AuthService.getUser();
    setUser(response.data);
  };
  const [logged, setLogged] = useState(false);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    getSongs();
    getUser();
    if (window !== undefined) {
      if (localStorage.getItem("access")) {
        setLogged(true);
      }
    }
  }, []);
  return (
    <div className="bg-white">
      <div className="w-[80%] mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-5xl font-bold py-6">SpotyMoty</h1>
          <div className="flex align-center">
            <div className="mr-10 text-3xl cursor-pointer">
              <Link href={"/likes"}>♡</Link>
            </div>
            <div>
              {logged ? (
                <img
                  onClick={() => setVisible(true)}
                  className="cursor-pointer"
                  alt="Выйти с аккаунта?"
                  src={user.userImage}
                  width={40}
                ></img>
              ) : (
                <Link href={"/login"}>
                  <h1 className="cursor-pointer">Войти в аккаунт</h1>
                </Link>
              )}
            </div>
            <MyModal visible={visible} setVisible={setVisible}>
              <div>
                <div
                  className="cursor-pointer px-4 py-2 border-2 rounded mb-2"
                  onClick={() => {
                    routes.push(`/profile`);
                  }}
                >
                  В профиль
                </div>
                <div
                  className="cursor-pointer px-4 py-2 border-2 rounded"
                  onClick={() => {
                    if (window !== undefined) {
                      setLogged(false);
                      localStorage.removeItem("access");
                      location.reload();
                      routes.push("/songs");
                    }
                  }}
                >
                  Выйти с аккаунта
                </div>
              </div>
            </MyModal>
          </div>
        </div>
        <div>
          <SongArtists />
          <SongItem songs={songs} />
        </div>
      </div>
    </div>
  );
};

export default Song;
