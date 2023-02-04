import {
  PrismaClient,
  User,
  Video,
} from "../prisma/generated/prisma-client-js";
import express, { Request, Response } from "express";

const prisma = new PrismaClient();

function getVideoRoutes() {
  const router = express.Router();

  router.get("/", getRecommendedVideos);
  router.get("/trending", getTrendingVideos);

  return router;
}

export async function getVideoViews(
  videos: (Video & {
    user: User;
    views?: number;
  })[]
) {
  for (const video of videos) {
    const views = await prisma.view.count({
      where: {
        videoId: {
          equals: video.id,
        },
      },
    });
    video.views = views;
  }
  return videos;
}

async function getRecommendedVideos(req: Request, res: Response) {
  let videos = await prisma.video.findMany({
    include: {
      user: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  if (!videos.length) {
    return res.status(200).json({ videos });
  }

  videos = await getVideoViews(videos);
  return res.status(200).json({ videos });
}

async function getTrendingVideos(req: Request, res: Response) {
  let videos = await prisma.video.findMany({
    include: {
      user: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  if (!videos.length) {
    return res.status(200).json({ videos });
  }

  videos = await getVideoViews(videos);
  return res.status(200).json({ videos });
}
