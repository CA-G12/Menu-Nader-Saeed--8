const app = require("./app");

const port = app.get("port");
const { NODE_ENV } = process.env;

app.listen(port, () => {
  console.log(`server running at http//localhost:${port} with ${NODE_ENV}`);
});
