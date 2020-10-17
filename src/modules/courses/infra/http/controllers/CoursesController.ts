import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreateCourseService from '@modules/courses/services/CreateCourseService';
import UpdateCourseService from '@modules/courses/services/UpdateCourseService';
import ReadCourseService from '@modules/courses/services/ReadCourseService';
import DeleteCourseService from '@modules/courses/services/DeleteCourseService';

export default class CoursesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { title, description } = request.body;
    const createCourse = container.resolve(CreateCourseService);
    const course = await createCourse.execute({
      title,
      description,
    });

    return response.status(200).json(course);
  }

  public async read(request: Request, response: Response): Promise<Response> {
    const course_id = request.params.id;
    const readCourse = container.resolve(ReadCourseService);

    const course = await readCourse.execute({ course_id });

    return response.status(200).json(course);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const course_id = request.params.id;
    const { title, description } = request.body;

    const updateCourse = container.resolve(UpdateCourseService);

    const user = await updateCourse.execute({
      course_id,
      title,
      description,
    });

    return response.json(user);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const course_id = request.params.id;

    const deleteCourse = container.resolve(DeleteCourseService);

    await deleteCourse.execute({ course_id });

    return response.status(204).send();
  }
}
