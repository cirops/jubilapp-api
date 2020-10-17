import { getMongoRepository, MongoRepository } from 'typeorm';

import ICoursesRepository from '@modules/courses/repositories/ICoursesRepository';
import ICreateCourseDTO from '@modules/courses/dtos/ICreateCourseDTO';

import Course from '../schemas/Course';

class CoursesRepository implements ICoursesRepository {
  private ormRepository: MongoRepository<Course>;

  constructor() {
    this.ormRepository = getMongoRepository(Course);
  }

  find(): Promise<Course[]> {
    const courses = this.ormRepository.find();

    return courses;
  }

  public async create({
    title,
    description,
  }: ICreateCourseDTO): Promise<Course> {
    const course = this.ormRepository.create({
      title,
      description,
    });

    await this.ormRepository.save(course);

    return course;
  }

  public async findOne(course_id: string): Promise<Course | undefined> {
    const course = this.ormRepository.findOne(course_id);

    return course;
  }

  public async save(course: Course): Promise<Course> {
    await this.ormRepository.save(course);

    return course;
  }

  public async delete(course_id: string): Promise<void> {
    await this.ormRepository.delete(course_id);
  }
}

export default CoursesRepository;
