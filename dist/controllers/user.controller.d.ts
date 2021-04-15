import { MyUserService, UserRepository } from '@loopback/authentication-jwt';
import { TokenService } from '@loopback/authentication';
import { UserProfile } from '@loopback/security';
export declare class UserController {
    jwtService: TokenService;
    userService: MyUserService;
    user: UserProfile;
    protected userRepository: UserRepository;
    constructor(jwtService: TokenService, userService: MyUserService, user: UserProfile, userRepository: UserRepository);
}
