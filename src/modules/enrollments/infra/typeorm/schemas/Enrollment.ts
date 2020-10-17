import {
  ObjectID,
  Entity,
  Column,
  ObjectIdColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('enrollments')
class Enrollment {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  student_id: string;

  @Column()
  course_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Enrollment;
