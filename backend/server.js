const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const filePath = path.join(__dirname, "formData.json");

const requestListener = (req, res) => {
  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Content-Length": 0,
    });
    res.end();
    return;
  }

  if (req.method === "GET" && req.url === "/form-data") {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        });
        res.end(JSON.stringify({ error: "Failed to read data" }));
        return;
      }
      res.writeHead(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      });
      res.end(data);
    });
  } else if (req.method === "POST" && req.url === "/submit-form") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const newData = JSON.parse(body);

      fs.readFile(filePath, "utf8", (err, data) => {
        if (err && err.code !== "ENOENT") {
          res.writeHead(500, {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          });
          res.end(JSON.stringify({ error: "Failed to read data" }));
          return;
        }

        let existingData;
        try {
          existingData = data ? JSON.parse(data) : [];
          if (!Array.isArray(existingData)) {
            existingData = [];
          }
        } catch (parseErr) {
          existingData = [];
        }

        existingData.push(newData);

        fs.writeFile(filePath, JSON.stringify(existingData, null, 2), (err) => {
          if (err) {
            res.writeHead(500, {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            });
            res.end(JSON.stringify({ error: "Failed to save data" }));
            return;
          }
          res.writeHead(200, {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          });
          res.end(JSON.stringify({ message: "Data saved successfully" }));
        });
      });
    });
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    });
    res.end(JSON.stringify({ error: "Not found" }));
  }
};

const server = http.createServer(requestListener);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
