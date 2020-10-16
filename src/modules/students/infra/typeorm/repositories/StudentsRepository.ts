import { getMongoRepository, MongoRepository } from 'typeorm';

import IStudentsRepository from '@modules/students/repositories/IStudentsRepository';
import ICreateStudentDTO from '@modules/students/dtos/ICreateStudentDTO';

import Student from '../schemas/Student';

class StudentsRepository implements IStudentsRepository {
  private ormRepository: MongoRepository<Student>;

  constructor() {
    this.ormRepository = getMongoRepository(Student);
  }

  public async create({
    name,
    email,
    birth_date,
  }: ICreateStudentDTO): Promise<Student> {
    const student = this.ormRepository.create({
      name,
      email,
      birth_date,
    });

    await this.ormRepository.save(student);

    return student;
  }

  public async findOne(student_id: string): Promise<Student | undefined> {
    const student = this.ormRepository.findOne(student_id);

    return student;
  }
}

export default StudentsRepository;
