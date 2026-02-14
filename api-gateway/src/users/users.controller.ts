import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    
    // this api will return all users that we have in our users service 
    @Get()
    async getUsers() {
        return this.usersService.getUsers();
    }
    
    // Get user by id this id is passed as a parameter in the url
    @Get(':id')
    async getUserById(@Param('id') id: number) {
        return this.usersService.getUserById(Number(id));
    }
}
