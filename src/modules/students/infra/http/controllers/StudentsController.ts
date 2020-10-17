import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreateStudentService from '@modules/students/services/CreateStudentService';
import UpdateStudentService from '@modules/students/services/UpdateStudentService';
import ReadStudentService from '@modules/students/services/ReadStudentService';

export default class StudentsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, birth_date } = request.body;
    const createStudent = container.resolve(CreateStudentService);
    const student = await createStudent.execute({
      name,
      email,
      birth_date,
    });

    return response.status(200).json(student);
  }

  public async read(request: Request, response: Response): Promise<Response> {
    const student_id = request.params.id;
    const readStudent = container.resolve(ReadStudentService);

    const student = await readStudent.execute({ student_id });

    return response.status(200).json(student);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const student_id = request.params.id;
    const { name, email, birth_date } = request.body;

    const updateProfile = container.resolve(UpdateStudentService);

    const user = await updateProfile.execute({
      student_id,
      name,
      email,
      birth_date,
    });

    delete user.password;

    return response.json(user);
  }
}
