import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import Enrollment from '../infra/typeorm/schemas/Enrollment';
import IEnrollmentsRepository from '../repositories/IEnrollmentsRepository';

interface IRequest {
  student_id: string;
  course_id: string;
}

@injectable()
class CreateEnrollmentService {
  constructor(
    @inject('EnrollmentsRepository')
    private EnrollmentsRepository: IEnrollmentsRepository,
  ) {}

  public async execute({
    student_id,
    course_id,
  }: IRequest): Promise<Enrollment> {
    if (!student_id) {
      throw new AppError('Must provide existing student id.');
    }

    if (!course_id) {
      throw new AppError('Must provide existing course id.');
    }

    const enrollment = await this.EnrollmentsRepository.create({
      student_id,
      course_id,
    });

    return enrollment;
  }
}

export default CreateEnrollmentService;
