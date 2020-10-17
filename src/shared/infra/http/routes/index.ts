import { Router } from 'express';

import studentsRouter from '@modules/students/infra/http/routes/students.routes';
import coursesRouter from '@modules/courses/infra/http/routes/courses.routes';

const routes = Router();

routes.use('/students', studentsRouter);
routes.use('/courses', coursesRouter);

export default routes;
