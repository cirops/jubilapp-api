import { Router } from 'express';

import StudentsController from '../controllers/CoursesController';

const coursesRouter = Router();
const coursesController = new StudentsController();

coursesRouter.post('/', coursesController.create);
coursesRouter.get('/:id', coursesController.read);
coursesRouter.put('/:id', coursesController.update);
coursesRouter.delete('/:id', coursesController.delete);

export default coursesRouter;
