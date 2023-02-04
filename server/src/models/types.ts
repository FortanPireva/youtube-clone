import { User, Video } from "../prisma/generated/prisma-client-js";

export type VideoWithViews = Video & { user: User; views: number };
