import { getMongoRepository, MongoRepository } from 'typeorm';

import IStudentsRepository from '@modules/students/repositories/IStudentsRepository';
import ICreateStudentDTO from '@modules/students/dtos/ICreateStudentDTO';

import Student from '../schemas/Student';

class StudentsRepository implements IStudentsRepository {
  private ormRepository: MongoRepository<Student>;

  constructor() {
    this.ormRepository = getMongoRepository(Student);
  }

  public async findByName(name: string): Promise<Student[]> {
    const students = await this.ormRepository.find({ name });

    return students;
  }

  public async findByEmail(email: string): Promise<Student[]> {
    const students = await this.ormRepository.find({ email });

    return students;
  }

  public async find(): Promise<Student[]> {
    const students = await this.ormRepository.find();

    return students;
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
    const student = await this.ormRepository.findOne(student_id);

    return student;
  }

  public async save(student: Student): Promise<Student> {
    await this.ormRepository.save(student);

    return student;
  }

  public async delete(student_id: string): Promise<void> {
    await this.ormRepository.delete(student_id);
  }
}

export default StudentsRepository;
