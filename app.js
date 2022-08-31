const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger/swagger_output.json");
const port = 3000;
const routes = require("./src/routes");
const {
  errorLogger,
  errorResponder,
} = require("./src/middlewares/error.middleware");

app.use("/swagger-ui", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/api", routes);
app.use(errorLogger);
app.use(errorResponder);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
