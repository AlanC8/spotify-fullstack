import { Router } from "express";
import { authMiddleware } from "../middlewares/auth-middleware";
import AuthController from "./auth-controller";
import AuthService from "./auth-service";
import User from "./models/User";
import { upload, uploadFile } from "../middlewares/s3-middleware";
import { v4 as uuidv4 } from "uuid";

const authRouter = Router();

const authService = new AuthService();
const authController = new AuthController(authService);

export interface UserRequest {
  id: string;
  email: string;
  iat: number;
  exp: number;
}

authRouter.post("/register", authController.registerUser);
authRouter.post("/login", authController.loginUser);
authRouter.post("/refresh-token", authController.refreshToken);

authRouter.get("/user", authMiddleware, async (req, res) => {
  try {
    const user = req.user as UserRequest;

    const userData = await User.findById(user.id);
    res.json(userData);
  } catch (error) {
    res.json({ message: "Error fetching user data" });
  }
});

authRouter.put(
  "/change-profile/:id",
  upload.single("userImage"),
  authMiddleware,
  async (req, res) => {
    try {
      const { username, password } = req.body;


      console.log(req.body.userImage);
      

      const userImage = await uploadFile(
        req.body.userImage,
        "spotify-nfactorial",
        uuidv4() + '.jpg'
      );

      const user = await User.findById(req.params.id);
      const email = user?.email;

      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { username, email, password, userImage },
        { new: true }
      );

      if (!updatedUser) {
        console.error("User not found");
        return res.status(404).json({ message: "User not found" });
      }

      res.json(updatedUser);
    } catch (error) {
      console.error("Error updating user data:", error);
      res.status(500).json({ message: error });
    }
  }
);

// Example protected route
authRouter.get("/protected", authMiddleware, (req, res) => {
  res.json({ message: "You have access to this route!" });
});

export default authRouter;
