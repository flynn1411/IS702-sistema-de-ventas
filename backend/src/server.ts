const app = require("./app");

// import app from "./app";

const port = 3000;

app.listen(port, () => {
  console.log("-----------------------------------------------------------------------------");
  console.log(("App is running at http://localhost:%d in %s mode"), port, app.get("env"));
  console.log("Press CTRL-C to stop or CTRL + \\ to kill port \n\n");
  console.log("-----------------------------------------------------------------------------");
});
