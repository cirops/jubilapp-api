import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import Student from '../infra/typeorm/schemas/Student';
import IStudentsRepository from '../repositories/IStudentsRepository';

interface IRequest {
  student_id: string;
  name: string;
  email: string;
  birth_date: Date;
}

@injectable()
class UpdateStudentService {
  constructor(
    @inject('StudentsRepository')
    private studentsRepository: IStudentsRepository,
  ) {}

  public async execute({
    student_id,
    name,
    email,
    birth_date,
  }: IRequest): Promise<Student> {
    const student = await this.studentsRepository.findOne(student_id);

    if (!student) {
      throw new AppError('User not found');
    }

    student.name = name;
    student.email = email;
    student.birth_date = birth_date;

    await this.studentsRepository.save(student);

    return student;
  }
}

export default UpdateStudentService;
