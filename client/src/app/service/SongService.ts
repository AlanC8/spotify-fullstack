import axios from "axios";
import IMusic from "../types/music.type";

export class SongService {
  static _url: string = "http://localhost:3000/api/v1";
  static async getAllSongs() {
    const response = await axios.get<IMusic[]>(`${this._url}/musics`);
    return response;
  }
  static async getAllArtists() {
    const response = await axios.get(`${this._url}/artists`);
    return response;
  }
  static async getArtistById(id: string) {
    const response = await axios.get(`${this._url}/artists/${id}`);
    return response;
  }
  static async getPlayListById(id: string) {
    const response = await axios.get(`${this._url}/playlists/${id}`);
    return response;
  }
}
