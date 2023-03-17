import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import Course from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Fundamentos de NestJS',
      description: 'Curso de Fundamentos de NestJS',
      tags: ['node.js', 'nest.js', 'typescript'],
    },
  ];

  findAll() {
    return this.courses;
  }

  findOne(id: string) {
    const course = this.courses.find((course: Course) => course.id === Number(id));
    if (!course) {
      trow new HttpException(
      response: `Course ID ${id} not found`,
      HttpStatus.NOT_FOUND,
    );
    }

    return course;
  }

  create(createCourseDto: any) {
    this.courses.push(createCourseDto);
    return createCourseDto;
  }

  update(id: string, updateCourseDto: any) {
    const indexCourse = this.courses.findIndex(
      (course: Course) => course.id === Number(id),
    );
  }
  remove(id: string) {
    const indexCourse = this.courses.findIndex(
      (course: Course) => course.id === Number(id),
    );

    if (indexCourse >= 0) {
      this.courses.splice(indexCourse, deleteCount: 1);
    }
  }
}
