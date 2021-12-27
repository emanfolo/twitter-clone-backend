"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../routes/user"));
const feed_1 = __importDefault(require("../routes/feed"));
const profile_1 = __importDefault(require("../routes/profile"));
const tweet_1 = __importDefault(require("../routes/tweet"));
const hashtag_1 = __importDefault(require("../routes/hashtag"));
const app = (0, express_1.default)();
app.use('/user', user_1.default);
app.use('/feed', feed_1.default);
app.use('/profile', profile_1.default);
app.use('/tweet', tweet_1.default);
app.use('/hashtag', hashtag_1.default);
app.get('/', (req, res) => {
    res.send('Welcome to the Flitter api');
});
app.listen(4000, () => console.log('Server up'));
//# sourceMappingURL=server.js.map