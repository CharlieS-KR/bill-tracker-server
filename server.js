"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var port = process.env.PORT || 3000;
var server = express_1.default();
server.get('/', function (req, res) {
    res
        .status(200)
        .send("howdy this is the server");
});
server.listen(port, function () { return console.log("the server is listening on port " + port); });
