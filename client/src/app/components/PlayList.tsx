import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const PlaylistComponent = () => {
  const [playlists, setPlaylists] = useState([]);

  const navigate = useRouter();
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/playlists")
      .then((response) => setPlaylists(response.data))
      .catch((error) => console.error("Error fetching playlists:", error));
  }, []);

  const handleAddSongToPlaylist = (playlistId, songId) => {
    axios
      .post(`http://localhost:3000/api/v1/playlists/${playlistId}/add-song`, {
        songId,
      })
      .then((response) => {
        // Update the playlists state with the updated playlist
        setPlaylists(
          playlists.map((p) =>
            p._id === response.data._id ? response.data : p
          )
        );
      })
      .catch((error) => console.error("Error adding song to playlist:", error));
  };

  const deletePlayList = async (id: string) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/v1/playlists/${id}`
      );
      setPlaylists(playlists.filter((p) => p._id !== id));
    } catch (error) {
      console.error("Error deleting playlist:", error);
    }
  };

  // const handleRemoveSongFromPlaylist = (playlistId, songId) => {
  //   axios
  //     .post(
  //       `http://localhost:3000/api/v1/playlists/${playlistId}/remove-song`,
  //       { songId }
  //     )
  //     .then((response) => {
  //       // Update the playlists state with the updated playlist
  //       setPlaylists(
  //         playlists.map((p) =>
  //           p._id === response.data._id ? response.data : p
  //         )
  //       );
  //     })
  //     .catch((error) =>
  //       console.error("Error removing song from playlist:", error)
  //     );
  // };

  return (
    <div className="container mx-auto px-4">
      {playlists.map((playlist) => (
        <div
          key={playlist._id}
          className="mb-4 p-4 bg-gray-100 rounded border-2 cursor-pointer flex justify-between items-center"
        >
          <div onClick={() => navigate.push(`playlist/${playlist._id}`)}>
            <h3 className="text-xl font-bold">{playlist.name}</h3>
            <p> Songs: {playlist.music.length} </p>
          </div>
          <button onClick={() => deletePlayList(playlist._id)}>Удалить плейлист</button>
        </div>
      ))}
    </div>
  );
};

export default PlaylistComponent;
