import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateUserDto } from './dto/CreateUser.dto'
import { UpdateUserDto } from './dto/UpdateUser.dto'

import { User } from './entities/user.entity'

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User) 
    private userRepository: Repository<User>
  ) {}

  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getUserById(id: number): Promise<User> {
    const user: User = await this.userRepository.findOne({ where: { id } });
  
    if (!user) {
      throw new NotFoundException('User is not found');
    }
  
    return user;
  }

  // For Auth
  async getUserByUsername(username: string): Promise<User> {
    let user: User = await this.userRepository.findOne({ where: { username } })

    if(!user) return null
    
    return user
  }

  async createUser(createUserDto: CreateUserDto) {
    let newUser = new User()

    newUser.username = createUserDto.username
    newUser.password = createUserDto.password
    newUser.email = createUserDto.email
    newUser.role = createUserDto.role

    return await this.userRepository.save(newUser)
  }

  async removeUser(id: number) {
    let user: User = await this.getUserById(id)

    return await this.userRepository.remove(user)
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    let user: User = await this.getUserById(id)
    
    user.password = updateUserDto.password

    return await this.userRepository.save(user)
  }

  async updateOne(userId: string, data: UpdateUserDto) {
    await this.userRepository.update(userId, data);
  }

}