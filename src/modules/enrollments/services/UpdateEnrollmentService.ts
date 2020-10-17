import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import Enrollment from '../infra/typeorm/schemas/Enrollment';
import IEnrollmentsRepository from '../repositories/IEnrollmentsRepository';

interface IRequest {
  enrollment_id: string;
  student_id: string;
  course_id: string;
}

@injectable()
class UpdateEnrollmentService {
  constructor(
    @inject('EnrollmentsRepository')
    private EnrollmentsRepository: IEnrollmentsRepository,
  ) {}

  public async execute({
    enrollment_id,
    student_id,
    course_id,
  }: IRequest): Promise<Enrollment> {
    const enrollment = await this.EnrollmentsRepository.findOne(enrollment_id);

    if (!enrollment) {
      throw new AppError('Enrollment not found');
    }

    enrollment.student_id = student_id;
    enrollment.course_id = course_id;

    await this.EnrollmentsRepository.save(enrollment);

    return enrollment;
  }
}

export default UpdateEnrollmentService;
