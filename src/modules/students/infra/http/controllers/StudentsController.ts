import { Request, Response } from 'express';

import { container } from 'tsyringe';

import ListStudentsByEmailService from '@modules/students/services/ListStudentsByEmailService';
import ListStudentsByNameService from '@modules/students/services/ListStudentsByNameService';
import ListStudentsService from '@modules/students/services/ListStudentsService';
import CreateStudentService from '@modules/students/services/CreateStudentService';
import UpdateStudentService from '@modules/students/services/UpdateStudentService';
import ReadStudentService from '@modules/students/services/ReadStudentService';
import DeleteStudentService from '@modules/students/services/DeleteStudentService';

export default class StudentsController {
  public async index(request: Request, response: Response): Promise<Response> {
    let students;
    let listStudents;
    if (request.query.name) {
      const name = request.query.name as string;
      listStudents = container.resolve(ListStudentsByNameService);
      students = await listStudents.execute(name);
    } else if (request.query.email) {
      const email = request.query.email as string;
      listStudents = container.resolve(ListStudentsByEmailService);
      students = await listStudents.execute(email);
    } else {
      listStudents = container.resolve(ListStudentsService);
      students = await listStudents.execute();
    }

    return response.status(200).json(students);
  }

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

    const updateStudent = container.resolve(UpdateStudentService);

    const user = await updateStudent.execute({
      student_id,
      name,
      email,
      birth_date,
    });

    return response.json(user);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const student_id = request.params.id;

    const deleteStudent = container.resolve(DeleteStudentService);

    await deleteStudent.execute({ student_id });

    return response.status(204).send();
  }
}
