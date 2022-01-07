import express from "express";
import userRouter from "../routes/user";
import feedRouter from "../routes/feed";
import profileRouter from "../routes/profile";
import tweetRouter from "../routes/tweet";
import hashtagRouter from "../routes/hashtag";
import likeRouter from "../routes/like";
import retweetRouter from "../routes/retweet";
import searchRouter from "../routes/search";
import trendingRouter from "../routes/trending";
import notificationRouter from "../routes/notification";
import followRouter from "../routes/follow";
import cors from "cors";

const app = express();

// const allowedOrigins = ['http://localhost:3000', 'http://flitter-site.netlify.app', 'https://flitter-zeta.vercel.app/']

// const options: cors.CorsOptions = {
//   origin: allowedOrigins
// }

// app.use(cors(options))

app.use(cors());

app.use("/user", userRouter);
app.use("/feed", feedRouter);
app.use("/profile", profileRouter);
app.use("/tweet", tweetRouter);
app.use("/hashtag", hashtagRouter);
app.use("/like", likeRouter);
app.use("/retweet", retweetRouter);
app.use("/search", searchRouter);
app.use("/trending", trendingRouter);
app.use("/notification", notificationRouter);
app.use("/follow", followRouter);

app.get("/", (req: any, res: any) => {
  res.send("Welcome to the Flitter api");
});

app.listen(process.env.PORT || 4000, () => console.log("Server up"));
