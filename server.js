import app from "./app.js";
import { configs } from "./src/config/index.js";

app.listen(configs.PORT, () => {
  console.log(`Server is running on http://localhost:${configs.PORT}`);
});
