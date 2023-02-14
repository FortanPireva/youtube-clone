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
exports.protect = void 0;
const prisma_client_js_1 = require("../prisma/generated/prisma-client-js");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma = new prisma_client_js_1.PrismaClient();
function protect(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
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
            const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
            const user = yield prisma.user.findUnique({
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
        }
        catch (error) { }
    });
}
exports.protect = protect;
