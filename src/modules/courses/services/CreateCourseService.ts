import { injectable, inject } from 'tsyringe';
import Course from '../infra/typeorm/schemas/Course';
import ICoursesRepository from '../repositories/ICoursesRepository';

interface IRequest {
  title: string;
  description?: string;
}

@injectable()
class CreateCourseService {
  constructor(
    @inject('CoursesRepository')
    private CoursesRepository: ICoursesRepository,
  ) {}

  public async execute({ title, description }: IRequest): Promise<Course> {
    const course = await this.CoursesRepository.create({
      title,
      description,
    });

    return course;
  }
}

export default CreateCourseService;
