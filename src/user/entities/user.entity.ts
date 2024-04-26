import { Entity, Column, PrimaryGeneratedColumn, Index, Unique, OneToMany } from 'typeorm'

@Entity('user')
@Index( ['username'] )
@Unique( 'username', ['username'] ) 
export class User {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  username: string

  @Column()
  email: string;

  @Column()
  password: string

  @Column()
  role: string;


}