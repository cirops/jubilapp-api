import { injectable, inject } from 'tsyringe';
import Student from '../infra/typeorm/schemas/Student';
import IStudentsRepository from '../repositories/IStudentsRepository';

@injectable()
class ListStudentsService {
  constructor(
    @inject('StudentsRepository')
    private studentsRepository: IStudentsRepository,
  ) {}

  public async execute(): Promise<Student[]> {
    const students = await this.studentsRepository.find();

    return students;
  }
}

export default ListStudentsService;
