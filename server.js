import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

// 1) Core middleware
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// 2) Mount your API routers
import authRoutes      from './server/routes/auth.routes.js';
import userRoutes      from './server/routes/user.routes.js';
import educationRoutes from './server/routes/education.routes.js';
import projectRoutes   from './server/routes/project.routes.js';
import contactRoutes   from './server/routes/contact.routes.js';

app.use('/api/auth',       authRoutes);
app.use('/api/users',      userRoutes);
app.use('/api/educations', educationRoutes);
app.use('/api/projects',   projectRoutes);
app.use('/api/contacts',   contactRoutes);

// 3) Serve your built frontend
app.use(express.static(path.join(__dirname, 'client', 'dist')));

// 4) SPA fallback (must come after static + API)
app.get('/:path(.*)', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

// 5) Start and connect DB
const PORT = process.env.PORT || 3000;
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}/`);
    });
  })
  .catch(err => console.error(err));




