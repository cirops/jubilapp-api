import { injectable, inject } from 'tsyringe';
import Student from '../infra/typeorm/schemas/Student';
import IStudentsRepository from '../repositories/IStudentsRepository';

@injectable()
class ListStudentsByEmailService {
  constructor(
    @inject('StudentsRepository')
    private studentsRepository: IStudentsRepository,
  ) {}

  public async execute(email: string): Promise<Student[]> {
    const students = await this.studentsRepository.findByEmail(email);

    return students;
  }
}

export default ListStudentsByEmailService;
