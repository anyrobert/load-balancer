const koa = require("koa");

app = new koa();

app.use((ctx) => {
  ctx.body = `<h1>Hello World ${process.env.PORT}</h1>`;
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
