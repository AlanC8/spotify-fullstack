import { Router } from "express";
import authRouter from "./auth/auth-router";
import musicRouter from "./music/routes";
import artistsRouter from "./artists/routes";
import playlistRouter from "./playlist/routes";
import favRouter from "./favmuz/routes";
import favPlaylistRouter from "./favplaylist/routes";
const globalRouter = Router();

globalRouter.use(authRouter);
globalRouter.use(musicRouter);
globalRouter.use(artistsRouter);
globalRouter.use(playlistRouter);
globalRouter.use(favRouter);
globalRouter.use(favPlaylistRouter);
export default globalRouter;
