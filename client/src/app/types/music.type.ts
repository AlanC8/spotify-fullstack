export default interface IMusic {
  _id: string;
  title: string;
  artist: string;
  duration: string;
  coverImage: string;
  audioUrl: string; // Ensure this field is included
  album?: string;
  releaseDate?: Date;
  genre?: string;
}
