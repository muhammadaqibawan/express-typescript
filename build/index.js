"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loginRoute_1 = require("./routes/loginRoute");
const cookie_session_1 = __importDefault(require("cookie-session"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(loginRoute_1.router);
app.use((0, cookie_session_1.default)({
    name: 'session',
    keys: ['loggedIn']
}));
app.listen(3000, () => {
    console.log('Listening on port 3000');
});
