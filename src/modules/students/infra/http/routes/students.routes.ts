import { Router } from 'express';

import StudentsController from '../controllers/StudentsController';

const studentsRouter = Router();
const studentsController = new StudentsController();

studentsRouter.get('/', studentsController.index);
studentsRouter.post('/', studentsController.create);
studentsRouter.get('/:id', studentsController.read);
studentsRouter.put('/:id', studentsController.update);
studentsRouter.delete('/:id', studentsController.delete);

export default studentsRouter;
