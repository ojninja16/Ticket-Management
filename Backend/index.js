const express = require('express');
const cors=require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const connectDB = require('./Config/db');
const authRoutes = require('./Routes/authRoutes');
const ticketRoutes = require('./Routes/ticketRoutes');
const errorMiddleware = require('./Middleware/errorMiddleware');
const authMiddleware = require('./Middleware/authMiddleware');

const app = express();
connectDB();
app.use(
    cors({
      origin: process.env.Frontend || "",
      methods: ["GET", "POST","PUT","DELETE"],
      credentials: true,
    })
  );

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/tickets',authMiddleware, ticketRoutes);

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
