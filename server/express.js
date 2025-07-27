import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";
import contactRoutes from './routes/contact.routes.js';
import projectRoutes from './routes/project.routes.js';
import educationRoutes from './routes/education.routes.js';
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

app.use(contactRoutes);
app.use(projectRoutes);
app.use(educationRoutes);
app.use(userRoutes);
app.use(authRoutes);
app.use(express.static(path.join(CURRENT_WORKING_DIR, "dist/app")));
export default app;
