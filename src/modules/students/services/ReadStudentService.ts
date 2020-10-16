import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import Student from '../infra/typeorm/schemas/Student';
import IStudentsRepository from '../repositories/IStudentsRepository';

interface IRequest {
  student_id: string;
}

@injectable()
class ReadStudentService {
  constructor(
    @inject('StudentsRepository')
    private studentsRepository: IStudentsRepository,
  ) {}

  public async execute({ student_id }: IRequest): Promise<Student> {
    const student = await this.studentsRepository.findOne(student_id);

    if (!student) {
      throw new AppError('Student does not exist.');
    }

    return student;
  }
}

export default ReadStudentService;
