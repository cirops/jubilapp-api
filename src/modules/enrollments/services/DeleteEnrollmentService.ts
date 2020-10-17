import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import IEnrollmentsRepository from '../repositories/IEnrollmentsRepository';

interface IRequest {
  enrollment_id: string;
}

@injectable()
class DeleteEnrollmentService {
  constructor(
    @inject('EnrollmentsRepository')
    private EnrollmentsRepository: IEnrollmentsRepository,
  ) {}

  public async execute({ enrollment_id }: IRequest): Promise<void> {
    const Enrollment = await this.EnrollmentsRepository.findOne(enrollment_id);

    if (!Enrollment) {
      throw new AppError('Enrollment not found');
    }

    await this.EnrollmentsRepository.delete(enrollment_id);
  }
}

export default DeleteEnrollmentService;
