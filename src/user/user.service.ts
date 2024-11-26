import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { privateDecrypt } from 'crypto';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) { }

    async resolveIssues(): Promise<number> {
        const usersWithIssues = await this.userRepository.find({ where: { issues: true } });
        const usersWithIssuesCount = usersWithIssues.length;
        await this.userRepository.update({ issues: true }, { issues: false });
        return usersWithIssuesCount;
    }
}
