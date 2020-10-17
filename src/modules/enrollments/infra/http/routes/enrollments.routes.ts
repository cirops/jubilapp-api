import { Router } from 'express';

import EnrollmentsController from '../controllers/EnrollmentsController';

const enrollmentsRouter = Router();
const enrollmentsController = new EnrollmentsController();

enrollmentsRouter.get('/', enrollmentsController.index);
enrollmentsRouter.post('/', enrollmentsController.create);
enrollmentsRouter.get('/:id', enrollmentsController.read);
enrollmentsRouter.put('/:id', enrollmentsController.update);
enrollmentsRouter.delete('/:id', enrollmentsController.delete);

export default enrollmentsRouter;
