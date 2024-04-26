import { CreateUserDto } from './dto/CreateUser.dto';
import { UpdateUserDto } from './dto/UpdateUser.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUsers(): Promise<User[]>;
    getUser(id: number): Promise<User>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
    removeUser(id: number): Promise<User>;
    updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User>;
}
