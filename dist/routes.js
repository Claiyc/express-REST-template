"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
function default_1(app) {
    const router = express_1.default.Router();
    // call routes here
    // hello world
    router.get('/', (req, res) => {
        res.send('Hello World!');
    });
    app.use('/', router);
}
exports.default = default_1;
