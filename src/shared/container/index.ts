import { container } from 'tsyringe';

import IStudentsRepository from '@modules/students/repositories/IStudentsRepository';
import StudentsRepository from '@modules/students/infra/typeorm/repositories/StudentsRepository';

import ICoursesRepository from '@modules/courses/repositories/ICoursesRepository';
import CoursesRepository from '@modules/courses/infra/typeorm/repositories/CoursesRepository';

import IEnrollmentsRepository from '@modules/enrollments/repositories/IEnrollmentsRepository';
import EnrollmentsRepository from '@modules/enrollments/infra/typeorm/repositories/EnrollmentsRepository';

container.registerSingleton<IStudentsRepository>(
  'StudentsRepository',
  StudentsRepository,
);

container.registerSingleton<ICoursesRepository>(
  'CoursesRepository',
  CoursesRepository,
);

container.registerSingleton<IEnrollmentsRepository>(
  'EnrollmentsRepository',
  EnrollmentsRepository,
);
