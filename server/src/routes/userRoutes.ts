import { PrismaClient } from "../prisma/generated/prisma-client-js";
import express, { Request, Response } from "express";
import { protect } from "../middleware/authorization";

const prisma = new PrismaClient();

function getUserRoutes() {
  const router = express.Router();

  router.get("/liked-videos", protect, getLikedVideos);

  return router;
}

async function getLikedVideos(req: Request, res: Response) {
  // to do
}

export default getUserRoutes;
