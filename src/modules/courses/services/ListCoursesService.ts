import { injectable, inject } from 'tsyringe';
import Course from '../infra/typeorm/schemas/Course';
import ICoursesRepository from '../repositories/ICoursesRepository';

@injectable()
class ListCoursesService {
  constructor(
    @inject('CoursesRepository')
    private CoursesRepository: ICoursesRepository,
  ) {}

  public async execute(): Promise<Course[]> {
    const courses = await this.CoursesRepository.find();

    return courses;
  }
}

export default ListCoursesService;
