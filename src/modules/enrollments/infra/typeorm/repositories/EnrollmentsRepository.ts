import { getMongoRepository, MongoRepository } from 'typeorm';

import IEnrollmentsRepository from '@modules/enrollments/repositories/IEnrollmentsRepository';
import ICreateEnrollmentDTO from '@modules/enrollments/dtos/ICreateEnrollmentDTO';

import Enrollment from '../schemas/Enrollment';

class EnrollmentsRepository implements IEnrollmentsRepository {
  private ormRepository: MongoRepository<Enrollment>;

  constructor() {
    this.ormRepository = getMongoRepository(Enrollment);
  }

  public async find(): Promise<Enrollment[]> {
    const enrollments = this.ormRepository.find();

    return enrollments;
  }

  public async create({
    student_id,
    course_id,
  }: ICreateEnrollmentDTO): Promise<Enrollment> {
    const enrollment = this.ormRepository.create({
      student_id,
      course_id,
    });

    await this.ormRepository.save(enrollment);

    return enrollment;
  }

  public async findOne(enrollment_id: string): Promise<Enrollment | undefined> {
    const enrollment = this.ormRepository.findOne(enrollment_id);

    return enrollment;
  }

  public async save(enrollment: Enrollment): Promise<Enrollment> {
    await this.ormRepository.save(enrollment);

    return enrollment;
  }

  public async delete(enrollment_id: string): Promise<void> {
    await this.ormRepository.delete(enrollment_id);
  }
}

export default EnrollmentsRepository;
