const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

//Serve the index.html file include css and js files
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
