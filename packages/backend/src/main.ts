import { json } from "body-parser";
import express from "express";

const app = express();

app.use(json());
app.use((req, res, next) => {
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-allow-headers", "content-type");
  next();
});

const likedFoxes: {
  [url: string]: {
    likes: number;
    dislikes: number;
  };
} = {};

app.get("/", (request, response) => {
  response.send({ fox: true });
});

app.post("/selection", (request, response) => {
  const { imageUrl, selection } = request.body;
  console.log({ imageUrl, selection });

  const likedFox = likedFoxes[imageUrl] || {
    likes: 0,
    dislikes: 0,
  };

  if (selection) {
    likedFox.likes += 1;
  } else {
    likedFox.dislikes += 1;
  }

  likedFoxes[imageUrl] = likedFox;

  response.send({ ok: true });
});

app.get("/selections", (request, response) => {
  response.send(likedFoxes);
});

console.log("listening on http://localhost:8000");
app.listen(8000);
