import express from "express";
import dotenv from "dotenv";

dotenv.config();

export function applicationLevel(req: express.Request | any, res: express.Response, next: () => void) {
    req.API_KEY = process.env.API_KEY;
    req.API_ENDPOINT = process.env.API_ENDPOINT;
    next();
}