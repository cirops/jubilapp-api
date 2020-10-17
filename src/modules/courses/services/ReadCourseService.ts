import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import Course from '../infra/typeorm/schemas/Course';
import ICoursesRepository from '../repositories/ICoursesRepository';

interface IRequest {
  course_id: string;
}

@injectable()
class ReadCourseService {
  constructor(
    @inject('CoursesRepository')
    private CoursesRepository: ICoursesRepository,
  ) {}

  public async execute({ course_id }: IRequest): Promise<Course> {
    const course = await this.CoursesRepository.findOne(course_id);

    if (!course) {
      throw new AppError('Course does not exist.');
    }

    return course;
  }
}

export default ReadCourseService;
