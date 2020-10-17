import Enrollment from '../infra/typeorm/schemas/Enrollment';

import ICreateEnrollmentDTO from '../dtos/ICreateEnrollmentDTO';

export default interface IEnrollmentsRepository {
  create(data: ICreateEnrollmentDTO): Promise<Enrollment>;
  findOne(Enrollment_id: string): Promise<Enrollment | undefined>;
  save(enrollment: Enrollment): Promise<Enrollment>;
  delete(enrollment_id: string): Promise<void>;
}
