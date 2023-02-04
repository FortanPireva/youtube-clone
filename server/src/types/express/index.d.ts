import { User, Video } from "../../prisma/generated/prisma-client-js";

// to make the file a module and avoid the Typescript error
export {};

declare global {
  namespace Express {
    export interface Request {
      user?: User & {
        videos: Video[];
      };
    }
  }
}
