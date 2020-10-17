import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreateEnrollmentService from '@modules/enrollments/services/CreateEnrollmentService';
import UpdateEnrollmentService from '@modules/enrollments/services/UpdateEnrollmentService';
import ReadEnrollmentService from '@modules/enrollments/services/ReadEnrollmentService';
import DeleteEnrollmentService from '@modules/enrollments/services/DeleteEnrollmentService';

export default class EnrollmentsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { student_id, course_id } = request.body;
    const createEnrollment = container.resolve(CreateEnrollmentService);
    const enrollment = await createEnrollment.execute({
      student_id,
      course_id,
    });

    return response.status(200).json(enrollment);
  }

  public async read(request: Request, response: Response): Promise<Response> {
    const enrollment_id = request.params.id;
    const readEnrollment = container.resolve(ReadEnrollmentService);

    const enrollment = await readEnrollment.execute({ enrollment_id });

    return response.status(200).json(enrollment);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const enrollment_id = request.params.id;
    const { student_id, course_id } = request.body;

    const updateEnrollment = container.resolve(UpdateEnrollmentService);

    const user = await updateEnrollment.execute({
      enrollment_id,
      student_id,
      course_id,
    });

    return response.json(user);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const enrollment_id = request.params.id;

    const deleteEnrollment = container.resolve(DeleteEnrollmentService);

    await deleteEnrollment.execute({ enrollment_id });

    return response.status(204).send();
  }
}
