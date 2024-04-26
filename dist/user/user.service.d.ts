import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UpdateUserDto } from './dto/UpdateUser.dto';
import { User } from './entities/user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    getAllUsers(): Promise<User[]>;
    getUserById(id: number): Promise<User>;
    getUserByUsername(username: string): Promise<User>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
    removeUser(id: number): Promise<User>;
    updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User>;
    updateOne(userId: string, data: UpdateUserDto): Promise<void>;
}
