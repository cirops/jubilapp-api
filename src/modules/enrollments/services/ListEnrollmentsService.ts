import { injectable, inject } from 'tsyringe';
import Enrollment from '../infra/typeorm/schemas/Enrollment';
import IEnrollmentsRepository from '../repositories/IEnrollmentsRepository';

@injectable()
class ListEnrollmentService {
  constructor(
    @inject('EnrollmentsRepository')
    private EnrollmentsRepository: IEnrollmentsRepository,
  ) {}

  public async execute(): Promise<Enrollment[]> {
    const enrollments = await this.EnrollmentsRepository.find();

    return enrollments;
  }
}

export default ListEnrollmentService;
