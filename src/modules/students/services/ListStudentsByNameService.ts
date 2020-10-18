import { injectable, inject } from 'tsyringe';
import Student from '../infra/typeorm/schemas/Student';
import IStudentsRepository from '../repositories/IStudentsRepository';

@injectable()
class ListStudentsByNameService {
  constructor(
    @inject('StudentsRepository')
    private studentsRepository: IStudentsRepository,
  ) {}

  public async execute(name: string): Promise<Student[]> {
    const students = await this.studentsRepository.findByName(name);

    return students;
  }
}

export default ListStudentsByNameService;
