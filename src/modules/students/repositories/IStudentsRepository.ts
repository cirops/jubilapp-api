import Student from '../infra/typeorm/schemas/Student';

import ICreateStudentDTO from '../dtos/ICreateStudentDTO';

export default interface IStudentsRepository {
  find(): Promise<Student[]>;
  findByEmail(email: string): Promise<Student[]>;
  findByName(name: string): Promise<Student[]>;
  create(data: ICreateStudentDTO): Promise<Student>;
  findOne(student_id: string): Promise<Student | undefined>;
  save(student: Student): Promise<Student>;
  delete(student_id: string): Promise<void>;
}
