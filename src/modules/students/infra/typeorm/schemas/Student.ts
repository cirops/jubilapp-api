import {
  ObjectID,
  Entity,
  Column,
  ObjectIdColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('students')
class Student {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  birth_date: Date;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}

export default Student;
