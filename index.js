const express = require("express");
const cors = require("cors");

const app = express();

// Configure whitelist of allowed origins
const whitelist = ["http://example.com", "https://example.com"];

// Configure CORS options
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       // Allow requests from whitelisted origin
//       callback(null, true);
//     } else {
//       // Block requests from non-whitelisted origin
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
// };

// // Apply CORS middleware with options
// app.use(cors(corsOptions));

// Example route with no CORS restrictions
app.get("/api/hello", (req, res) => {
  res.send("Hello World!");
});

// Example route with CORS restrictions
app.get("/api/data", (req, res) => {
  res.json({
    message: "This data can only be accessed from whitelisted domains",
  });
});

// ... your other middleware and routes ...

// Start the server
app.listen(8080, function () {
  console.log("Server is running on port 8080");
});
