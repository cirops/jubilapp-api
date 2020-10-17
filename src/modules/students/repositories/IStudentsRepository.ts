import Student from '../infra/typeorm/schemas/Student';

import ICreateStudentDTO from '../dtos/ICreateStudentDTO';

export default interface IStudentsRepository {
  create(data: ICreateStudentDTO): Promise<Student>;
  findOne(student_id: string): Promise<Student | undefined>;
  save(student: Student): Promise<Student>;
}
