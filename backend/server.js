import express from "express";

const app = express();

app.get("/api/notes", (req, res) => {
  res.send("5 notes");
});
app.post("/api/notes", (req, res) => {
  res.status(201).json({ message: "note created successfully" });
});
app.put("/api/notes/:id", (req, res) => {
  res.status(200).json({ message: "note updated successfully" });
});
app.delete("/api/notes/:id", (req, res) => {
  res.status(200).json({ message: "note deleted successfully" });
});
app.listen(5000, () => {
  console.log("server started");
});
