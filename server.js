// server.js

import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';

// Asset router
import assetsRouter from './server/assets-router.js';

// API routers
import authRoutes      from './server/routes/auth.routes.js';
import userRoutes      from './server/routes/user.routes.js';
import educationRoutes from './server/routes/education.routes.js';
import projectRoutes   from './server/routes/project.routes.js';
import contactRoutes  from './server/routes/contact.routes.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

// CORS – allow React dev server
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

// Parse JSON bodies & cookies
app.use(express.json());
app.use(cookieParser());

// Static/asset routes
app.use('/src', assetsRouter);

// Mount API routes
app.use('/api/auth',       authRoutes);       // /api/auth/signin, /api/auth/signout
app.use('/api/users',      userRoutes);       // GET|POST /api/users, etc.
app.use('/api/educations', educationRoutes);  // GET|POST /api/educations, etc.
app.use('/api/projects', projectRoutes);
app.use('/api/contacts', contactRoutes);
// Root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to My Portfolio application');
});

// Start the server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

// Connect to MongoDB (unchanged)
mongoose.connect(
  'mongodb+srv://ccyccyccy2000:JH9YN04IXJ57Ky9n@portfolio.dg4mg4l.mongodb.net/portfolio?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

export default app;



