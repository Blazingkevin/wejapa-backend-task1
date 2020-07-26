const http = require("http");

const host = "localhost";
const PORT = process.env.PORT || 8080;
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Hello World, welcome to Wejapa Internships");
});

server.listen(PORT, host, () => {
  console.log(`Server is running on ${host}:${PORT}`);
});
