import {
  PrismaClient,
  User,
  Video,
} from "../prisma/generated/prisma-client-js";
import express, { Request, Response } from "express";
import { VideoWithViews } from "../models/types";

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
  let videoWithViews: VideoWithViews[] = [];
  for (const video of videos) {
    const views = await prisma.view.count({
      where: {
        videoId: {
          equals: video.id,
        },
      },
    });
    videoWithViews.push({ ...video, views });
  }
  return videoWithViews;
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

  let videoWithViews = await getVideoViews(videos);
  videoWithViews.sort((a, b) => b.views - a.views);

  res.status(200).json({ videos });
}

export default getVideoRoutes;
