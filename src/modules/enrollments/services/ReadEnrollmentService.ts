import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import Enrollment from '../infra/typeorm/schemas/Enrollment';
import IEnrollmentsRepository from '../repositories/IEnrollmentsRepository';

interface IRequest {
  enrollment_id: string;
}

@injectable()
class ReadEnrollmentService {
  constructor(
    @inject('EnrollmentsRepository')
    private EnrollmentsRepository: IEnrollmentsRepository,
  ) {}

  public async execute({ enrollment_id }: IRequest): Promise<Enrollment> {
    const enrollment = await this.EnrollmentsRepository.findOne(enrollment_id);

    if (!enrollment) {
      throw new AppError('Enrollment does not exist.');
    }

    return enrollment;
  }
}

export default ReadEnrollmentService;
