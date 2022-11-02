import { IUserService } from './users.service.interface';
import { UserRegisterDto } from './user-register.dto';
import { User } from '../user.entity';
import { injectable } from 'inversify';
import { UserLoginDto } from './user-login.dto';

@injectable()
export class UserService implements IUserService {
	async createUser({ email, name, password }: UserRegisterDto): Promise<User | null> {
		const newUser = new User(email, name);
		await newUser.setPassword(password);
		return null;
	}

	async validateUser(dto: UserLoginDto): Promise<boolean> {
		return true;
	}
}
