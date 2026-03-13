import express from "express";
import { ENV } from "./lib/env.js";
import path from "path";
import { connectDB } from "./lib/dbCoonection.js";

const app = express();

const __dirname = path.resolve();

app.get("/health", (req, res) => {
  res.status(200).json({ msg: "api is ruunig smooth" });
});

app.get("/books", (req, res) => {
  res.status(200).json({ msg: "this is book " });
});

app.get("/server", (req, res) => {
  res.json({ message: "Server running" });
});

//make our aap ready for deployment
if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

connectDB()
  .then(() => {
    const server = app.listen(ENV.PORT, () => {
      console.log(`✅ Server running at http://localhost:${ENV.PORT}`);
    });

    // Handle runtime errors gracefully
    server.on("error", (error) => {
      console.error("❌ Server Error:", error);
      process.exit(1);
    });
  })
  .catch((error) => {
    console.error("❌ MongoDB Connection Failed:", error);
    process.exit(1);
  });
