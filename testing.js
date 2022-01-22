const http = require("http");
const options = {
  hostname: "localhost",
  port: 8080,
  method: "GET",
};

for (let i = 0; i < 500; i++) {
  const req = http.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);

    res.on("data", (d) => {
      process.stdout.write(d);
    });
  });

  req.on("error", (error) => {
    console.error(error);
  });

  req.end();
}
