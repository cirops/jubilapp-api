import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import ICoursesRepository from '../repositories/ICoursesRepository';

interface IRequest {
  course_id: string;
}

@injectable()
class DeleteCourseService {
  constructor(
    @inject('CoursesRepository')
    private CoursesRepository: ICoursesRepository,
  ) {}

  public async execute({ course_id }: IRequest): Promise<void> {
    const course = await this.CoursesRepository.findOne(course_id);

    if (!course) {
      throw new AppError('Course not found');
    }

    await this.CoursesRepository.delete(course_id);
  }
}

export default DeleteCourseService;
