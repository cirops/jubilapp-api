import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import Course from '../infra/typeorm/schemas/Course';
import ICoursesRepository from '../repositories/ICoursesRepository';

interface IRequest {
  course_id: string;
  title: string;
  description?: string;
}

@injectable()
class UpdateCourseService {
  constructor(
    @inject('CoursesRepository')
    private CoursesRepository: ICoursesRepository,
  ) {}

  public async execute({
    course_id,
    title,
    description,
  }: IRequest): Promise<Course> {
    const course = await this.CoursesRepository.findOne(course_id);

    if (!course) {
      throw new AppError('Course not found');
    }

    course.title = title;
    if (description) {
      course.description = description;
    }

    await this.CoursesRepository.save(course);

    return course;
  }
}

export default UpdateCourseService;
