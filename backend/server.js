const http = require("http");
const app = require("./app");

if (require.main === module) {
  const server = http.createServer(app);
  const PORT = process.env.PORT || 8080;

  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;
