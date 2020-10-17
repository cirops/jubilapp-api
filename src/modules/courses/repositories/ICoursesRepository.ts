import Course from '../infra/typeorm/schemas/Course';

import ICreateCourseDTO from '../dtos/ICreateCourseDTO';

export default interface ICoursesRepository {
  create(data: ICreateCourseDTO): Promise<Course>;
  findOne(course_id: string): Promise<Course | undefined>;
  save(course: Course): Promise<Course>;
  delete(course_id: string): Promise<void>;
}
