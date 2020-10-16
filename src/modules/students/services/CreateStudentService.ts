import { injectable, inject } from 'tsyringe';
import Student from '../infra/typeorm/schemas/Student';
import IStudentsRepository from '../repositories/IStudentsRepository';

interface IRequest {
  name: string;
  email: string;
  birth_date: Date;
}

@injectable()
class CreateStudentService {
  constructor(
    @inject('StudentsRepository')
    private studentsRepository: IStudentsRepository,
  ) {}

  public async execute({
    name,
    email,
    birth_date,
  }: IRequest): Promise<Student> {
    const student = await this.studentsRepository.create({
      name,
      email,
      birth_date,
    });

    return student;
  }
}

export default CreateStudentService;
