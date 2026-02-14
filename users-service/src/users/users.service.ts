import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    users = [{
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com'
    },
    {
        id: 2,
        name: 'Mir Khan',
        email: 'mir.khan@example.com',
    }];
    async findAll() {
        return this.users;
    }
    async findOne(id: number) {
        const user = this.users.find(user => user.id === Number(id));
        if (!user) {
            return {
                status: 'error',
                message: 'User not found'
            };
        }
        return {
            status: 'success',
            data: user
        };
    }
}
