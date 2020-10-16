import { Router } from 'express';

import StudentsController from '../controllers/StudentsController';

const studentsRouter = Router();
const studentsController = new StudentsController();

studentsRouter.post('/', studentsController.create);
studentsRouter.get('/:id', studentsController.read);

export default studentsRouter;
