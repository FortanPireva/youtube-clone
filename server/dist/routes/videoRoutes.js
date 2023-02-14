"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVideoViews = void 0;
const prisma_client_js_1 = require("../prisma/generated/prisma-client-js");
const express_1 = __importDefault(require("express"));
const prisma = new prisma_client_js_1.PrismaClient();
function getVideoRoutes() {
    const router = express_1.default.Router();
    router.get("/", getRecommendedVideos);
    router.get("/trending", getTrendingVideos);
    return router;
}
function getVideoViews(videos) {
    return __awaiter(this, void 0, void 0, function* () {
        let videoWithViews = [];
        for (const video of videos) {
            const views = yield prisma.view.count({
                where: {
                    videoId: {
                        equals: video.id,
                    },
                },
            });
            videoWithViews.push(Object.assign(Object.assign({}, video), { views }));
        }
        return videoWithViews;
    });
}
exports.getVideoViews = getVideoViews;
function getRecommendedVideos(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let videos = yield prisma.video.findMany({
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
        videos = yield getVideoViews(videos);
        return res.status(200).json({ videos });
    });
}
function getTrendingVideos(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let videos = yield prisma.video.findMany({
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
        let videoWithViews = yield getVideoViews(videos);
        videoWithViews.sort((a, b) => b.views - a.views);
        res.status(200).json({ videos });
    });
}
exports.default = getVideoRoutes;
