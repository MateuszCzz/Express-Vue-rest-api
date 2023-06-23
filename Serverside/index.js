const express = require('express');
const cors = require('cors');
const db = require("./models");

const PORT = 3000;
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: "http://localhost:5173"
};
app.use(cors(corsOptions));

// Routes
const routes = require('./routes/index.js');
const routesToken = require('./routes/token.routes');
app.use(routes);
app.use(routesToken);
// Database connection
db.mongoose.connect(db.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Connected to database successfully");
})
.catch(err => {
  console.log(err);
  process.exit(1);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
