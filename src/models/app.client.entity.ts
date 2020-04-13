
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AppClient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  key: string;

  @Column()
  secret: string;

  @Column()
  name: string;
}