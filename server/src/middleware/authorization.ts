import { PrismaClient } from "../prisma/generated/prisma-client-js";
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
const prisma = new PrismaClient();

export async function protect(req: Request, res: Response, next: NextFunction) {
  if (!req.cookies.token) {
    return next({
      message: "You need to be logged in to visit this route",
      statusCode: 401,
    });
  }

  try {
    const token = req.cookies.token;
    if (!process.env.JWT_SECRET) {
      throw new Error("NO JWT_SECRET");
    }
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET);

    const user = await prisma.user.findUnique({
      where: {
        id: decoded.id,
      },
      include: {
        videos: true,
      },
    });
    if (!user) {
      return next({
        message: "You need to be provide a valid token",
        statusCode: 403,
      });
    }

    req.user = user;
    next();
  } catch (error) {}
}
