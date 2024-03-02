"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mongoose_1 = __importDefault(require("mongoose"));
const studentRoute_1 = __importDefault(require("./routes/studentRoute"));
const postRoute_1 = __importDefault(require("./routes/postRoute"));
const body_parser_1 = __importDefault(require("body-parser"));
const initApp = () => {
    const promise = new Promise((resolve, reject) => {
        const db = mongoose_1.default.connection;
        db.on("error", (error) => console.error(error));
        db.once("open", () => console.log("connected to db"));
        mongoose_1.default.connect(process.env.BASE_URL).then(() => {
            app.use(body_parser_1.default.json());
            app.use(body_parser_1.default.urlencoded({ extended: true }));
            app.use("/student", studentRoute_1.default);
            app.use("/post", postRoute_1.default);
            resolve(app);
        });
    });
    return promise;
};
exports.default = initApp;
//# sourceMappingURL=App.js.map