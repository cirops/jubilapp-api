import { Entity, Column, ObjectIdColumn, CreateDateColumn } from 'typeorm';

@Entity('students')
class Student {
  @ObjectIdColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column('timestamp with time zone')
  birth_date: Date;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}

export default Student;
